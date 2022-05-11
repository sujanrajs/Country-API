import React from 'react'

import ShoppingBasketIcon from '@material-ui/icons/ShoppingCart'
import MenuRoundedIcon from '@material-ui/icons/Menu'

import Search from '../Search/Search'

import './appbar.scss'

interface AppbarProps {
  onClick: Function
  drawerState: boolean
}

const Appbar = (props: AppbarProps) => {
  const { onClick, drawerState } = props
  const onDrawerClick = () => {
    onClick(!drawerState)
  }
  return (
    <div className="appbar">
      <div className="appbar__content-container">
        <div className="appbar__content-left">Country App</div>
        <div className="appbar__content-search">
          <Search />
        </div>
        <div className="appbar__content-right">
          <div className="appbar__content-cart">
            <ShoppingBasketIcon className="icon-cursor" />
            <div className="appbar__content-cart-counter">10</div>
            <MenuRoundedIcon className="icon-cursor" onClick={onDrawerClick} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appbar
