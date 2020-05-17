import React from 'react';
import TabBox from './TabBox.jsx';
import NavHeader from './NavHeader.jsx';

class Navbar extends React.Component {
    
    render() {
        return  (
            <div className="Navbar">
                <NavHeader />
                <TabBox />
            </div>

        )
    }
}
export default Navbar;