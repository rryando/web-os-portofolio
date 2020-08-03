import React, { useContext } from 'react'
import { DesktopContext } from '../context/desktopContext';
import { Badge } from 'antd';


const HoverMenu = () => {
  const {desktopData, dispatch} = useContext(DesktopContext)
  const toggleAppOpen = (id) => {
    dispatch({type: 'SET_MENU_OPEN', id, isOpen: true})
  }
  return ( 
    <div className="hover-menu-wrapper">
      <div className="flex hover-menu p-2">
        {/* { JSON.stringify(desktopData.appList) } */}
        {desktopData.appList.map((menu, index) => {
          return (
            <div key={index} className="flex-initial text-gray-700 text-center hover-menu-item">
              <img src={menu.icon} className="hover-menu-icon" onClick={() => toggleAppOpen(menu.id)}/>
              <h2>{menu.isOpen}</h2>
              { menu.isOpen ? <Badge status="success" className="hover-menu-badge"/> : '' }
            </div>
          )
        })}
      </div>
    </div>
   );
}
 
export default HoverMenu;