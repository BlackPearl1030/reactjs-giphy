import React from 'react';
import withStyles from 'react-jss';

import HeaderBar from './HeaderBar';
import List from './List';
import GlobalState from '../contexts/GlobalState';
import { ListContextProvider } from '../contexts/list-context';

const styles = {
  '@global': {
    body: {
      margin: '0',
      padding: '0',
    }
  },
  mainWrapper: {
    backgroundColor: '#2a2b2c',
    fontFamily: 'Rubik-Medium',
    fontSize: '12px',
    fontWeight: '500',
    color: 'white',
  }
};

const contentWrapper = ({ classes, children }) => (
  <div className={classes.mainWrapper}>
    {children}
  </div>
);
const StyledContent = withStyles(styles)(contentWrapper)

const App = () => {
  return (
    <StyledContent>
      <GlobalState>
          <HeaderBar/> 
          <ListContextProvider>
            <List />
          </ListContextProvider>
      </GlobalState>
    </StyledContent>
  );
}

export default App;