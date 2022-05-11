import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import CloseIcon from '@material-ui/icons/Close'

import './sidebar.scss'

interface SidebarProps {
  onClick: Function
  drawerState: boolean
}

const Sidebar = (props: SidebarProps) => {
  const { onClick, drawerState } = props

  const onDrawerClose = () => {
    onClick(!drawerState)
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
          <CloseIcon onClick={onDrawerClose} className="sidebar__close-menu" />
          <div className="sidebar__navigation">
            <h2>Theme Selection</h2>
            <ul>
              <li>
                <h2>Blue</h2>
                <span className="sidebar__color-box blue"></span>
                <h2>Green</h2>
                <span className="sidebar__color-box green"></span>
                <h2>Red</h2>
                <span className="sidebar__color-box red"></span>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Sidebar
