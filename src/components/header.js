import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


import { Header, Navigation, Drawer } from 'react-mdl'
import { Link } from 'react-router-dom'


class header extends Component {
    render() {
        return (
            <>
                <Header className="header-color" title="MyPortfolio" scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contactus">Contact Me</Link>
                    </Navigation>
                </Header>
                <Drawer className="drawer-color" title="MyPortfolio">
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contactus">Contact Me</Link>
                        
                    </Navigation>
                </Drawer>
               </>



        )
    }
}

export default header
