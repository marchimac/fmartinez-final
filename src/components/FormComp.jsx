import React, { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContexto } from '../context/MealsContext';
import ShowResult from './ShowResult';

function FormComp() {

  const { setTmb } = useContexto()

  const pesoRef = React.useRef()
  const estaturaRef = React.useRef()
  const edadRef = React.useRef()

  const [actividad, setActividad] = useState('')
  const [genero, setGenero] = useState('')

  let TMB

  const guardarActividad = (e) => {
    setActividad(e.target.value)
    console.log(e);
  }

  const guardarGenero = (e) => {
    setGenero(e.target.value)
    console.log(e);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (genero === 'masculino' && actividad === 'sedentaria') {
      TMB = ((parseFloat(pesoRef.current.value) * 10) + (parseFloat(estaturaRef.current.value) * 6.25) - (parseFloat(edadRef.current.value) * 5) + 5) * 1.2
    } else if (genero === 'masculino' && actividad === 'ligera') {
      TMB = ((parseFloat(pesoRef.current.value) * 10) + (parseFloat(estaturaRef.current.value) * 6.25) - (parseFloat(edadRef.current.value) * 5) + 5) * 1.375
    } else if (genero === 'masculino' && actividad === 'moderada') {
      TMB = ((parseFloat(pesoRef.current.value) * 10) + (parseFloat(estaturaRef.current.value) * 6.25) - (parseFloat(edadRef.current.value) * 5) + 5) * 1.55
    } else if (genero === 'masculino' && actividad === 'intensa') {
      TMB = ((parseFloat(pesoRef.current.value) * 10) + (parseFloat(estaturaRef.current.value) * 6.25) - (parseFloat(edadRef.current.value) * 5) + 5) * 1.725
    } else if (genero === 'masculino' && actividad === 'muy-intensa') {
      TMB = ((parseFloat(pesoRef.current.value) * 10) + (parseFloat(estaturaRef.current.value) * 6.25) - (parseFloat(edadRef.current.value) * 5) + 5) * 1.9
    }
    
    if (genero === 'femenino' && actividad === 'sedentaria') {
      TMB = ((parseFloat(pesoRef.current.value) * 10) + (parseFloat(estaturaRef.current.value) * 6.25) - (parseFloat(edadRef.current.value) * 5) - 161) * 1.2
    } else if (genero === 'femenino' && actividad === 'ligera') {
      TMB = ((parseFloat(pesoRef.current.value) * 10) + (parseFloat(estaturaRef.current.value) * 6.25) - (parseFloat(edadRef.current.value) * 5) - 161) * 1.375
    } else if (genero === 'femenino' && actividad === 'moderada') {
      TMB = ((parseFloat(pesoRef.current.value) * 10) + (parseFloat(estaturaRef.current.value) * 6.25) - (parseFloat(edadRef.current.value) * 5) - 161) * 1.55
    } else if (genero === 'femenino' && actividad === 'intensa') {
      TMB = ((parseFloat(pesoRef.current.value) * 10) + (parseFloat(estaturaRef.current.value) * 6.25) - (parseFloat(edadRef.current.value) * 5) - 161) * 1.725
    } else if (genero === 'femenino' && actividad === 'muy-intensa') {
      TMB = ((parseFloat(pesoRef.current.value) * 10) + (parseFloat(estaturaRef.current.value) * 6.25) - (parseFloat(edadRef.current.value) * 5) - 161) * 1.9
    }
    
    setTmb(TMB)

  }

  return (
    <Form style={{width: '75%'}} onSubmit={handleSubmit} className='m-auto mt-3 border p-3 text-center'>

      <FormGroup className='mb-3 border pt-3 rounded bg' value={genero} onChange={guardarGenero} >
        <Form.Label>Selecciona tu género</Form.Label>
        <Form.Group className="mb-3 d-flex justify-content-around" controlId="masculino">
          <Form.Check type="radio" name='gender' id='masculino' label="Masculino" value='masculino' />
        </Form.Group>

        <Form.Group className="mb-3 d-flex justify-content-around" controlId="femenino">
          <Form.Check type="radio" name='gender' id='femenino' label="Femenino" value='femenino' />
        </Form.Group>
      </FormGroup>

      <Form.Group className="mb-3 border p-3 rounded bg" controlId="peso">
        <Form.Label>Peso</Form.Label>
        <Form.Control className='text-center' type="text" placeholder="Introduce tu peso en kg" ref={pesoRef} />
      </Form.Group>

      <Form.Group className="mb-3 border p-3 rounded bg" controlId="estatura">
        <Form.Label>Estatura</Form.Label>
        <Form.Control className='text-center' type="text" placeholder="Introduce tu estatura en cm" ref={estaturaRef} />
      </Form.Group>

      <Form.Group className="mb-3 border p-3 rounded bg" controlId="edad">
        <Form.Label>Edad</Form.Label>
        <Form.Control className='text-center' type="text" placeholder="Introduce tu edad en años" ref={edadRef} />
      </Form.Group>

      <Form.Select className='mb-3 text-center p-3 rounded bg' value={actividad} onChange={guardarActividad} >
        <option>Nivel de actividad</option>
        <option value='sedentaria'>Sedentaria</option>
        <option value='ligera'>Ligera</option>
        <option value='moderada'>Moderada</option>
        <option value='intensa'>Intensa</option>
        <option value='muy-intensa'>Muy intensa</option>
      </Form.Select>

      <FormGroup className='mb-3 border p-3 rounded' >
        <Button className='m-1' variant="primary" type="submit">
          Calcular
        </Button>

        <Button className='m-1' variant="secondary" type="reset">
          Borrar
        </Button>
      </FormGroup>

      <ShowResult />

    </Form>
    
  );
}

export default FormComp;