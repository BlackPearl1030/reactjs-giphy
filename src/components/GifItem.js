import React from 'react';

const GifItem = ({ gif }) => {
  return <img alt={gif.title} src={gif.images.original.url} />
};

export default GifItem;