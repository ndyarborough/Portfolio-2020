import React, { Component } from 'react';
import homeIcon from '../imgs/home_icon.png';
import aboutIcon from '../imgs/about_icon.png';
import skillsIcon from '../imgs/skills_icon.png';
import projectsIcon from '../imgs/projects_icon.png';
import contactIcon from '../imgs/contact_icon.png';


class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            tabs: [
                { name: 'Home', src: homeIcon},
                { name: 'About', src: aboutIcon},
                { name: 'Skills', src: skillsIcon},
                { name: 'Projects', src: projectsIcon},
                { name: 'Contact', src: contactIcon},
            ]
        }
    } 

    handleClick = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        return (
            <ul>
                {
                    this.state.tabs.map(tab => {
                        return (
                            <li onClick={event => this.handleClick(tab.name)} key={tab.name}>
                                <img className="icon" src={tab.src} alt={tab.name}/>{tab.name}
                            </li>
                        );  
                    })
                }
            </ul>
        )
    }
}
export default Tabs;