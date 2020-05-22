import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    upperCaseFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    render() {
        const { name, logos } = this.props.data;
        return (
            <div className="skillCard">
                <div className="skill-header">
                    <h2>{name}</h2>
                </div>
                <div className="skill-icons">
                    {
                        logos.map((logo, index) => {
                            return (
                                    <div>
                                        <img key={index} src={require(`../imgs/${logo}-logo.png`)} alt={`${name}-icon`}/>
                                        <div>
                                            {this.upperCaseFirstLetter(logo)}
                                        </div>
                                    </div>
                                );
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Card;
