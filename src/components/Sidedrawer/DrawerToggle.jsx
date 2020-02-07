import React from 'react';
import './drawerbutton.css';

const drawerToggleButton = props => (
    <button className="toggle_button" onClick={props.click}>
        <div className="toggle_button_line"></div>
        <div className="toggle_button_line"></div>
        <div className="toggle_button_line"></div>
    </button>
)

export default drawerToggleButton;