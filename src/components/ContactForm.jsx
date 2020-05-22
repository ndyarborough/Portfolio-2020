import React, { Component } from 'react';
import sendEmail from '../nodemailer';

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
        event.preventDefault();
        const { email, message } = this.state;
        sendEmail(email, message);
    }
    handleTyping = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }
    render() {
        const { name, email, message } = this.state;
        console.log(name, email, message)
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