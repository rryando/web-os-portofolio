import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types';
import { DesktopContext } from '../context/desktopContext';

const contextMenu = ({pos}) => {
  const {desktopData, dispatch} = useContext(DesktopContext)
  const [menuList] = useState([
    {
      title:'change desktop background',
      action: () => {
        console.log(desktopData)
        dispatch({type: 'SET_WALLPAPER', wallpaper: ''})
      }
    },
    {
      title:'toggle dark mode',
      action: () => {
        dispatch({type: 'TOGGLE_DARKMODE'})
      }
    },
  ])

  return ( 
    <div className="rounded bg-gray-300 w-64 border-solid border-1 border-gray-600" style={{position: 'fixed', left: `${pos.x}px`, top: `${pos.y}px`}}>
      <ul className="contextMenu-list">
        { menuList.map((menu, index) => {
          return (
            <li className="p-1 px-2 rounded" key={index} onClick={menu.action}>{menu.title}</li>
          )
        }) }
      </ul>
    </div>
   );
}

contextMenu.propTypes = {
  desktopData: PropTypes.object,
  pos: PropTypes.object
}
export default contextMenu;