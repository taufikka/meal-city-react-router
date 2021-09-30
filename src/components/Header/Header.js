import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }

    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Meal City</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink activeStyle={activeStyle} className='mx-2 text-decoration-none' to="/home">Home</NavLink>
                    <NavLink activeStyle={activeStyle} className='mx-2 text-decoration-none' to="/restaurant">Restaurant</NavLink>
                    {/* <NavLink activeStyle={activeStyle} className='mx-2' to="/meal/:mealId">Meal Details</NavLink> */}
                </Nav>
            </Container>
        </Navbar>


    );
};

export default Header;