import React, { Component } from 'react';
import PageHeader from '../components/PageHeader.jsx';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            value: '',
            name: '',
            email: '',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTyping = this.handleTyping.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.value)
    }

    handleTyping = (event) => {
        this.setState({ value: event.target.value})
    }
    render() {
        return (
            <div id="Contact">
                <PageHeader id="Contact"/>  
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Name</label>
                    <input 
                        placeholder="Ex: John Smith" 
                        value={this.state.value} 
                        onChange={this.handleTyping} 
                        type="text"
                    />
                    <label htmlFor="">Subject</label>
                    <input 
                        type="text"
                        placeholder="Optional"
                    />
                    <label htmlFor="">Body</label>
                    <input 
                        type="text" 
                        placeholder="What would you like to say?" 
                   />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
export default Contact;