import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './StickyNote.css'

const EditorWrapper = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  // const [isFocused, setEditorFocus] = useState(false)
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  }

  // const onEditorFocus = () => {
  //   console.log(isFocused)
  //   setEditorFocus(true)
  // }

  // const onEditorBlur = () => {
  //   setEditorFocus(false)
  // }
  return (
    <Editor
      toolbarOnFocus
      editorState={editorState}
      // readOnly={!note.isActive}
      // editable={note.isActive}
      toolbarClassName="rdw-storybook-toolbar-absolute"
      wrapperClassName="rdw-storybook-wrapper-floating"
      editorClassName="rdw-storybook-wrapper-sticky"
      onEditorStateChange={onEditorStateChange}
      // onFocus={onEditorFocus}
      // onBlur={onEditorBlur}
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
  );
}

export default EditorWrapper;