import React, { createContext, useEffect, useContext } from 'react';
import StoreContext from './store-context';

export const ListContext = createContext({
  toggleStyles: ()=> {},
});

export const ListContextProvider = (props) => {
  const { selectedGifs } = useContext(StoreContext);
  const toggleStyles = (index) => {
    if(selectedGifs !== null && selectedGifs !== undefined) {
      if(selectedGifs[index] != null) return true
    }
  };

  useEffect(() => {
    toggleStyles();
  }, [selectedGifs, toggleStyles()]);


  return (
    <ListContext.Provider value={{
      toggleStyles: toggleStyles,
    }}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;