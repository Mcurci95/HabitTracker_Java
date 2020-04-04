import React from 'react';
import logo from './logo.svg';
import './App.css';

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
        console.log(body);
        this.setState({habits: body, isLoading: false});
    }

    render() {
        const {habits, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>
        }
        let habitList = [];

        for(let i=0; i < habits.habits.length; i++) {
            console.log(habits.habits[i]);
            habitList.push(habits.habits[i]);
        }



        return (
            <div className="App">
                <header className="App-header">
                    <div className="App-intro">
                        <h2>Habits:</h2>
                        {habitList.map(habit =>
                            <div>
                                {habit.id} -
                                {habit.title} -
                                {habit.details} -
                                {habit.minutes} mins

                            </div>
                        )
                        }

                        <div></div>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;