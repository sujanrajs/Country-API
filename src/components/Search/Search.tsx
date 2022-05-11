import React from 'react'

import Input from '@material-ui/core/Input'
import SearchIcon from '@material-ui/icons/Search'

import './search.scss'

const Search = () => {
  return (
    <div className="search-box">
      <div className="search-box__wrapper">
        <SearchIcon />
        <Input placeholder="Search Country" disableUnderline={true} />
      </div>
    </div>
  )
}

export default Search
