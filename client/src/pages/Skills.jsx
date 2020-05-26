import React, { Component } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Card from '../components/Card.jsx';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state={
            skills: ['HTML', 'CSS', 'JAVASCRIPT', 'BACK END', 'OTHER'],
            skills2: [
                { name: 'HTML', logos: ['HTML5', 'JSX', 'handlebars']},
                { name: 'CSS', logos: ['CSS3', 'bootstrap', 'material-ui']},
                { name: 'JAVASCRIPT', logos: ['react', 'javascript', 'jQuery', 'node-js']},
                { name: 'BACK END', logos: ['express', 'mysql', 'mongo-db', 'mongoose', 'sequelize']},
                { name: 'BUILD TOOLS', logos: ['webpack']},
                { name: 'OTHER', logos: ['github', 'heroku']}
            ]
        }
    }
    render() {
        return (
            <div id="Skills">
                <PageHeader id="Skills"/>
                {
                    this.state.skills2.map((skill, index) => {
                        return (
                                <Card key={index} data={skill} />
                        )
                    })
                }
            </div>
        )
    }
}
export default Skills;