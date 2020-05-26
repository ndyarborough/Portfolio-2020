import React, { Component } from 'react';
import linkedInLogo from '../imgs/linkedin-logo.webp';
import githubLogo from '../imgs/github-logo.png';

class SocialLink extends Component {
    render() {
        return (
            <div>
                <div>                
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ndyarborough">
                        <img src={linkedInLogo} alt="LinkedIn Logo"/>
                    </a>
                </div>
                <div>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/noah-yarborough/">
                        <img src={githubLogo} alt="Github Logo"/>
                    </a>
                </div>
            </div>
        )
    }
}
export default SocialLink;