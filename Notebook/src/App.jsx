import { useState } from 'react'
import { nanoid } from 'nanoid'
import styled from 'styled-components'
import  TextareaForm  from './components/TextareaForm'
import NoteItem from './components/NoteItem'
import SearchBar from './components/SearchBar'
import './App.css'

const Root = styled.div`
color: white;
width: 100%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  background-color: rgb(122, 122, 233);

`
const Notes = styled.div`
color:grey;
  display: flex;
  flex-direction: column;
  margin:10px;

`
const Container = styled.div`

  display: flex;
  flex-direction: column;
  min-width: 50%;
  margin-right: 20px;
  max-width: 300px;

`
function App() {
  
  const [notes, setNotes] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [selectedNote, setSelectedNote]= useState('');
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
  setSelectedNote(note);
  setUserInput(note.text)
  }
  const saveEditedNote = (selectedNote) => {
   
    setNotes([...notes.map((note) => 
      
    (note.id === selectedNote.id)?{...note, text:userInput}
    :note)])
     setSelectedNote();
  }
  const deleteNote = (id) => {
    setNotes([...notes.filter((note) => (id !== note.id))])
  }

  return (
    <Root>
    <Container>
    <SearchBar
    notes={notes}
    query={query}
    setQuery={setQuery}
 />
  
    <Notes>
    {filteredNotes.map((note)=>
    <NoteItem
    note={note}
    key={note.id}
    text={note.text}
    editNote={editNote}
    deleteNote={deleteNote}/>)   }
    </Notes>
     </Container>

  <TextareaForm
    userInput={userInput}
    setUserInput={setUserInput}
    addNote={addNote}
    saveEditedNote={saveEditedNote}
    selectedNote={selectedNote}
    setSelectedNote={setSelectedNote}
/>

  
  
   
   
 
   
     
     
     
    </Root>
  )
}

export default App
