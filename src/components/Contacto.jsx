import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

const Contacto = () => {
  return (
    <div className="App">
        <div>Contacto</div>
        <Link to={"/"}>Volver a la home</Link>
    </div>
  )
}

export default Contacto