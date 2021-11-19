import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import ReactDom from 'react-dom';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contacts from '../Contacts/Contacts';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';
const SampleComponent=()=>{
    return(
        <div>I am the first one</div>
    );
};
const App=()=>{
    return(
        <BrowserRouter>
        <div>
            <NavBar />
            <GoHome />
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/projects" exact component={Projects}/>
            <Route path="/skills" exact component={Skills}/>
            <Route path="/contact" exact component={Contacts}/>
        </div>
        </BrowserRouter>
    );
};
export default App;