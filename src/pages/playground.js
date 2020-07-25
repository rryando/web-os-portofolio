import React, {useState, useEffect} from 'react';
import ContextMenu from '../components/contextMenu';
import ToolbarLayout from '../components/ToolbarLayout';

const playground = () => {
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
    setContextMenuState(true)
    e.preventDefault();
  }
  useEffect(() => {
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
      <div className="p-2 mt-6 h-screen" id="playground-container" onClick={()=>setContextMenuState(false)}>
        <h2 className="text-center">Component Playground</h2>
        { isContextMenuOpen ? <ContextMenu pos={currentCursorPos}/> : <div>{JSON.stringify(currentCursorPos)}</div> }
      </div>
    </ToolbarLayout>
  );
}
 
export default playground;