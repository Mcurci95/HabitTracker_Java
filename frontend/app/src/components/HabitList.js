import React from 'react';
import AppNav from "./Navbar";
import '../App.css';
import * as ReactBootstrap from 'react-bootstrap';
import {Link} from "react-router-dom";

class HabitList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            habits: null,
            habitsList: []
        };
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:8080");
        const body = await response.json();
        this.setState({habits: body, isLoading: false});
    }

    renderHabit(habit) {
        return (
            <tr key={habit.id}>
                <td>{habit.id}</td>
                <td>{habit.title}</td>
                <td>{habit.minutes}</td>
                <td>{habit.location}</td>
                {/*<td><ReactBootstrap.Button variant="info" size="sm">Details</ReactBootstrap.Button>{' '}</td>*/}
                <td>{habit.details}</td>
                <td><ReactBootstrap.Button variant="success" size="sm" tag={Link} to={"/habits?id=" + habit.id}>Edit</ReactBootstrap.Button>{' '}</td>
                <td><ReactBootstrap.Form.Check type="checkbox" /></td>
                {/*<td><ReactBootstrap.Button variant="primary">Complete</ReactBootstrap.Button>{' '}</td>*/}
            </tr>
        )
    }

    render() {
        const {habits, isLoading} = this.state;
        let habitList = [];

        if (isLoading) {
            return <p>Loading...</p>
        }

        for (let i=0; i < habits.habits.length; i++) {
            console.log(habits.habits[i]);
            habitList.push(habits.habits[i]);
        }

        return (
            <div className="App-intro">
                <AppNav/>
                <Link to={"/habits/edit/"}>
                    <div className="float-right">
                        <ReactBootstrap.Button color="success"  tag={Link} to="./habits/edit/">Add Habit</ReactBootstrap.Button>
                    </div>
                </Link>
                <h2>Habits:</h2>
                <ReactBootstrap.Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Habit</th>
                        <th>Minutes</th>
                        <th>Location</th>
                        <th>Details</th>
                        <th>Edit</th>
                        <th>Complete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {habitList.map(habit => this.renderHabit(habit))}
                    </tbody>
                </ReactBootstrap.Table>
            </div>
        );
    }
}

export default HabitList;