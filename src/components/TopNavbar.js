import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap'

const TopNavbar = () => {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<div className="container">
  <Navbar.Brand href="#home">Vibe</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{border: 'none', outline:'none'}}/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <NavDropdown title="Sign In" id="collasible-nav-dropdown">
      <form style={{margin:'0px 10px 0px 10px'}}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
       </form>
      </NavDropdown>
      <NavDropdown title="Feedback" id="collasible-nav-dropdown">
        <form class="form-inline my-2 my-lg-0" style={{margin:'0px 10px 0px 10px'}}>
            <input class="form-control mr-sm-2" type="search" placeholder="feedback" aria-label="feedback"></input>
            <button class="btn my-2 my-sm-0" type="submit" style={{ backgroundColor: '#e33d53', borderColor: 'white', color: 'white' }}>Send</button>
        </form>
      </NavDropdown>
      <Nav.Link href="#whatsapp">WhatsApp <i class="fab fa-whatsapp"></i></Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
    )
}

export default TopNavbar
