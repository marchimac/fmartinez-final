import React from 'react'
import { useContexto } from '../context/MealsContext'
import '../styles/ShowResult.scss'
// import { useState } from 'react'


function ShowResult(props) {

  // const [ lose, setLose ] = useState()
  // const [ gain, setGain ] = useState()


  const {tmb} = useContexto()
  const mostrarResultado = props.mostrarResultado

  // let perder = Math.round(tmb - (tmb * 10 / 100))
  // let ganar = Math.round(tmb + (tmb * 10 / 100))

  // const handleLose = () => {
  //   setTmb(perder)
  // }

  // const handleGain = () => {
  //   setTmb(ganar)
  // }

  return (
    <div >
      {mostrarResultado !== undefined ? <h4>Su tasa metabólica basal es de {tmb} kcal/día</h4>  : ''}
      {mostrarResultado !== undefined ? <h6>Haga click en recetas para ver un menú con las calorías calculadas</h6> : ''}
    </div>
  )
}

export default ShowResult