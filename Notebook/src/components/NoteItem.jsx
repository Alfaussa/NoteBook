import React, {useState} from 'react'
import { RiDeleteBin3Line } from "react-icons/ri";
import styled from 'styled-components'

const Note = styled.div`
  display: flex;
  justify-content: space-between;

`
const Delete = styled.div`

padding: 3px ;

`
const NoteItem = ({note, editNote, deleteNote}) => {


  return (
    <Note>
    <div onClick={()=>editNote(note)}>{note.text}</div>
    <Delete onClick={()=>deleteNote(note.id)}><RiDeleteBin3Line/></Delete>
    </Note>
  )
}

export default NoteItem