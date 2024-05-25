import React, { useState, createContext } from "react";


export const LoaderContext = createContext({
  loading: false,
  setLoading: () => {}, 
});


export const LoaderMiddleware = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};
