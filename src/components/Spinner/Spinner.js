import React from 'react'

import style from './Spinner.module.css'

function Spinner() {

  return (
    <div>
        <span className={style.loader}>Loading</span>
    </div>
  )
}

export default Spinner