import React,{Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Help from './components/Help';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
    <Fragment>
      <TopNavbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/helpsection' component={Help} />
        </Switch>
    </Fragment>
</Router>
  )
}

export default App
