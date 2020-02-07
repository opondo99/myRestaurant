import React from 'react';
import './sidedrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side_drawer'
    if (props.show) {
        drawerClasses = 'side_drawer open'
    }

    return (
        <nav className={drawerClasses}>
            <div className="side_drawer__links">
                <a href="#About">About</a>
                <a href="#Menu">Menu</a>
                <a href="#Feedback">Contact</a>
            </div>
        </nav>
    )
}
    

export default SideDrawer;