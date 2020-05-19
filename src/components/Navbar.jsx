import React from 'react';
// import TabBox from './TabBox.jsx';
import Tabs from './Tabs.jsx';
import NavHeader from './NavHeader.jsx';

class Navbar extends React.Component {
    
    render() {
        return  (
            <div className="Navbar">
                <NavHeader />
                {/* <TabBox /> */}
                <Tabs />
            </div>

        )
    }
}
export default Navbar;