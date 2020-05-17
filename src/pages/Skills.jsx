import React, { Component } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Card from '../components/Card.jsx';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state={
            skills: ['HTML', 'CSS', 'JAVASCRIPT', 'BACK END', 'OTHER']
        }
    }
    render() {
        return (
            <div id="Skills">
                <PageHeader id="Skills"/>
                {
                    this.state.skills.map(skill => {
                    return <Card key={skill }data={skill} />
                    })
                }
            </div>
        )
    }
}
export default Skills;