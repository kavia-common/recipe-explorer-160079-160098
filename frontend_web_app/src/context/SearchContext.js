import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext({
  searchTerm: '',
  setSearchTerm: () => {},
});

// PUBLIC_INTERFACE
export function SearchProvider({ children }) {
  /** Provides global search state (searchTerm and setter) to the app. */
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useSearch() {
  /** Hook to access the global search context. */
  return useContext(SearchContext);
}
