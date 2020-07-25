import React, { useState } from 'react'
import PropTypes from 'prop-types';

const contextMenu = ({pos}) => {
  const [menuList] = useState([
    {
      title:'some menu',
      action: 'some action'
    },
    {
      title:'some menu',
      action: 'some action'
    },
    {
      title:'some menu',
      action: 'some action'
    },
  ])

  return ( 
    <div className="rounded bg-gray-300 w-64 border-solid border-2 border-gray-600" style={{position: 'fixed', left: `${pos.x}px`, top: `${pos.y}px`}}>
      <ul className="contextMenu-list">
        { menuList.map((menu, index) => {
          return (
            <li className="p-1 px-2 rounded" key={index}>{menu.title}</li>
          )
        }) }
      </ul>
    </div>
   );
}

contextMenu.propTypes = {
  pos: PropTypes.object
}
export default contextMenu;