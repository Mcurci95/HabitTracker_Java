import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            habits: null
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
        console.log("habits");
        console.log(this.state.habits);

        if (isLoading) {
            return <p>Loading...</p>
        }

        let habitList = [];
        for (let habit in habits["habits"]) {
            habitList.push(habit);
        }
        console.log(habitList);


        return (
            <div className="App">
                <header className="App-header">
                    <div className="App-intro">
                        <h2>Habits:</h2>
                        {habitList.map(habit =>
                            <div>
                                {habit.id}
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