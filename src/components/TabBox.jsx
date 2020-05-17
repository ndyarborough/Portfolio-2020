import React from 'react';
import { Tab, Tabs } from '@material-ui/core';

 class TabBox extends React.Component {
    state = {
        value: 0,
        tabs: ['Home', 'About', 'Portfolio', 'Contact']
    };

    handleChange = (event, value) => {
        this.setState({ 
            value,
            selectedTab: value
        });
    };

    handleClick = (event) => {
        const target = event.target.innerHTML;
        
    }

     render() {
         return (
            <Tabs
                className="tabBox"
                orientation="vertical"
                value={this.state.value}
                onChange={this.handleChange}
                onClick={this.handleClick}
            >
            {
                this.state.tabs.map(tab => {
                    return <Tab key={tab} label={tab} />
                })
            }
            </Tabs> 
         );
     }
 }
export default TabBox;