import React from 'react';
import About from '../pages/About.jsx';
import Home from '../pages/Home.jsx';
import Skills from '../pages/Skills.jsx';
import Projects from '../pages/Projects.jsx';
import Contact from '../pages/Contact.jsx';

class ContentDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="contentDiv">
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        );
    }
}
export default ContentDiv;