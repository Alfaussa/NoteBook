import { useState } from 'react'
import { nanoid } from 'nanoid'
import  TextareaForm  from './components/TextareaForm'
import NoteItem from './components/NoteItem'

import './App.css'

function App() {
  
  const [notes, setNotes] = useState([]);

  const addNote = (userInput) => {
    if(userInput){
      const newNote ={
        id: nanoid(),
        text: userInput,
        isEditing: false,
      }
      setNotes([...notes, newNote])
    }
  }
  const editNote = (id) => {
    setNotes([...notes.map((note) => ((id === note.id)?{...note, isEditing:!note.isEditing}:note))])
  }
  return (
    <>
    {notes.map((note)=>
    <NoteItem
    note={note}
    key={note.id}
    text={note.text}/>)   }
     <TextareaForm
     addNote={addNote}
     editNote={editNote}/>
   
 
   
     
     
     
    </>
  )
}

export default App
