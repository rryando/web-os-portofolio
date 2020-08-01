import React, { useState } from 'react'
import chromeIcon from '../images/wallpaper/chrome-icon.png'

const HoverMenu = () => {
  const [menuList] = useState([
    {
      title: 'some app',
      icon: chromeIcon,
      action: '',
    },
    {
      title: 'some app',
      icon: chromeIcon,
      action: '',
    },
    {
      title: 'some app',
      icon: chromeIcon,
      action: '',
    }
  ])
  return ( 
    <div className="hover-menu-wrapper">
      <div className="flex hover-menu p-2">
        {menuList.map((menu, index) => {
          return (
            <div key={index} className="flex-initial text-gray-700 text-center hover-menu-item">
              <img src={menu.icon} className="hover-menu-icon" />
            </div>
          )
        })}
      </div>
    </div>
   );
}
 
export default HoverMenu;