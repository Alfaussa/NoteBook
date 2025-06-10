import { useState } from 'react'
import { nanoid } from 'nanoid'
import  TextareaForm  from './components/TextareaForm'
import NoteItem from './components/NoteItem'
import SearchBar from './components/SearchBar'

import './App.css'

function App() {
  
  const [notes, setNotes] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [selectedNote, setSelectedNote]= useState();
  const [query, setQuery] = useState("");

let filteredNotes =[];

if(query !== ""){
    filteredNotes = notes.filter((note) => 
    note.text.toLowerCase().includes(query.toLowerCase()))
    
} else {
    filteredNotes = notes;
 
}
  const addNote = (userInput) => {
    if(userInput){
      const newNote ={
        id: nanoid(),
        text: userInput,
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
  const deleteNote = (id) => {
    setNotes([...notes.filter((note) => (id !== note.id))])
  }

  return (
    <>
    <SearchBar
    notes={notes}
    query={query}
    setQuery={setQuery}
 />
  
    
    {filteredNotes.map((note)=>
    <NoteItem
    note={note}
    key={note.id}
    text={note.text}
    editNote={editNote}
    deleteNote={deleteNote}/>)   }
    
    
<div className='items-container'><TextareaForm
    userInput={userInput}
    setUserInput={setUserInput}
    addNote={addNote}
    saveEditedNote={saveEditedNote}
    selectedNote={selectedNote}
     
     /></div>
  
  
   
   
 
   
     
     
     
    </>
  )
}

export default App
