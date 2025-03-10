"use client";

import { Provider } from "react-redux";
import { userStore } from "./store";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  return Provider({ store: userStore, children})
};
