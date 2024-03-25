import { addDaysInDate, diffDateByDays } from "../../utils/dateConversion";

/*
    @Case1 : Assuming customer is returning bok on time (current_date is not required)

    @Case2 : Taking date of return as a parameter (current_date is required)
        - when today is the last date of return 
        - when customer return book earlier
        - when customer return book late
   */

export const calculatePriceToBePaid = (
  price: number,
  days_to_return: number,
  lent_date: Date,
  current_date: Date,
): { price: number; isLate: boolean } => {
  try {
    let dateBookToReturn: Date = new Date(lent_date);
    dateBookToReturn = addDaysInDate(days_to_return, dateBookToReturn);

    //@Case1
    if (!current_date) return { price: days_to_return * price, isLate: false };

    //@Case2
    const currentDate: Date = new Date(current_date);

    // when today is the last date of return
    if (dateBookToReturn == currentDate)
      return { price: days_to_return * price, isLate: false };

    // when customer return book earlier
    if (dateBookToReturn > currentDate)
      return {
        price: diffDateByDays(currentDate, lent_date) * price,
        isLate: false,
      };

    // when customer return book late
    if (dateBookToReturn < currentDate)
      return {
        price: diffDateByDays(currentDate, lent_date) * price,
        isLate: true,
      };
  } catch (error) {
    throw error;
  }
};
