import { PropsWithChildren } from "react";

import { StoreProvider } from "./storage-provider";

export const AppProvider = ({ children }: PropsWithChildren) => {
  return <StoreProvider>{children}</StoreProvider>;
};
