import React, { createContext, useEffect, useContext } from 'react';
import StoreContext from './store-context';

export const ListContext = createContext({
  toggleStyles: ()=> {},
});

export const ListContextProvider = ({children}) => {
  const { selectedGifs } = useContext(StoreContext);
  const toggleStyles = (index) => {
    let result = (selectedGifs[index] !== null) ? true : false;
    return result
  };

  useEffect(() => {
    toggleStyles();
  }, [selectedGifs, toggleStyles()]);


  return (
    <ListContext.Provider value={{
      toggleStyles: toggleStyles,
    }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;