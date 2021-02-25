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
      <NavDropdown title="Sign In" id="collasible-nav-dropdown">
        <form class="form-inline my-2 my-lg-0" style={{margin:'0px 20px 0px 20px'}}>
            <label>Email</label>
            <input class="form-control mr-sm-2" type="email" placeholder="Enter Email" aria-label="Email"></input>
            <label>Password</label>
            <input class="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password"></input>
            <Button class="btn my-2 my-sm-0" type="submit" style={{ backgroundColor: '#e33d53', borderColor: 'white', color: 'white', marginTop:'10px' }}>Sign In</Button>
       </form>
      </NavDropdown>
      <NavDropdown title="Feedback" id="collasible-nav-dropdown">
        <div style={{margin:'0px 20px 0px 20px'}}>
        <div><b>Please let us know your experience with our website</b></div>
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
    <label>(optional)</label><br/>
     <TextareaAutosize aria-label="empty textarea" placeholder="share your feedback" style={{padding:'5px 100px 5px 5px'}} /><br/>
      </> : " "}
    <button class="btn my-2 my-sm-0" type="submit" style={{ backgroundColor: '#e33d53', borderColor: 'white', color: 'white', marginTop:'10px' }}>Send Feedback</button>
    </div>
      </NavDropdown>
      <Nav.Link href="https://web.whatsapp.com/" target="_blank">Share Video <i class="fab fa-whatsapp"></i></Nav.Link>
      <NavDropdown title="Help" id="collasible-nav-dropdown">
      <div className="container" style={{marginTop:'20px'}}>
           <h5 style={{textAlign:'center'}}>
           <u>Reach Out to Us</u>
           </h5>
           <div class="Details">
           <div><b>Details</b></div>
           <i class="fas fa-envelope fa-lg"></i><span>&ensp;Email: hs882677@gmail.com</span><br/>
           <br/>
           <i class="fas fa-mobile-alt fa-lg"></i><span>&ensp;&ensp;Phone: 8810428050</span>
           </div>
        </div>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
    )
}

export default TopNavbar
