import React, {useState} from 'react'
import styled from 'styled-components'

const Form = styled.form`
display: flex;
flex-direction: column;
min-width: 50%;

`;
const Textarea = styled.textarea`

height: 200px;
border: 4px solid white ;
border-radius: 10px;
  background-color: rgb(122, 122, 233);
`;
const Button = styled.button`
background-color: white;
margin:10px 60px;
height:38px ;
color:grey;

`
const TextareaForm = ({addNote, userInput, setUserInput, saveEditedNote, selectedNote}) => {
  const handleChange = (event) => {
    setUserInput(event.target.value)
  }
  const handleClick = (event) => {
    event.preventDefault();
    (!selectedNote) ? addNote(userInput) : saveEditedNote(selectedNote);

    setUserInput('');
  }
  


  return (
<Form onSubmit={handleClick}>
<Textarea placeholder='add your note...' value={userInput} autoFocus onChange={handleChange}></Textarea>
<Button type='submit'>save</Button>  
</Form>
  )
}

export default TextareaForm