import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [isActive, setIsActive] = useState([true, false, false]);

  return (
    <SearchContext.Provider value={{ isActive, setIsActive }}>{children}</SearchContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = () => useContext(SearchContext);
