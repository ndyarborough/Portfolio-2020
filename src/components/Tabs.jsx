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
                { name: 'Home', src: homeIcon, color: 'lightblue' },
                { name: 'About', src: aboutIcon, color: 'lightcoral' },
                { name: 'Skills', src: skillsIcon, color: 'lightgreen' },
                { name: 'Projects', src: projectsIcon, color: 'lightslategray' },
                { name: 'Contact', src: contactIcon, color: 'lightsalmon' },
            ],
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    } 

    handleMouseOver = (id, color, target) => {
        target.style.borderRight = `solid 0.5vw ${color}`;
        
    }
    handleMouseLeave = (id, target) => {
        target.style.borderRight = `solid 0.5vw #fff`;

    }
    handleClick = (id, color, target) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        target.style.borderRight = `solid 0.5vw ${color}`;
    }
    render() {
        return (
            <ul className="nav-items">
                {
                    this.state.tabs.map(tab => {
                        const { name, color, src } = tab;
                        return (
                            <li 
                                className="navRow"  
                                onMouseOver={event => this.handleMouseOver(name, color, event.currentTarget)}
                                onMouseLeave={event => this.handleMouseLeave(name, event.currentTarget)}
                                onClick={event => this.handleClick(name, color, event.currentTarget)} 
                                key={name}
                            >
                                <img 
                                    className="nav-icon" 
                                    src={src} 
                                    alt={name}
                                />
                                <div className="nav-name">{name}</div>
                            </li>
                        );  
                    })
                }
            </ul>
        )
    }
}
export default Tabs;