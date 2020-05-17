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

                <p>A student seeking an internship or entry-level position as a JavaScript Developer. I just want to get a job. I cannot even begin to tell you how bad it actually is. A student seeking an internship or entry-level position as a JavaScript Developer. I just want to get a job. I cannot even begin to tell you how bad it actually is. A student seeking an internship or entry-level position as a JavaScript Developer. I just want to get a job. I cannot even begin to tell you how bad it actually is. A student seeking an internship or entry-level position as a JavaScript Developer. I just want to get a job. I cannot even begin to tell you how bad it actually is</p>
                <div className="focus">
                    Current Focus => React // Data Structues // Efficiency
                </div> 
            </div>
        )
    }
}
export default About;