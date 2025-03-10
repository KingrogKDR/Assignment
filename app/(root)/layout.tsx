import React from "react";
import { UserProvider } from "../redux/providers";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default RootLayout;
