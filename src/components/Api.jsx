import React, { useState, useEffect } from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'
import axios from 'axios'
import { useContexto } from '../context/MealsContext'
import { Link } from 'react-router-dom'

export default function Api() {
    
    const [ meals, setMeals ] = useState([])
    const [ nutrients , setNutrients ] = useState({})
    const { tmb } = useContexto()
    
    useEffect( () => {
        if(tmb) {
            axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=45f3f23dd164438abb1babccb1e531ac&timeFrame=day&targetCalories=${tmb}`)
                .then( res => {
                    console.log(res)
                    setMeals(res.data.meals)
                    setNutrients(res.data.nutrients)
                } )
                .catch(err => {
                    console.log(err)
                })
        }
    }, [tmb])

  return (
    <>
        <Button variant='warning' size='sm' className='mt-3 container-fluid' >Nueva búsqueda</Button>
        <CardGroup className='mt-2 rounded' >
            {meals?.map( (meal) => (
                <Card className='p-2' key={meal.id} >
                    <Card.Img variant='bottom' src={`https://webknox.com/recipeImages/${meal.id}-556x370.jpg`}></Card.Img>
                    <Card.Title>{meal.title}</Card.Title>
                    <Card.Body>Ready in {meal.readyInMinutes} minutes</Card.Body>
                    <Card.Body className='recipes'>Link to the recipe:</Card.Body>
                    <Card.Link className='mealsLink'><Link to={meal.sourceUrl} >Recipe</Link></Card.Link>
                </Card>
                ) )}
        </CardGroup>
        <CardGroup className='mt-2 mb-4 justify-content text-center rounded' >
            { Object.keys(nutrients).length !== 0 &&
                <Card className='p-2' >
                    <Card.Title>Calories: {nutrients.calories}</Card.Title>
                    <Card.Title>Carbohydrates: {nutrients.carbohydrates}</Card.Title>
                    <Card.Title>Fats: {nutrients.fat}</Card.Title>
                    <Card.Title>Proteins: {nutrients.protein}</Card.Title>
                </Card>
                }
        </CardGroup>

        <hr />

        <Button>Nueva búsqueda</Button>
        <CardGroup className='mt-3 rounded' >
            {meals?.map( (meal) => (
                <Card className='p-2' key={meal.id} >
                    <Card.Img variant='bottom' src={`https://webknox.com/recipeImages/${meal.id}-556x370.jpg`}></Card.Img>
                    <Card.Title>{meal.title}</Card.Title>
                    <Card.Body>Ready in {meal.readyInMinutes} minutes</Card.Body>
                    <Card.Body className='recipes'>Link to the recipe:</Card.Body>
                    <Card.Link className='mealsLink'><Link to={meal.sourceUrl} >Recipe</Link></Card.Link>
                </Card>
                ) )}
        </CardGroup>
        <CardGroup className='mt-2 mb-4 justify-content text-center rounded' >
            { Object.keys(nutrients).length !== 0 &&
                <Card className='p-2' >
                    <Card.Title>Calories: {nutrients.calories}</Card.Title>
                    <Card.Title>Carbohydrates: {nutrients.carbohydrates}</Card.Title>
                    <Card.Title>Fats: {nutrients.fat}</Card.Title>
                    <Card.Title>Proteins: {nutrients.protein}</Card.Title>
                </Card>
                }
        </CardGroup>

        <hr />

        <Button>Nueva búsqueda</Button>
        <CardGroup className='mt-3 rounded' >
            {meals?.map( (meal) => (
                <Card className='p-2' key={meal.id} >
                    <Card.Img variant='bottom' src={`https://webknox.com/recipeImages/${meal.id}-556x370.jpg`}></Card.Img>
                    <Card.Title>{meal.title}</Card.Title>
                    <Card.Body>Ready in {meal.readyInMinutes} minutes</Card.Body>
                    <Card.Body className='recipes'>Link to the recipe:</Card.Body>
                    <Card.Link className='mealsLink'><Link to={meal.sourceUrl} >Recipe</Link></Card.Link>
                </Card>
                ) )}
        </CardGroup>
        <CardGroup className='mt-2 mb-4 justify-content text-center rounded' >
            { Object.keys(nutrients).length !== 0 &&
                <Card className='p-2' >
                    <Card.Title>Calories: {nutrients.calories}</Card.Title>
                    <Card.Title>Carbohydrates: {nutrients.carbohydrates}</Card.Title>
                    <Card.Title>Fats: {nutrients.fat}</Card.Title>
                    <Card.Title>Proteins: {nutrients.protein}</Card.Title>
                </Card>
                }
        </CardGroup>
    </>
  )
}