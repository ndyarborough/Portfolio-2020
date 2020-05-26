import React, { Component } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import ContactForm from '../components/ContactForm.jsx';
import SocialLinks from '../components/SocialLinks.jsx';

class Contact extends Component {
    render() {
        return (
            <div id="Contact">
                <PageHeader id="Contact"/>  
                <div className="contact-content">
                    <div className="contentCols">
                        <SocialLinks />
                    </div>
                    <div className="contentCols">
                        <h2>Get in touch</h2>
                        <p>Whether you would like my services for a project, get extra information on any of my work, ask me about this site or just say hello.</p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;