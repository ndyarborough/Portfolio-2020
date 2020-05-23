import React, { Component } from 'react';

class ContactForm extends Component {
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
        console.log(this.state)
        event.preventDefault();
        fetch('/sendEmail', {
            method: 'post',
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": 'application/json',
            }
        }).then(function(response) {
            // Success, email sent.
            return response.json()
        });
    }
    handleTyping = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }
    render() {
        const { name, email, message } = this.state;
        return (
            <form className="contactForm" onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    value={name} 
                    onChange={this.handleTyping} 
                    placeholder="Name" 
                />
                <br />
                <input 
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.handleTyping} 
                    placeholder="Your Email Address"
                />
                <br />
                <input 
                    type="text"
                    name="message"
                    value={message}
                    onChange={this.handleTyping} 
                    placeholder="Message"
                />
                <br />
                <input value="Send" type="submit"/>
            </form>
        )
    }
}
export default ContactForm;