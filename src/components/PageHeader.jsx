import React, { Component } from 'react'

class PageHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="pageHeader">
                <h4>{this.props.id}</h4>
            </div>
        )
    }
}
export default PageHeader;