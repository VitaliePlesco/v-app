import { db } from "@/lib/db";
import { create } from "zustand";
import { Booking } from "@prisma/client";
import { fetchAvailableRooms } from "@/lib/data";
import { subDays } from "date-fns";


export type CartState = {
  id: string;
  hotelId: string;
  bookingDate: Date;
  startDate: Date;
  endDate: Date;
  userId: string;
  roomNumber: number;

}

export type CartActions = {
  setHotel: () => void;
  addToCart: (roomNumber: number) => void;
}

export const initialCartState: CartState = {
  id: "",
  hotelId: "",
  bookingDate: new Date,
  startDate: new Date,
  endDate: new Date,
  userId: "",
  roomNumber: 0,
}

export const useCartStore = create<CartState & CartActions>((set) => ({
  ...initialCartState,
  setHotel: () => console.log("hotel"),
  addToCart: (roomNumber: number) => {
    console.log("hello");
  }

}))