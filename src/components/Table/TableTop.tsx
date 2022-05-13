import React from 'react'

import './tabletop.scss'

const TableTop = () => {
  return (
    <div className="table-wrapper">
      <div className="table-wrapper__flag">Flag</div>
      <div className="table-wrapper__country">Country</div>
      <div className="table-wrapper__region">Region</div>
      <div className="table-wrapper__population">Population</div>
      <div className="table-wrapper__action">Actions</div>
    </div>
  )
}

export default TableTop
