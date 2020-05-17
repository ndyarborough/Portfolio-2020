import React, { Component } from 'react'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div className="skillCard">
                <h2>{this.props.data}</h2>
            </div>
        )
    }
}
export default Card;
