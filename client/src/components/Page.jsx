import React from 'react';
import PageHeader from './PageHeader.jsx';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id={this.props.id}>
                <PageHeader id={this.props.id}/>    
            </div>
        );
    }
}
export default Page;