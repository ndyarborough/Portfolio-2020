import React from 'react';
import { Tab, Tabs } from '@material-ui/core';

 class TabBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            tabs: ['Home', 'About', 'Skills', 'Projects', 'Contact']
        }
    } 

    handleChange = (event, value) => {
        this.setState({ 
            value,
            selectedTab: value
        });
    };

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
                    return <Tab onClick={event => this.handleClick(tab)} key={tab} label={tab} />
                })
            }
            </Tabs> 
         );
     }
 }
export default TabBox;