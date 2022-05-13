import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import './sidebar.scss'
import Button from '@material-ui/core/Button'

interface SidebarProps {
  onClick: Function
  drawerState: boolean
}

const Sidebar = (props: SidebarProps) => {
  const { onClick, drawerState } = props

  const onDrawerClose = () => {
    onClick(!drawerState)
  }

  const switchPrimaryColor = (primary: string, primaryHover: string) => {
    document.documentElement.style.setProperty('--primary-color', primary)
    document.documentElement.style.setProperty(
      '--primary-color-hover',
      primaryHover
    )
  }

  return (
    <div className="sidebar">
      <Drawer
        anchor="right"
        open={drawerState}
        onClose={onDrawerClose}
        className="sidebar__drawer"
      >
        <div className="sidebar__drawer-content">
          <ArrowForwardIosIcon
            onClick={onDrawerClose}
            className="sidebar__close-menu"
          />

          <div className="sidebar__navigation">
            <h2>Color Selector</h2>
            <ul>
              <li className="cursor-pointer">
                <Button
                  onClick={() => switchPrimaryColor('#002959', '#3672b8')}
                >
                  <span className="sidebar__color-box blue"></span>
                </Button>
              </li>
              <li className="cursor-pointer">
                <Button
                  onClick={() => switchPrimaryColor('#8f00ff', '#be6cff')}
                >
                  <span className="sidebar__color-box purple"></span>
                </Button>
              </li>
              <li className="cursor-pointer">
                <Button
                  onClick={() => switchPrimaryColor('#2baf00', '#6cd44a')}
                >
                  <span className="sidebar__color-box green"></span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Sidebar
