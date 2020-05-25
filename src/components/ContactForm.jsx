import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            value: '',
            name: '',
            email: '',
            message: '',
            formFeedback: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTyping = this.handleTyping.bind(this);
    }
    handleSubmit = (event) => {
        event.preventDefault();

        if(!this.validateForm()) return false;
        else {
            fetch('/sendEmail', {
                method: 'post',
                body: JSON.stringify(this.state),
                headers: {
                    "Content-Type": 'application/json',
                }
            }).then(response =>  {
                
                console.log(response)
                // if(response.status).s
                // // Success, email sent.
                // this.setState({ 
                //     formFeedback: 'Your message was successfully sent to Noah!',
                //     feedbackColor: 'green'
                // });
                // console.log(response)
                // return response.json()
            });
        }        
    }
    handleTyping = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    validateForm = () => {
        const { name, email, message } = this.state;
        // If name is 
        
        if(name.length === 0) {
            this.setState({ 
                formFeedback: 'Name is empty',
                feedbackColor: 'red'
            });

            return false;
        }
        // If email is valid
        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false) {
            this.setState({ 
                formFeedback: 'Invalid email address',
                feedbackColor: 'red'
            });            return false;
        }
        // If message is empty
        if(message.length === 0) {
            this.setState({ 
                formFeedback: 'Message is empty',
                feedbackColor: 'red'
            });            return false;
        }
        // If no errors, return true
        return true;
    }

    render() {
        const { name, email, message, formFeedback, feedbackColor } = this.state;
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
                <div style={{color: feedbackColor}}>
                    {formFeedback}
                </div>
            </form>
        )
    }
}
export default ContactForm;