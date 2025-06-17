import React, {useState} from 'react'

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
<form className='note-form'onSubmit={handleClick}>
<textarea value={userInput} autoFocus rows="15" cols="33" onChange={handleChange}></textarea>
<button type='submit'></button>  

    </form>
  )
}

export default TextareaForm