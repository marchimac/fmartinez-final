import React from 'react'
import { useContexto } from '../context/MealsContext'

function ShowResult(props) {
  const {tmb} = useContexto()
  const mostrar = props.mostrar

  return (
    <div>
      {mostrar ? <h2>{tmb}</h2> : null}
    </div>
  )
}

export default ShowResult