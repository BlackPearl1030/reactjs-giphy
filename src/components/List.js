import React , { useContext } from 'react';
import {createUseStyles} from 'react-jss';
import GifItem from './GifItem';
import LockItem from './LockItem';
import { ListContext } from '../contexts/list-context';
import StoreContext from '../contexts/store-context';

const useStyles = createUseStyles({
  wrapper: {
    margin: '0 auto',
    padding: '20px',
    maxWidth: '1400px',
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(335px, 1fr))',
    gridGap: '20px',
    gridAutoRows: '260px',
  },
  '@media screen and (max-width: 599px)': {
    list: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    },
  },
  item: {
    position: 'relative',
    boxSizing: 'border-box',
    cursor: 'pointer',
    '& > img': {
      width: '100%',
      height: '100%',
    },
    '&:hover': {
      border: '4px solid #4327f5',
    },
  },
});

const List = () => {
  const classes = useStyles();
  const { isSelected, gifs } = useContext(StoreContext);
  const { toggleStyles } = useContext(ListContext);

  return (
    <div className={classes.wrapper}>
      <div className={classes.list}>
        { gifs.map((gif, index) => (
            <div key={index}
              id={index}
              className={`${classes.item}`}
              onClick={ () => isSelected(index, gif) } >
                <GifItem gif={gif} />
                <LockItem
                  index={index}
                  onClick={ () => toggleStyles(index) } />
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;