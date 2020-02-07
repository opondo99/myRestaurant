import React, { Component } from 'react';
import Nav from '../Navigation/Navbar';
import About from '../About/About';
import Menu from '../Menu/Menu';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import SideDrawer from '../Sidedrawer/Sidedrawer';
import Backdrop from '../Backdrop/Backdrop';
import './homepage.css';


class Home extends Component {
    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    };

    backdropClickHandler = () => {
        this.setState({
            sideDrawerOpen: false
        })
    }

    render () {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        return (
            <div className="Home">
                <Nav drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
                <header className="Home__intro">
                    <div className="Home__intro__bg"/>
                    <div className="Home__intro__text">
                        <h3>Come and enjoy the taste of<h1>Greatness</h1></h3>
                    </div>
                </header>
                <About />
                <section className="Home__mini_gallery">
                    <div className="Home__mini_gallery__box"/>
                    <div className="Home__mini_gallery__box2"/>
                </section>
                <Menu />
                <section className="Home__mini_gallery">
                    <div className="Home__mini_gallery__box3"/>
                    <div className="Home__mini_gallery__box4"/>
                </section>
                <Feedback />
                <Footer />
            </div>
        )
    }
}

export default Home;
