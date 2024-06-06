import { createContext, useContext } from "react";
import { useSelector } from "react-redux";
import { selectHasRunOnce } from "../app/dotaSlice";

interface HasRunOnceContextType {
  hasRunOnce: boolean;
}

const HasRunOnceContext = createContext<HasRunOnceContextType | null>(null);

export function HasRunOnceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasRunOnce = useSelector(selectHasRunOnce);

  return (
    <HasRunOnceContext.Provider value={{ hasRunOnce }}>
      {children}
    </HasRunOnceContext.Provider>
  );
}

export const useHasRunOnce = () => {
  const context = useContext(HasRunOnceContext);

  if (!context) {
    throw new Error("hasRunOnce must be used with in a HasRunOnceProvider");
  }

  return context;
};
