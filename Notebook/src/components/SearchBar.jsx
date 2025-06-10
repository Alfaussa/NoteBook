import React from 'react'
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";


const SearchBar = ({query, setQuery}) => {


  return (
    <>
    <div>
        <input type='text' placeholder= 'search here ...' value={query} onChange={event => setQuery(event.target.value)}/>

    </div>
  
  </>
  )
}

export default SearchBar