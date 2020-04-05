import React, {Component} from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../App.css';

export default class AppNav extends Component {
    constructor(props) {
        super();
        this.state = {isOpen: false};
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Habit Tracker</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}