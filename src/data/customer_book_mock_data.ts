export const CustomerBookMockData = (customer_id: number, book_id: string[]) =>
  [
    {
      id: 2,
      days_to_return: 19,
      bookBookId: "9c480ab4-4dc7-455e-9284-af60a3906c5f",
      lent_date: "2023-08-31",
      customerCustomerId: 1,
    },
    {
      id: 3,
      days_to_return: 16,
      bookBookId: "4289f532-59e8-4f28-99c3-ee0391218370",
      lent_date: "2023-08-27",
      customerCustomerId: 2,
    },
    {
      id: 4,
      days_to_return: 12,
      bookBookId: "29867db1-6305-4f6d-9152-b24c1f81696c",
      lent_date: "2023-09-02",
      customerCustomerId: 2,
    },
    {
      id: 8,
      days_to_return: 10,
      bookBookId: "b2883074-8b3c-46f6-bc2d-93aad23050c8",
      lent_date: "2023-05-29",
      customerCustomerId: 3,
    },
    {
      id: 9,
      days_to_return: 14,
      bookBookId: "c47b0e91-6401-43f3-a24d-636a4542ad71",
      lent_date: "2023-09-21",
      customerCustomerId: 3,
    },
    {
      id: 10,
      days_to_return: 16,
      bookBookId: "e85f672d-5b35-4ce1-8f59-3b56c2a06af1",
      lent_date: "2023-04-30",
      customerCustomerId: 3,
    },
    {
      id: 15,
      days_to_return: 14,
      bookBookId: "7b19b1b9-fb61-4894-a1a4-58e8583ff52e",
      lent_date: "2023-04-27",
      customerCustomerId: 5,
    },
    {
      id: 16,
      days_to_return: 26,
      bookBookId: "073ba02c-3297-458f-9c49-da54177cc35b",
      lent_date: "2023-09-09",
      customerCustomerId: 5,
    },
    {
      id: 17,
      days_to_return: 16,
      bookBookId: "48726fce-2c15-4b86-a087-bf299f58ed36",
      lent_date: "2023-05-21",
      customerCustomerId: 5,
    },
  ].filter(
    (d) =>
      d.customerCustomerId == customer_id && book_id.includes(d.bookBookId),
  );
