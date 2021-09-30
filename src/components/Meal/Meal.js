import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';


const Meal = (props) => {
    const { idMeal, strMeal, strMealThumb, strInstructions } = props.meal;

    const url = `/meal/${idMeal}`;

    let history = useHistory();
    const handleMeal = () => {
        history.push(`/meal/${idMeal}`)
    }

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title className='my-2'>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions.slice(0, 180)}
                        </Card.Text>

                        {/* <Link to={url} className="text-decoration-none text-dark fs-5 fw-bolder">See Details-1</Link> */}

                        {/* <Link to={url}>
                            <Button>
                                See Details-2
                            </Button>
                        </Link> */}

                        <Button className="my-2" variant="danger" onClick={handleMeal}>More Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Meal;