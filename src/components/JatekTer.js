import React from 'react'
import Lampa from './Lampa'

function JatekTer(props) {

  return (
    <>{
        props.lista.map((e,i)=>{
            return <Lampa e={e} key={i} index={i}/>
        }
        )        
        }
    </>
  )
}

export default JatekTer