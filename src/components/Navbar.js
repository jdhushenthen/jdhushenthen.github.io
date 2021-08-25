import React, { Component } from 'react';
import { Button } from './Button';
import './Navbar.css';
import { Link } from 'react-router-dom';
import pdf from './assets/Janahan-Dhushenthen-Resume.pdf';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <Link className="navbar-logo" to="/"> jdhushenthen </Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li> <a className="nav-links" href={pdf} target="_blank"> resume </a> </li>
                    <li> <Link className="nav-links" to='/blog'> blog </Link> </li>
                    <li> <a className="nav-links" href="https://github.com/jdhushenthen" target="_blank"> github </a> </li>
                    <li> <a className="nav-links" href="https://linkedin.com/in/jdhushenthen" target="_blank"> linkedin </a> </li>
                    <li> <a className="nav-links-mobile" href="mailto:jdhushenthen@rogers.com"> hire me </a> </li>
                </ul>
                <a href="mailto:jdhushenthen@rogers.com">
                    <Button> hire me </Button>
                </a>
            </nav>
        )
    }
}

export default Navbar