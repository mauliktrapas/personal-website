import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/header';
import About from './components/about';
import Experience from './components/experience';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contactme';

ReactDOM.render(
    <div>
        <Header />
        <About />
        <Experience />
        <Skills/>
        <Projects/>
        <Contact/>
    </div>,

    document.getElementById('root'),
);
