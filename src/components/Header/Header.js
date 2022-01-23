import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar } from "react-bootstrap";
import './Header.scss';
const Header = () => {
  

  return (
    <div>
    <Navbar variant="dark" bg="dark" >
        <Container fluid>
        <Link to='/' style={{ textDecoration: 'none' }}><Navbar.Brand>Countries</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header
