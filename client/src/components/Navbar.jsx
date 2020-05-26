import React from 'react';
import Tabs from './Tabs.jsx';
import NavHeader from './NavHeader.jsx';

class Navbar extends React.Component {
    render() {
        return  (
            <div className="Navbar">
                <NavHeader />
                <Tabs />
            </div>
        )
    }
}
export default Navbar;