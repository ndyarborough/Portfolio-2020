import React from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';

class ContentDiv extends React.Component {
    render() {
        return (
            <div className="contentDiv">
                <Home /> 
                <About />
                <Portfolio />
                <Contact />
            </div>
        );
    }
}
export default ContentDiv;