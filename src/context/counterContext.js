import { createContext, useState } from "react";

export const counterContext = createContext();


const CounterContext = ({ children }) => {
  const [contextCounter, setContextCounter] = useState(0);

  return (
    <counterContext.Provider value={ { contextCounter, setContextCounter } }>
      {children}
    </counterContext.Provider>
  );
};

export default CounterContext;