import React from 'react'

const MostraVoltas = (props) => { // arrow function
    return (
      <p className='voltas'>
        <span>{props.voltas}</span><br/>
        Voltas
      </p>
    )
  }

  export default MostraVoltas