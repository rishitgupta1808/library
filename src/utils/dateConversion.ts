import { MILLISECONDS_IN_A_DAY } from "../constants/dateConstants";

export const converttStringDateintoJsDate = (date: string) => {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day);
};

export const addDaysInDate = (days: number, date: Date): Date =>
  new Date(date.setDate(date.getDate() + days));

export const diffDateByDays = (date1: Date, date2: Date): number =>
  Number(Math.abs(date1.getTime() - date2.getTime()) / MILLISECONDS_IN_A_DAY);
