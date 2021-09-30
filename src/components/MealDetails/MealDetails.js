import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const MealDetails = () => {
    const { idMeal } = useParams();
    const [meal, setMeal] = useState([])


    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [idMeal]);

    const history = useHistory();
    const handleDetails = () => {
        history.push('/restaurant')
    }

    const imageStyle = {
        width: '400px',
        border: '2px solid black',
        borderRadius: '15px',
        boxShadow: '5px 10px 8px #888888'
    }
    return (
        <div className='mt-2'>
            <h3>Meal details of id: {idMeal}</h3>
            <img style={imageStyle} src={meal.strMealThumb} alt="" />
            <br />
            <h3>Meal name: {meal.strMeal}</h3>
            <li>Meal Category: {meal.strCategory}</li>
            <li>Meal area: {meal.strArea}</li>
            <Button onClick={handleDetails} className='m-2 btn btn-dark'>Back to home</Button>
        </div>
    );
};

export default MealDetails;