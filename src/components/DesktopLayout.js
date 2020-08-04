import React, {useState, useEffect, useContext} from 'react';
import ContextMenu from './contextMenu';
import ToolbarLayout from './ToolbarLayout';
import { DesktopContext } from '../context/desktopContext';
import HoverMenu from './HoverMenu';
import WindowDialog from './windowDialog';
import {isMobile} from '../utils/check-mobile';
import StickyNote from './AppList/StickyNote';

const DesktopLayout = () => {
  const {desktopData} = useContext(DesktopContext)
  const [isContextMenuOpen, setContextMenuState] = useState(false)
  const [isEventInjected, setEventInjectState] = useState(false)
  const [currentCursorPos, setCursorPos] = useState({
    x: 0,
    y: 0
  })

  const customContextMenuHandler = (e) => {
    setCursorPos({
      x: e.clientX,
      y: e.clientY,
    })
    setContextMenuState(true);
    e.preventDefault();
  }
  useEffect(() => {
    console.log(isMobile);
    const containerDOM = document.getElementById('playground-container')
    if (!isEventInjected) {
      containerDOM.addEventListener('contextmenu', e => customContextMenuHandler(e), false);
      setEventInjectState(true)
    } else {
      containerDOM.removeEventListener('contextmenu', e => customContextMenuHandler(e), false);
    }
  }, [])
  return ( 
    <ToolbarLayout>
      <div className="p-2 h-screen" style={{background: `url(${desktopData.desktopWallpaper})`}} id="playground-container" onClick={()=>setContextMenuState(false)}>
        { isContextMenuOpen ? <ContextMenu pos={currentCursorPos}/> : '' }
      </div>
      <StickyNote />
      <WindowDialog />
      <HoverMenu />
    </ToolbarLayout>
  );
}
 
export default DesktopLayout;