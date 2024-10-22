import React, { useContext } from 'react'
import './Lampa.css'
import { KattContext } from '../context/KattContext'

function Lampa(props) {

  const {katt} = useContext(KattContext)

  return (
    <div className={`lampa ${props.e?"fel":"le"}`} onClick={()=>{katt(props.index)}}>
        {props.e}
    </div>
  )
}

export default Lampa