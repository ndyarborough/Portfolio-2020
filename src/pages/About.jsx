import React, { Component } from 'react';
import PageHeader from '../components/PageHeader.jsx';

class About extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
    }
    render() {
        return (
            <div id="About">
                <PageHeader id="About"/>
                <p>Full-stack software engineer with a passion for solving problems. Looking for opportunities to use my skillset to make the world a better place with technology.</p>
                <p>Specializing in Front End Javascript development using Node.js</p>
                <div className="focus">
                    Current Focus => React // Data Structues // Efficiency
                </div> 
            </div>
        )
    }
}
export default About;