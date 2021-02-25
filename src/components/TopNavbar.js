import React from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

const TopNavbar = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
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
            <input class="form-control mr-sm-2" type="search" placeholder="Enter Email" aria-label="Email"></input>
            <label>Password</label>
            <input class="form-control mr-sm-2" type="search" placeholder="Password" aria-label="Password"></input>
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
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
    <label>(optional)</label>
    <input class="form-control mr-sm-2" type="text" placeholder="share your feedback" aria-label="text"></input>
    <Button class="btn my-2 my-sm-0" type="submit" style={{ backgroundColor: '#e33d53', borderColor: 'white', color: 'white', marginTop:'10px' }}>Send Feedback</Button>
    </div>
      </NavDropdown>
      <Nav.Link href="#">Share Video <i class="fab fa-whatsapp"></i></Nav.Link>
      <Nav.Link href="/Help">Help</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
    )
}

export default TopNavbar
