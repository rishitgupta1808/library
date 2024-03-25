import request from 'supertest';
import { createConnection, getConnection } from 'typeorm';
import { app } from '../src/app'; // Assuming your Express app is exported from src/app.ts
import { dbManager } from '../src/config/db';

describe('API Tests', () => {

/*
Can uncomment the code when db is available
*/

//   beforeAll(async () => {
//     await dbManager.connect() // Establish a connection to your TypeORM entities
//   });

//   afterAll(async () => {
//     await dbManager.close()
//   });

it('should return 400 for bad requests', async () => {
    // Test cases for various bad request scenarios
    const testCases = [
      { description: 'missing book_id and customer_id', query: { current_date: '2023-10-10' } },
      { description: 'missing book_id', query: { customer_id: 3, current_date: '2023-10-10' } },
      { description: 'missing customer_id', query: { book_id: 'e85f672d-5b35-4ce1-8f59-3b56c2a06af1', current_date: '2023-10-10' } },
      // Add more test cases as needed
    ];

    for (const testCase of testCases) {
      const response = await request(app).get('/api/customer/fees').query(testCase.query);

      expect(response.status).toBe(400);
      // Optionally, you can add more assertions to check the response body, headers, etc.
    }
  });

  it('when customer return book earlier', async () => {
    const response = await request(app).get('/api/customer/fees')
      .query({
        customer_id: 3,
        book_id: 'e85f672d-5b35-4ce1-8f59-3b56c2a06af1',
        current_date: '2023-05-10'
      });

    expect(response.status).toBe(200);
   
    expect(response.body.success).toBe(true);
    expect(response.body.data.price).toBe(10);
  });

  it('when customer return book late', async () => {
    const response = await request(app).get('/api/customer/fees')
      .query({
        customer_id: 3,
        book_id: 'e85f672d-5b35-4ce1-8f59-3b56c2a06af1',
        current_date: '2023-10-10'
      });

    expect(response.status).toBe(200); 

    expect(response.body.success).toBe(true);
    expect(response.body.data.price).toBe(163);
    expect(typeof response.body.data.message).toBe('string');
  });

  it('when current_date is not present (Assumption customer return book on time)', async () => {
    const response = await request(app).get('/api/customer/fees')
      .query({
        customer_id: 3,
        book_id: 'b2883074-8b3c-46f6-bc2d-93aad23050c8,c47b0e91-6401-43f3-a24d-636a4542ad71',
      });

    expect(response.status).toBe(200); 

    expect(response.body.success).toBe(true);
    expect(response.body.data.price).toBe(24);
  });
});