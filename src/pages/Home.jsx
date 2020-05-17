import React, { Component } from 'react';
import PageHeader from '../components/PageHeader.jsx';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
    }
    render() {
        return (
            <div id="Home">
                <PageHeader id="Home"/>  
                <h1>Motivated individual with a passion to solve problems.</h1>
            </div>
        )
    }
}
export default Home;