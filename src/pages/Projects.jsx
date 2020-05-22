import React, { Component } from 'react';
import PageHeader from '../components/PageHeader.jsx';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                { name: 'DiplopiaEdinburgh', path: 'https://limitless-tundra-74258.herokuapp.com/'},
                { name: 'EventsHereNow', path: 'https://ndyarborough.github.io/Events-Here-Now/'},
                { name: 'Sports Car Trivia', path: 'https://ndyarborough.github.io/TriviaGame/'}
            ]
        }
    }
    render() {
        return (
            <div id="Projects">
                <PageHeader id="Projects"/>
                <div id="portfolio">
                    {
                        this.state.projects.map((project, index) => {
                            const { name, path } = project;
                            return (
                                <div 
                                    key={index} 
                                    className="project"
                                >
                                    <a target="_blank" rel="noopener noreferrer"  href={path}>
                                        <img src={require(`../imgs/${name}.png`)} alt={name}/>
                                    </a>
                                    <h2>
                                        {name}
                                    </h2>
                                </div>
                            )  
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Projects;