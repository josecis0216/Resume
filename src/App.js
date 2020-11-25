import React, {Component} from 'react'
import './App.css';
import Nav from './Components/Nav'
import BodyContent from './Components/BodyContent'
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
      <div className="App">
        <Nav />
        {/* <BodyContent info={joseInfo} /> */}
        <Route path="/" exact component={BodyContent} />
        <Route path="/contact" exact component={Contact} />
      </div>
      </Switch>
    </Router>
    );
  }
}


export default App;
