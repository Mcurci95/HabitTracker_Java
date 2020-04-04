import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactBootstrap from 'react-bootstrap';

class App extends React.Component {

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
                <td>Details</td>
                <td>Edit link</td>
            </tr>
        )
    }

    render() {
        const {habits, isLoading} = this.state;
        let habitList = [];

        if (isLoading) {
            return <p>Loading...</p>
        }

        for(let i=0; i < habits.habits.length; i++) {
            console.log(habits.habits[i]);
            habitList.push(habits.habits[i]);
        }

        return (

                    <div className="App-intro">
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

export default App;