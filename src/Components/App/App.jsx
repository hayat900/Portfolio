import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import ReactDom from 'react-dom';
const SampleComponent=()=>{
    return(
        <div>I am the first one</div>
    );
};
const App=()=>{
    return(
        <BrowserRouter>
        <div>
            <Route path="/" component={SampleComponent}/>
            <Route path="/about" component={SampleComponent}/>
            <Route path="/projects" component={SampleComponent}/>
            <Route path="/skills" component={SampleComponent}/>
            <Route path="/contact" component={SampleComponent}/>
        </div>
        </BrowserRouter>
    );
};
export default App;