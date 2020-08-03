import React, { useContext, useEffect } from 'react'
import { DesktopContext } from '../context/desktopContext';
import { gsap } from 'gsap';
import { Draggable } from "gsap/Draggable";

const WindowDialog = () => {
  const {desktopData, dispatch} = useContext(DesktopContext)
  const closeOpenApp = (id) => {
    dispatch({type: 'SET_MENU_OPEN', id, isOpen: false})
  }
  const toggleMaximizeOpenApp = (id) => {
    dispatch({type: 'SET_MENU_MAXIMIZE', id})
  }

  const toggleActiveOpenApp = (id) => {
    dispatch({type: 'SET_MENU_ACTIVE', id, isActive: true})
  }

  useEffect(() => {
    gsap.registerPlugin(Draggable);
  }, []);

  useEffect(() => {
    Draggable.create(".window-dialog-active", {
      trigger: ".window-dialog-toolbar-active",
      type:"x,y",
    });
  }, [desktopData]);

  return (
    <div>
      { desktopData.appList.map((dialog, index) => {
        return (
          dialog.isOpen ? 
            <div className={`window-dialog ${dialog.isActive ? 'window-dialog-active' : null} ${desktopData.themeClass} ${dialog.isMaximize ? 'window-dialog-maximize' : null}`} key={index}>
              <div className={`flex window-dialog-toolbar  ${dialog.isActive ? 'window-dialog-toolbar-active' : ''} align-middle justify-between ${desktopData.themeClass}`} onClick={() => toggleActiveOpenApp(dialog.id)}>
                <div className={`flex window-dialog-toolbar-icon text-center align-middle justify-between items-center p-2`}>
                  <div className={`flex-col window-dialog-toolbar-icon-set toolbar-icon-close p-2 ml-1`} onClick={(() => closeOpenApp(dialog.id))}></div>
                  <div className={`flex-col window-dialog-toolbar-icon-set toolbar-icon-minimize p-2 ml-1`}></div>
                  <div className={`flex-col window-dialog-toolbar-icon-set toolbar-icon-maximize p-2 ml-1`} onClick={() => toggleMaximizeOpenApp(dialog.id)}></div>
                </div>
                <div className={`flex window-dialog-toolbar-title text-center align-middle justify-between items-center p-2}`}>
                  <span>{dialog.title}</span>
                </div>
                <div className={`flex}`}>
                </div>
                {/* <div className={`window-dialog-toolbar ${desktopData.themeClass}`}>
                  
                </div> */}
              </div>
            </div>
            : null
        )
      })}
    </div>
    
    
   );
}
 
export default WindowDialog;