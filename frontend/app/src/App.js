import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HabitList from "./components/HabitList";
import HabitEdit from "./components/HabitEdit";
import Home from "./components/Home";





class App  extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path={"/habits"} exact={true} component={HabitList} />
                    <Route path="/habits/edit/" component={HabitEdit}/>
                </Switch>
            </Router>
        )
    }
}

export default App;