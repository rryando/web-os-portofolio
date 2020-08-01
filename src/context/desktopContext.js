import React, {createContext, useReducer} from 'react'
import PropTypes from 'prop-types';
import { initialState, desktopReducer } from '../reducers/desktopReducer';

export const DesktopContext = createContext()

const DesktopContextProvider = (props) => {
  const [desktopData, dispatch] = useReducer(desktopReducer, initialState);

  return ( 
    <DesktopContext.Provider value={{desktopData, dispatch}}>
      { props.children }
    </DesktopContext.Provider>
   );
}

DesktopContextProvider.propTypes = {
  children: PropTypes.object
}

export default DesktopContextProvider;