export const ADD_GIF_TO_STORAGE = 'ADD_GIF_TO_STORAGE';
export const REMOVE_GIF_FROM_STORAGE = 'REMOVE_GIF_FROM_STORAGE';

export const gifReducer = (state, action) => {
  switch (action.type) {
    case ADD_GIF_TO_STORAGE:
      return addGifToStorage(action.selectedIndex, action.gif, state);
    case REMOVE_GIF_FROM_STORAGE:
      return removeGifFromStorage(action.selectedIndex, state);
    default:
      return state;
  }
};

const addGifToStorage = (selectedIndex, gif, state) => {
  let updatedStorage = [...state.store];
  if(updatedStorage[selectedIndex] === null){
    updatedStorage[selectedIndex] = gif;
  }
  return { ...state, store: updatedStorage };
}

const removeGifFromStorage = (selectedIndex, state) => {
  let updatedStorage = [...state.store];
  updatedStorage[selectedIndex] = null;
  return { ...state, store: updatedStorage };
};