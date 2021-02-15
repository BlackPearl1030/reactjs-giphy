import React, { useState, useReducer, useEffect } from 'react';
import giphy from '../api/giphy';
import { KEYWORDS, LENGTH_LIMIT, STORAGE_KEY, API_KEY } from '../constants/constants'
import { gifReducer, ADD_GIF_TO_STORAGE, REMOVE_GIF_FROM_STORAGE } from './reducers';
import StoreContext from './store-context';

const GlobalState = ({children}) => {
  const selectedGifs = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const [searchTerm, setSearchTerm ] = useState('');
  const [gifs, setGifs] = useState([]);

  const initial = () => {
    let result;
    selectedGifs && selectedGifs.length > 0
    ? result=selectedGifs
    : result=Array(LENGTH_LIMIT).fill(null)
    return result
  }

  const [selectedGifState, dispatch] = useReducer(
    gifReducer, {store: initial() }
  );
  
  const getKeyword = () => {
    const getRndString = KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)];
    setSearchTerm(getRndString);
  };

  useEffect(() => {
    getKeyword();
  },[] );
  
  const search = async searchTerm => {
    const response = await giphy.get('/gifs/search', {
      params : {
        q: searchTerm,
        api_key: API_KEY,
        limit : LENGTH_LIMIT,
      },
    });

    const sortedArray = response.data.data.slice();
    sortedArray.sort(function compare(a, b) {
      let dateA = new Date(a.import_datetime);
      let dateB = new Date(b.import_datetime);
      return dateA - dateB;
    });
    setGifs(sortedArray);
  
    if(selectedGifs && selectedGifs.length > 0) {
      const combinedArray = selectedGifs.map(function(item,i) {
        if (item === null) {
          item = sortedArray[i];
        }
        return item;
      });
      setGifs(combinedArray);
    }
  };

  useEffect(() => {
    searchTerm && search(searchTerm);
  }, [searchTerm]);

  const isSelected = (selectedIndex, gif) => {
    selectedGifState.store[selectedIndex] === null
      ? addGifToStorage(selectedIndex,gif)
      : removeGifFromStorage(selectedIndex); 
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedGifState.store));
  }, [selectedGifState]);
  
  const addGifToStorage = (selectedIndex,gif) => {
    dispatch({ type: ADD_GIF_TO_STORAGE, selectedIndex, gif});
  };

  const removeGifFromStorage = (selectedIndex) => {
    dispatch({ type: REMOVE_GIF_FROM_STORAGE, selectedIndex });
  };

  return (
    <StoreContext.Provider
      value={{
        gifs: gifs,
        selectedGifs: selectedGifState.store,
        isSelected: isSelected,
        getKeyword: getKeyword,
        addGifToStorage: addGifToStorage,
        removeGifFromStorage: removeGifFromStorage,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default GlobalState;
