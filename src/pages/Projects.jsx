import React, { Component } from 'react';
import PageHeader from '../components/PageHeader.jsx';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state={
            projects: ['DiplopiaEdinburgh', 'Sports Car Trivia', 'Project Gambit', 'EventsHereNow']
        }
    }
    render() {
        return (
            <div id="Projects">
                <PageHeader id="Projects"/>
                <div id="portfolio">
                    {
                        this.state.projects.map(project => {
                        return <div key={project} className="project">{project}</div>
                        })
                    }
                  
                </div>
            </div>
        )
    }
}
export default Projects;