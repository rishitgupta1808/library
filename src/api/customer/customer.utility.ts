import { addDaysInDate, diffDateByDays } from "../../utils/dateConversion";

/*
    @Case1 : Assuming customer is returning bok on time (current_date is not required)

    @Case2 : Taking date of return as a parameter (current_date is required)
        - when today is the last date of return 
        - when customer return book earlier
        - when customer return book late
   */


const checkIsDaysOfChargesUnderMinDays = (min_day : number, min_charges :  number, days_to_return : number, price : number, charges_in_min_day  : number) : number => {
    if(min_day && min_charges){     //can be null as it is nullable true in entity
        if(days_to_return < min_day){
            return +min_charges      //Minimum changes will be considered as Rs 2 if days rented is less than 2 days
        }
        if(charges_in_min_day)
        return (charges_in_min_day * min_day) + (days_to_return - min_day) * price  // when charges of minimum days is there for ex :2 days charges will be Rs 1 per day and 1.5 Rs there after
    }
    return days_to_return * price;
}

export const calculatePriceToBePaid = (
  price: number,
  days_to_return: number,
  lent_date: Date,
  current_date: Date,
  min_day : number,
  min_charges : number,
  charges_in_min_day : number
): { price: number; isLate: boolean } => {
  try {
    let dateBookToReturn: Date = new Date(lent_date);
    dateBookToReturn = addDaysInDate(days_to_return, dateBookToReturn);

    //@Case1
    if (!current_date) return { price: checkIsDaysOfChargesUnderMinDays(min_day, min_charges, days_to_return, price, charges_in_min_day), isLate: false };

    //@Case2
    const currentDate: Date = new Date(current_date);

    // when today is the last date of return
    if (dateBookToReturn == currentDate)
      return { price: checkIsDaysOfChargesUnderMinDays(min_day, min_charges, days_to_return, price, charges_in_min_day), isLate: false };

    // when customer return book earlier
    if (dateBookToReturn > currentDate)
      return {
        price: checkIsDaysOfChargesUnderMinDays(min_day, min_charges, diffDateByDays(currentDate, lent_date), price , charges_in_min_day),
        isLate: false,
      };

    // when customer return book late
    if (dateBookToReturn < currentDate)
      return {
        price: checkIsDaysOfChargesUnderMinDays(min_day, min_charges, diffDateByDays(currentDate, lent_date), price, charges_in_min_day),
        isLate: true,
      };
  } catch (error) {
    throw error;
  }
};
