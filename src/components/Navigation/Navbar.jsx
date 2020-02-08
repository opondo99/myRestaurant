import React from 'react';
import DrawerToggleButton from '../Sidedrawer/DrawerToggle';
import './navbar.css';

const Nav = props => (
    <div className="Navigation">
        <div className="Navigation__logo">
            <h2>Big Mark</h2>
            <p>Restaurant</p>
        </div>
        <div  className="Navigation__spacer"/>
        <div>
            <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className="Navigation__links">
            <a href="#About">About</a>
            <a href="#Menu">Menu</a>
            <a href="#Feedback">Contact</a>
        </div>
    </div>
)

export default Nav;