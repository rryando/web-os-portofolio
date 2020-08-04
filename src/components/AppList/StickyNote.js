import React, { useState } from 'react'

const StickyNote = () => {
  const [noteList] = useState([
    {
      id: 0,
      text: 'noteListExample'
    }
  ])

  return ( 
    <div className="fixed sticky-note-dialog">
      { noteList.map((note, index) => {
        return (
          <p key={index}>{note.text}</p>
        )
      })}
    </div>
   );
}
 
export default StickyNote;