import React from 'react'
import { useDispatch } from 'react-redux'
import Input from '@material-ui/core/Input'

import { setSearchKeyword } from '../../redux/actions'

import './search.scss'

const Search = () => {
  const dispatch = useDispatch()

  const handleInputChange = (e: any) => {
    dispatch(setSearchKeyword(e.target.value))
  }

  return (
    <div className="search-box">
      <div className="search-box__wrapper">
        <Input
          onChange={handleInputChange}
          placeholder="Search by Country"
          disableUnderline={true}
        />
      </div>
    </div>
  )
}

export default Search
