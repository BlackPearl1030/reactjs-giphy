import React , { useContext } from 'react';
import {createUseStyles} from 'react-jss';
import lockIcon from "../assets/lock.svg";
import unlockIcon from "../assets/unlock.svg";
import { ListContext } from '../contexts/list-context';

const useStyles = createUseStyles({
  icon: {
    position: 'absolute',
    bottom: '0',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    height: '60px',
    background: 'linear-gradient(0deg, rgba(42, 43, 44, 0) 0%, rgb(42, 43, 44) 100%)',
    '& > img': {
      width: '27px',
      height: '32px',
    },
  }, 
});

const LockItem = ({ index }) => {
  const classes = useStyles();
  const { toggleStyles } = useContext(ListContext)
  const active = toggleStyles(index);
  
  return (
    <div className={`${classes.icon}`}>
      <img src={`${active ? lockIcon : unlockIcon}`} alt={`${active ? 'lock' : 'unlock'}`} />
      <span>Click to {`${active ? 'unlock' : 'lock'}`}</span>
    </div>
  )
}
export default LockItem;