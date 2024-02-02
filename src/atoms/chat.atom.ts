"use client";
import { atom, selector } from "recoil";

export interface Chat {
  id: number;
  type: "USER" | "BOT";
  items: any;
}

export const chatHistoryState = atom<Chat[]>({
  key: "chatHistory",
  default: [],
});

export const chatHistoryLengthState = selector({
  key: "chatHistoryLength",
  get: ({ get }) => {
    return get(chatHistoryState).length;
  },
});
