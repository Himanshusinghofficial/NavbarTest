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
        <div style={{margin:'0px 20px 0px 20px'}}>
        <div><b>Please rate your experience</b></div>
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
     <TextareaAutosize aria-label="empty textarea" placeholder="share your feedback" style={{marginLeft:'1px',marginTop:'2px',paddingRight:'20px'}} /><br/>
     <input type="tel" id="phone" name="phone" placeholder="Phone(optional)" type="number" style={{ marginLeft:'1px'}}/>
     <Button class="btn my-2 my-sm-0" type="submit" style={{ backgroundColor: '#e33d53', borderColor: 'white', color: 'white', marginLeft:'2px'}}>Submit</Button>
      </> : " "}
    </div>
      </NavDropdown>
      <Nav.Link href="#" target="_blank"><button class="buttoncss neomorphic-shadows neomorphic-shadows-hover">whatsapp us <i class="fab fa-whatsapp"></i></button></Nav.Link>
      <NavDropdown title="About" id="collasible-nav-dropdown">
      <div className="container" style={{marginTop:'20px'}}>
           <h5 style={{textAlign:'center'}}>
           <u>About us</u>
           </h5>
           <div class="Details">
           <div>Moved to Goa after COVID-19. fell in love with it. Spent an year figuring out the best places. Now want to help others get the best out of Goa</div>
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
