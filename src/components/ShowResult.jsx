import React from 'react'
import { useContexto } from '../context/MealsContext'

function ShowResult(props) {
  const {tmb} = useContexto()
  const mostrarResultado = props.mostrarResultado
  console.log(typeof mostrarResultado);

  return (
    <div>
      {mostrarResultado !== undefined ? <h2>Resultado: {tmb}</h2> : ''}
    </div>
  )
}

export default ShowResult