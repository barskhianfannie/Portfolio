import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Home from './components/Pages/Home'
import Projects from './components/Pages/Projects'
import Resume from './components/Pages/Resume';
import SideBar from './components/SideBar';


function App() {
  return (
    <>
    <Router>

        <Navbar />
        <SideBar/>
        <Switch>
          <Route path='/Portfolio' exact component= {Home} />
          <Route path='/Portfolio/Projects' exact component= {Projects} />
          <Route path='/Portfolio/Resume' exact component= {Resume} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
