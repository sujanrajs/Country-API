import React from 'react'
import { useSelector } from 'react-redux'
import StarIcon from '@material-ui/icons/Star'
import MenuIcon from '@material-ui/icons/Menu'

import { AppState } from '../../types'

import Search from '../Search/Search'
import CartMenu from '../CartMenu/CartMenu'

import './appbar.scss'

interface AppbarProps {
  onClick: Function
  drawerState: boolean
}

const Appbar = (props: AppbarProps) => {
  const { onClick, drawerState } = props

  const cart = useSelector((state: AppState) => state.cartReducer.cart)

  const onDrawerClick = () => {
    onClick(!drawerState)
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const menuOpen = Boolean(anchorEl)

  const handleCartMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCartMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="appbar">
      <div className="appbar__content container">
        <div className="appbar__content-left"> Country API</div>
        <div className="appbar__content-search">
          <Search />
        </div>
        <div className="appbar__content-right">
          <CartMenu
            cart={cart}
            onClick={handleCartMenuClose}
            menuOpen={menuOpen}
            anchorEl={anchorEl}
          />
          <div
            className="appbar__content-cart"
            onClick={handleCartMenuClick}
            onKeyPress={() => null}
            role="button"
            tabIndex={0}
          >
            <StarIcon className="cursor-pointer" />

            <div
              className={`appbar__content-cart-counter cursor-pointer ${
                cart.length > 0 ? 'active' : ''
              }`}
            >
              {cart && cart.length}
            </div>
          </div>
          <MenuIcon className="cursor-pointer" onClick={onDrawerClick} />
        </div>
      </div>
    </div>
  )
}

export default Appbar
