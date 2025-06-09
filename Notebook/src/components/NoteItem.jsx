import React, {useState} from 'react'
import { RiDeleteBin3Line } from "react-icons/ri";

const NoteItem = ({note, editNote, deleteNote}) => {


  return (
    <div className='note-item'>
    <div onClick={()=>editNote(note)}>{note.text}</div>
    <div onClick={()=>deleteNote(note.id)}><RiDeleteBin3Line/></div>
    </div>
  )
}

export default NoteItem