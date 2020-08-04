import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap';
import { Draggable } from "gsap/Draggable";
import { CloseOutlined } from '@ant-design/icons';

const StickyNote = () => {
  const [noteList] = useState([
    {
      id: 0,
      text: 'noteListExample',
      title: 'noteListTitle',
      isActive: true,
    }
  ])

  useEffect(() => {
    gsap.registerPlugin(Draggable);
  }, []);

  useEffect(() => {
    Draggable.create(".sticky-note-dialog-active", {
      trigger: ".sticky-note-toolbar-active",
      type:"x,y",
    });
  }, [noteList]);

  return ( 
    <div>
      { noteList.map((note, index) => {
        return (
          <div className={`fixed sticky-note-dialog ${note.isActive ? 'sticky-note-dialog-active': ''}`} key={index}>
            <div className={`flex px-1 sticky-note-toolbar ${note.isActive ? 'sticky-note-toolbar-active': ''}`}>
              <div className="flex-1 text-left">
                <CloseOutlined className="text-center align-middle" />
              </div>
              <h3 className="flex-1 text-center align-middle">{note.title}</h3>
              <div className="flex-1"></div>
            </div>
            <div className="sticky-note-dialog-content p-2">
              <p>{note.text}</p>
            </div>
          </div>
        )
      })}
    </div>
   );
}
 
export default StickyNote;