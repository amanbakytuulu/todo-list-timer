import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "@app/store";

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
