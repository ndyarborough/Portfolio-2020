import React from 'react';
import { Tab, Tabs } from '@material-ui/core';
import homeIcon from '../imgs/home_icon.png';
import aboutIcon from '../imgs/about_icon.png';
import skillsIcon from '../imgs/skills_icon.png';
import projectsIcon from '../imgs/projects_icon.png';
import contactIcon from '../imgs/contact_icon.png';


 class TabBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            tabs: [
                { name: 'Home', src: homeIcon},
                { name: 'About', src: aboutIcon},
                { name: 'Skills', src: skillsIcon},
                { name: 'Project', src: projectsIcon},
                { name: 'Contact', src: contactIcon},
            ]
        }
    } 

    handleClick = (tab) => {
        document.getElementById(tab)
                .scrollIntoView({ behavior: 'smooth' });
    }

     render() {
         return (
            <Tabs
                className="tabBox"
                orientation="vertical"
                value={this.state.value}
                onChange={this.handleChange}
            >
            {
                this.state.tabs.map(tab => {
                    return (
                    <div className="navRow">
                        <img className="icon" alt="icon" src={tab.src}></img>
                        <Tab onClick={event => this.handleClick(tab.name)} key={tab.name} label={tab.name} />
                    </div>
                    )
                })
            }
            </Tabs> 
         );
     }
 }
export default TabBox;