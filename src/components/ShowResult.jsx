import React from 'react'
import { useContexto } from '../context/MealsContext'
import '../styles/ShowResult.scss'


function ShowResult(props) {

  /* exporto el contexto */
  const {tmb} = useContexto()

  /* creo una constante para manejar el props y mostrar el resultado en pantalla */
  const mostrarResultado = props.mostrarResultado

  return (

    /* defino como se va amostrar el resulatdo por pantalla */
    <div className='contenedor' >
      <div className='contenedor__resultado' >
        {mostrarResultado !== undefined ? <h4 className='contenedor__resultado--h4' >Su tasa metabólica basal es de {tmb} kcal/día</h4>  : ''}
        {mostrarResultado !== undefined ? <h6 className='contenedor__resultado--h6' >Haga click en recetas para ver un menú con las calorías calculadas</h6> : ''}
      </div>
    </div>
    
  )
}

export default ShowResult