import './App.css';
import About from './ui-kit/Atom/About/About';
import Career from './ui-kit/Atom/Career/Career';
import Contact from './ui-kit/Atom/Contact';
import Portfolio from './ui-kit/Atom/Portfolio/Portfolio';
import Service from './ui-kit/Atom/Service/Service';
import Button from './ui-kit/Atom/Button';
import Home from './ui-kit/Atom/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/service' component={Service} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Route path='/career' component={Career} />
        <Route path='/btn' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
