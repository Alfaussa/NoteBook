import React, {useState} from 'react'

const TextareaForm = ({addNote, userInput, setUserInput}) => {



  const handleChange = (event) => {
    setUserInput(event.target.value)
  }
  const handleClick = (event) => {
    event.preventDefault();
    addNote(userInput);
    setUserInput('');
  }
  

  return (
<form className='note-form'onSubmit={handleClick}>
<textarea value={userInput} autoFocus rows="15" cols="33" onChange={handleChange}></textarea>
<button></button>  

    </form>
  )
}

export default TextareaForm