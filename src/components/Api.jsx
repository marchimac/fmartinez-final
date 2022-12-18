import React, { useState, useEffect } from 'react'
import { Card, CardGroup } from 'react-bootstrap'
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
        <CardGroup className='mt-5 border rounded' >
            {meals?.map( (meal) => (
                <Card key={meal.id} >
                    <Card.Img variant='bottom' src={`https://webknox.com/recipeImages/${meal.id}-556x370.jpg`}></Card.Img>
                    <Card.Title>{meal.title}</Card.Title>
                    <Card.Body>Ready in {meal.readyInMinutes} minutes</Card.Body>
                    <Card.Body className='recipes'>Link to the recipe:</Card.Body>
                    <Card.Link className='mealsLink'><Link to={meal.sourceUrl} >Recipe</Link></Card.Link>
                </Card>
                ) )}
        </CardGroup>
                { Object.keys(nutrients).length !== 0 &&
                    <div>
                        {console.log({nutrients})}
                        <Card.Body>Calories: {nutrients.calories}</Card.Body>
                        <Card.Body>Carbohydrates: {nutrients.carbohydrates}</Card.Body>
                        <Card.Body>Fats: {nutrients.fat}</Card.Body>
                        <Card.Body>Proteins: {nutrients.protein}</Card.Body>
                    </div>
                }


                
        <CardGroup className='mt-5' >
            {meals.map( (meal) => (
                <Card key={meal.id} >
                    <Card.Img variant='bottom' src={`https://webknox.com/recipeImages/${meal.id}-556x370.jpg`}></Card.Img>
                    <Card.Title>{meal.title}</Card.Title>
                    <Card.Body>Calories: {nutrients.calories}</Card.Body>
                    <Card.Body>Carbohydrates: {nutrients.carbohydrates}</Card.Body>
                    <Card.Body>Fats: {nutrients.fat}</Card.Body>
                    <Card.Body>Proteins: {nutrients.protein}</Card.Body>
                    <Card.Body>Ready in {meal.readyInMinutes} minutes</Card.Body>
                    <Card.Body className='recipes'>Link to the recipe:</Card.Body>
                    <Card.Link className='mealsLink'>{meal.sourceUrl}</Card.Link>
                </Card>
                ) )}
        </CardGroup>
                { Object.keys(nutrients).length !== 0 &&
                    <div>
                        {console.log({nutrients})}
                        <Card.Body>Calories: {nutrients.calories}</Card.Body>
                        <Card.Body>Carbohydrates: {nutrients.carbohydrates}</Card.Body>
                        <Card.Body>Fats: {nutrients.fat}</Card.Body>
                        <Card.Body>Proteins: {nutrients.protein}</Card.Body>
                    </div>
                }


        <CardGroup className='mt-5' >
            {meals.map( (meal) => (
                <Card key={meal.id} >
                    <Card.Img variant='bottom' src={`https://webknox.com/recipeImages/${meal.id}-556x370.jpg`}></Card.Img>
                    <Card.Title>{meal.title}</Card.Title>
                    <Card.Body>Calories: {nutrients.calories}</Card.Body>
                    <Card.Body>Carbohydrates: {nutrients.carbohydrates}</Card.Body>
                    <Card.Body>Fats: {nutrients.fat}</Card.Body>
                    <Card.Body>Proteins: {nutrients.protein}</Card.Body>
                    <Card.Body>Ready in {meal.readyInMinutes} minutes</Card.Body>
                    <Card.Body className='recipes'>Link to the recipe:</Card.Body>
                    <Card.Link className='mealsLink'>{meal.sourceUrl}</Card.Link>
                </Card>
                ) )}
        </CardGroup>
                { Object.keys(nutrients).length !== 0 &&
                    <div>
                        {console.log({nutrients})}
                        <Card.Body>Calories: {nutrients.calories}</Card.Body>
                        <Card.Body>Carbohydrates: {nutrients.carbohydrates}</Card.Body>
                        <Card.Body>Fats: {nutrients.fat}</Card.Body>
                        <Card.Body>Proteins: {nutrients.protein}</Card.Body>
                    </div>
                }
    </>
  )
}