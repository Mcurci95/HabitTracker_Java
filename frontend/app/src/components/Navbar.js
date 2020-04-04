import React, {Component} from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../App.css';

export default class Navbar extends Component {
    constructor(props) {
        super();
        this.state = {isOpen: false};
    }

    render() {
        return (
            <Navbar color={"dark"} dark expand={"md"}>
                <NavbarBrand tag={Link} to={"/"}>Habit</NavbarBrand>
            </Navbar>
        )
    }
}