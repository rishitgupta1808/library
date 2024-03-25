export const CustomerBookMockData = (customer_id: number, book_id: string[]) =>
  [
    {
      id: 2,
      days_to_return: 19,
      bookBookId: "9c480ab4-4dc7-455e-9284-af60a3906c5f",
      lent_date: "2023-08-31",
      customerCustomerId: 1,
      book : {
        book_name : "psst huzzah meh",
        bookType : {
            id : 1,
            price  : 1.50,
            min_day : 2,
            min_charges : 2,
           charges_in_min_day : 1.00
        }
      }
    },
    {
      id: 3,
      days_to_return: 16,
      bookBookId: "4289f532-59e8-4f28-99c3-ee0391218370",
      lent_date: "2023-08-27",
      customerCustomerId: 2,
      book : {
        book_name : "even geez worthwhile",
        bookType : {
            id : 3,
            price  : 1.50,
            min_day : 3,
            min_charges : 4.5
        }
      }
    },
    {
      id: 4,
      days_to_return: 12,
      bookBookId: "29867db1-6305-4f6d-9152-b24c1f81696c",
      lent_date: "2023-09-02",
      customerCustomerId: 2,
      book : {
        book_name : "conductor popcorn timbale",
        bookType : {
            id : 1,
            price  : 1.50,
            min_day : 2,
            min_charges : 2,
        }
      }
    },
    {
      id: 8,
      days_to_return: 10,
      bookBookId: "b2883074-8b3c-46f6-bc2d-93aad23050c8",
      lent_date: "2023-05-29",
      customerCustomerId: 3,
      book : {
        book_name : "gah laborer superintend",
        bookType : {
            id : 1,
            price  : 1.50,
            min_day : 2,
            min_charges : 2,
           charges_in_min_day : 1.00
        }
      }
    },
    {
      id: 9,
      days_to_return: 14,
      bookBookId: "c47b0e91-6401-43f3-a24d-636a4542ad71",
      lent_date: "2023-09-21",
      customerCustomerId: 3,
      book : {
        book_name : "each anticipate pfft",
        bookType : {
            id : 1,
            price  : 1.50,
            min_day : 2,
            min_charges : 2,
           charges_in_min_day : 1.00
        }
      }
    },
    {
      id: 10,
      days_to_return: 16,
      bookBookId: "e85f672d-5b35-4ce1-8f59-3b56c2a06af1",
      lent_date: "2023-04-30",
      customerCustomerId: 3,
      book : {
        book_name : "outmaneuver aha old-fashioned",
        bookType : {
            id : 3,
            price  : 1.50,
            min_day : 3,
            min_charges : 4.5
        }
      }
    },
    {
        id: 11,
        days_to_return: 28,
        bookBookId: "48ec4968-8ac3-4609-8a9a-f2dc29846743",
        lent_date: "2023-09-23",
        customerCustomerId: 3,
        book : {
          book_name : "phew diagnosis mukluk",
          bookType : {
              id : 2,
              price  : 3.00,
          }
        }
      },
    {
      id: 15,
      days_to_return: 14,
      bookBookId: "7b19b1b9-fb61-4894-a1a4-58e8583ff52e",
      lent_date: "2023-04-27",
      customerCustomerId: 5,
      book : {
        book_name : "apportion amidst blah",
        bookType : {
            id : 3,
            price  : 1.50,
            min_day : 3,
            min_charges : 4.5
        }
      }
    },
    {
      id: 16,
      days_to_return: 26,
      bookBookId: "073ba02c-3297-458f-9c49-da54177cc35b",
      lent_date: "2023-09-09",
      customerCustomerId: 5,
      book : {
        book_name : "excitedly elementary miserably",
        bookType : {
            id : 1,
            price  : 1.50,
            min_day : 2,
            min_charges : 2,
           charges_in_min_day : 1.00
        }
      }
    },
    {
      id: 17,
      days_to_return: 16,
      bookBookId: "48726fce-2c15-4b86-a087-bf299f58ed36",
      lent_date: "2023-05-21",
      customerCustomerId: 5,
      book : {
        book_name : "fiercely yum terribly",
        bookType : {
            id : 1,
            price  : 1.50,
            min_day : 2,
            min_charges : 2,
           charges_in_min_day : 1.00
        }
      }
    },
    {
        id: 42,
        days_to_return: 2,
        bookBookId: "9eb414dd-8599-43a8-941d-64be8d7a2552",
        lent_date: "2024-01-24",
        customerCustomerId: 13,
        book : {
          book_name : "consequently across obedient",
          bookType : {
              id : 3,
              price  : 1.50,
              min_day : 3,
              min_charges : 4.50,
          }
        }
      }
  ].filter(
    (d) =>
      d.customerCustomerId == customer_id && book_id.includes(d.bookBookId),
  );
