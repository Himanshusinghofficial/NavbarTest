import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

const TopNavbar = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<div className="container">
  <Navbar.Brand href="#">Vibe</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{border: 'none', outline:'none'}}/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <NavDropdown title="Feedback" id="collasible-nav-dropdown">
        <div class="login-div" >
        <div>Please rate your experience</div>
        <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        size="large"
      />
    </div>
    {value > 0 ? <>
    <label>please help us improve</label><br/>
        <div class="fields">
          <TextareaAutosize type="text" placeholder="Features you want Anything you liked/disliked" className="username fields input" style={{outline:'none'}}/>
          <TextareaAutosize type="number" placeholder="Phone(optional)" class="password" style={{outline:'none',padding:'15px 0px 15px 15px'}}/>
          <button class="signin-button" style={{outline:'none'}}>Submit</button> 
        </div>

      </> : " "}
    </div>
      </NavDropdown>
      <div style={{color:'white'}}>
      <div><div>Share videos with fellow users or need help</div><Nav.Link href="#" style={{float: 'right'}}><button class="buttoncss neomorphic-shadows neomorphic-shadows-hover" style={{outline:'none'}}>whatsapp us <i class="fab fa-whatsapp fa-lg"></i></button></Nav.Link>
      </div>
      </div>
      <NavDropdown title="About" id="collasible-nav-dropdown">
           <h5 style={{textAlign:'center'}}>
           <u>About us</u>
           </h5>
           <div class="login-div">
           <div>Moved to Goa after COVID-19. fell in love with it. Spent an year figuring out the best places. Now want to help others get the best out of Goa</div>
           </div>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
    )
}

export default TopNavbar
