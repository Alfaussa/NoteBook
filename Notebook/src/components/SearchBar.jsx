import React from 'react'
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import styled from 'styled-components'

const Search = styled.div`
  margin: 0 5px;
  min-width:150px;

  
`
const Input = styled.div`
  height: 20px;
  border: 1px solid;
   &:hover {
    background-color: lightblue;
  }
`
const SearchBar = ({query, setQuery}) => {


  return (
    <>
    <Search>
        <Input type='text' placeholder= 'search here ...' value={query} onChange={event => setQuery(event.target.value)}/>

    </Search>
  
  </>
  )
}

export default SearchBar