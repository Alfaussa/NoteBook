import { useState } from 'react'
import { nanoid } from 'nanoid'
import  TextareaForm  from './components/TextareaForm'
import NoteItem from './components/NoteItem'

import './App.css'

function App() {
  
  const [notes, setNotes] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [selectedNote, setSelectedNote]= useState();

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
  const editNote = (note) => {
  setSelectedNote(note)
  setUserInput(note.text)
  }
  const saveEditedNote = (id) => {
    setNotes([...notes.map((note) => 
    (id === note.id)?{...note, text}:note)])
  }

  return (
    <>
    {notes.map((note)=>
    <NoteItem
    note={note}
    key={note.id}
    text={note.text}
    editNote={editNote}/>)   }
    
    
    <TextareaForm
    userInput={userInput}
    setUserInput={setUserInput}
    addNote={addNote}
    saveEditedNote={saveEditedNote}
    selectedNote={selectedNote}
     
     />
  
  
   
   
 
   
     
     
     
    </>
  )
}

export default App
