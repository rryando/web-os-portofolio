import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap';
import { Draggable } from "gsap/Draggable";
import { CloseOutlined } from '@ant-design/icons';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './StickyNote.css'

const StickyNote = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [isFocused, setEditorFocus] = useState(false)
  const [noteList, setNote] = useState([
    {
      id: 0,
      text: 'noteListExample',
      title: 'Sticky Note',
      isActive: true,
    },
    {
      id: 1,
      text: 'noteListExample',
      title: 'Sticky Note',
      isActive: false,
    }
  ])

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  }

  const onEditorFocus = () => {
    setEditorFocus(true)
  }

  const onEditorBlur = () => {
    setEditorFocus(false)
  }

  const setActiveNote = (id) => {
    const prevNote = [...noteList]
    const noteId = prevNote.findIndex(note => note.id === id)
    prevNote.map(note => note.isActive = false)
    prevNote[noteId].isActive = true
    console.log(prevNote)
    setNote(prevNote)
  }

  useEffect(() => {
    gsap.registerPlugin(Draggable);
  }, []);

  useEffect(() => {
    Draggable.create(".sticky-note-dialog-active", {
      trigger: ".sticky-note-toolbar-active",
      type: "x,y",
    });
  }, [noteList]);

  return (
    <div>
      {noteList.map((note, index) => {
        return (
          <div className={`fixed sticky-note-dialog ${note.isActive ? 'sticky-note-dialog-active' : ''} ${isFocused ? 'disable-overflow' : 'enable-overflow '}`} key={index} onClick={() => setActiveNote(note.id)}>
            <div className={`flex px-1 sticky-note-toolbar ${note.isActive ? 'sticky-note-toolbar-active' : ''}`}>
              <div className="flex-1 text-left">
                <CloseOutlined className="text-center align-middle" />
              </div>
              <h3 className="flex-1 text-center align-middle">{note.title}</h3>
              <div className="flex-1"></div>
            </div>
            <div className="sticky-note-dialog-content p-2">
              <Editor
                toolbarOnFocus
                editorState={editorState}
                // readOnly={!note.isActive}
                // editable={note.isActive}
                toolbarClassName="rdw-storybook-toolbar-absolute"
                wrapperClassName="rdw-storybook-wrapper-floating"
                editorClassName="rdw-storybook-wrapper-sticky"
                onEditorStateChange={onEditorStateChange}
                onFocus={onEditorFocus}
                onBlur={onEditorBlur}
                toolbar={{
                  options: ['inline', 'fontSize', 'history', 'link', 'image', 'textAlign', 'list'],
                  inline: {
                    options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
                    bold: { className: 'bordered-option-classname' },
                    italic: { className: 'bordered-option-classname' },
                    underline: { className: 'bordered-option-classname' },
                    strikethrough: { className: 'bordered-option-classname' },
                    code: { className: 'bordered-option-classname' },
                  },
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default StickyNote;