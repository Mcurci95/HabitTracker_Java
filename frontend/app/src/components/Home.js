import React, { Component } from "react";
import "../App.css";
import AppNav from "./Navbar";
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import App from "../App";

class Home extends Component {
    render() {
        return (
            <div>
                <AppNav/>
            </div>
        )
    }
}

export default Home;