import React from 'react';
import './footer.css'

const Footer = () => (
    <div className="Footer">
        <div className="Footer__contacts">
            <h1>Contacts</h1>
            Kikuyu Road, Kwa ng'a ng'a flats<br/>
            <strong>+254 795 133 547</strong><br/>
            markopondo.m@gmail.com
        </div>
        <div className="Footer__location">
            <div className="Footer__location__map"/>
            <a href="https://maps.app.goo.gl/zDjWd2K2M48fshbd7" target="_blank" rel="noopener noreferrer">Go to maps</a>
        </div>
    </div>
)

export default Footer;