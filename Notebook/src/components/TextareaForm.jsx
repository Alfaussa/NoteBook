import React, {useState} from 'react'
import styled from 'styled-components'

const Form = styled.form`
display: flex;
flex-direction: column;
min-width: 150px;
height: 100px;
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
<textarea value={userInput} autoFocus onChange={handleChange}></textarea>
<button type='submit'></button>  
</Form>
  )
}

export default TextareaForm