import React from 'react'
import { useContexto } from '../context/MealsContext'
import '../styles/ShowResult.scss'
import { Button } from 'react-bootstrap'
// import { useState } from 'react'


function ShowResult(props) {

  // const [ lose, setLose ] = useState()
  // const [ gain, setGain ] = useState()


  const {tmb, setTmb} = useContexto()
  const mostrarResultado = props.mostrarResultado

  let perder = Math.round(tmb - (tmb * 10 / 100))
  let ganar = Math.round(tmb +(tmb * 10 / 100))

  const handleLose = () => {
    setTmb(perder)
  }

  const handleGain = () => {
    setTmb(ganar)
  }

  return (
    <div >
      {mostrarResultado !== undefined ? <div className='optionsResult' ><h4>Su tasa metabólica basal es de {tmb} kcal/día  <Button variant='outline-warning' >Seleccionar</Button></h4></div>  : ''}
      {mostrarResultado !== undefined ? <div className='optionsResult' ><h4>Si quiere PERDER peso necesita {perder} kcal/día  <Button onClick={handleLose} variant='outline-warning' >Seleccionar</Button></h4></div>  : ''}
      {mostrarResultado !== undefined ? <div className='optionsResult' ><h4>Si quere GANAR peso necesita {ganar} kcal/día  <Button onClick={handleGain} variant='outline-warning' >Seleccionar</Button></h4></div>  : ''}
    </div>
  )
}

export default ShowResult