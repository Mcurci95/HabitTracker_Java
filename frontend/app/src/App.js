import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HabitList from "./components/HabitList";

class App  extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path={"/habits"} exact={true} component={HabitList} />
                </Switch>
            </Router>
        )
    }
}

export default App;