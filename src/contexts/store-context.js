import React from 'react';

export default React.createContext({
  gifs: [],
  selectedGifs: [],
  isSelected: () => {},
  getKeyword: () => {},
  addGifToStorage: () => {},
  removeGifFromStorage: () => {},
});