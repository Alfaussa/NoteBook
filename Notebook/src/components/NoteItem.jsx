import React, {useState} from 'react'
import { RiDeleteBin3Line } from "react-icons/ri";
import styled from 'styled-components'

const Note = styled.div`
  display: flex;
  justify-content: space-between;
  color:white;

`
const TextNote = styled.div`
  display: inline-block;
  overflow: hidden;  
  white-space: nowrap;
  text-overflow: ellipsis
`
const Delete = styled.div`

padding: 3px ;

`
const NoteItem = ({note, editNote, deleteNote}) => {


  return (
    <Note>
    <TextNote onClick={()=>editNote(note)}>{note.text}</TextNote>
    <Delete onClick={()=>deleteNote(note.id)}><RiDeleteBin3Line/></Delete>
    </Note>
  )
}

export default NoteItem