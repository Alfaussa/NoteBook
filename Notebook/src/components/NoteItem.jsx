import React, {useState} from 'react'

const NoteItem = ({note, editNote}) => {


  return (
    <div className='note-item'>
    <div onClick={()=>editNote(note)}>{note.text}</div>
    </div>
  )
}

export default NoteItem