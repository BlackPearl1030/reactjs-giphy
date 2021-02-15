import React, { useContext, useEffect} from 'react';
import {createUseStyles} from 'react-jss';
import logo from "../assets/logo.svg";
import info from "../assets/info.svg";

import StoreContext from '../contexts/store-context';

const useStyles = createUseStyles({
  header: {
    justifyContent: 'center',
    display: 'flex',
    flexFlow: 'row nowrap',
    height: '40px',
    boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  },
  wrapper: {
    maxWidth: '1400px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    padding: '0 20px',
  },
  logo: {
    width: '93px',
    height: '16px',
  },
  info: {
    width: '18px',
    height: "18px",
    paddingRight: '9px',
  },
  button: {
    color: 'white',
    fontSize: '12px',
    fontFamily: 'Rubik-Medium',
    fontWeight: '500',
    background: '#4327f5',
    borderRadius: '4px',
    padding: '8px 15px',
    cursor: 'pointer',
    marginLeft: '6px',
    border: 'none',
  },
  flexRowCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: '#636465',
    '& span': {
      fontWeight: '700',
      color: 'white',
      textDecoration: 'underline',
    }

  }
});

const HeaderBar = () => {
  const classes = useStyles();
  const { getKeyword } = useContext(StoreContext);

  const onBtnClick = () => {
    getKeyword();
  };

  const handleKeyPress = e => {
    if (e.keyCode  === 32) {
      e.preventDefault();
      getKeyword();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress, false);
    return () => {
      document.removeEventListener('keydown', handleKeyPress, false);
    }
  }, []);

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <img src={logo} alt='logo' className={classes.logo}/>
        <div className={classes.flexRowCenter}>
          <img src={info} alt='info' className={classes.info}/>
          <p className={classes.text}>Press <span>spacebar</span> to shuffle or</p>
            <button className={classes.button}
              onClick={() => onBtnClick()}>
              Click here
            </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;