import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [displaySearch, setDisplaySearch] = useState([])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;


        fetch(url)
            .then(res => res.json())
            .then(data => setDisplaySearch(data.meals))
    }, [searchText])

    const handleChange = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue)
    }

    return (
        <>
            <div>
                <input className="my-3" onChange={handleChange} placeholder=' Search food . . .' type="text" />
                <p> <small className='m-0'>Matched Result: {displaySearch ? displaySearch.length : 0}</small></p>
            </div>
            <div>
                <Container className='mb-4'>

                    <Row xs={1} md={3} className="g-4">
                        {
                            displaySearch?.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)

                        }
                    </Row>

                </Container>
            </div>

        </>
    );
};

export default Restaurant;