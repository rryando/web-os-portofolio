import React, { useState, useContext, useEffect } from 'react'
import { DesktopContext } from '../context/desktopContext';
import { gsap } from 'gsap';
import { Draggable } from "gsap/Draggable";

const WindowDialog = () => {
  const {desktopData} = useContext(DesktopContext)

  const [dialogs] = useState([
    {
      title: 'dialog title',
      content: 'dialog content',
      isOpen: true,
      isMinimize: false,
    }
  ])

  useEffect(() => {
    gsap.registerPlugin(Draggable);
    Draggable.create(".window-dialog", {
      trigger: ".window-dialog-toolbar",
      type:"x,y",
    });
  }, []);

  return (
    <div>
      { dialogs.map((dialog, index) => {
        return (
          dialog.isOpen ? 
            <div className={`window-dialog ${desktopData.themeClass}`} key={index}>
              <div className={`flex window-dialog-toolbar align-middle justify-between ${desktopData.themeClass}`}>
                <div className={`flex window-dialog-toolbar-icon text-center align-middle justify-between items-center p-2}`}>
                  <div className={`flex-col window-dialog-toolbar-icon-set toolbar-icon-close p-2 ml-1`}></div>
                  <div className={`flex-col window-dialog-toolbar-icon-set toolbar-icon-minimize p-2 ml-1`}></div>
                  <div className={`flex-col window-dialog-toolbar-icon-set toolbar-icon-maximize p-2 ml-1`}></div>
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
            : <div></div>
        )
      })}
    </div>
    
    
   );
}
 
export default WindowDialog;