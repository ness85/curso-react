import React from 'react'

const Entorno = () => {
  return (
    <div><h2>El entorno es { process.env.REACT_APP_ENTORNO }</h2></div>
  )
}

export default Entorno