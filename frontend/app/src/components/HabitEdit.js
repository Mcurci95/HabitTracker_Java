import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import AppNav from "./Navbar";

class HabitEdit extends Component {

    emptyHabit = {
        title: '',
        details: '',
        location: '',
        minutes: 0,
    }

    constructor(props) {
        super(props);
        this.state = {
            habit: this.emptyHabit
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        console.log("From componentDidMount => ", this.props.match.params.id)
        if (this.props.match.params.id !== 'new') {
            const habit = await( await fetch(`http://localhost:8080/get?id=${this.props.match.params.id}`)).json();
            this.setState({habit: habit});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let habit = {...this.state.habit};
        habit[name] = value;
        console.log("Habit on change => ", habit);
        this.setState({habit});
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log("Calling submit!");
        const {habit} = this.state;
        console.log("Habit to submit =>" , habit);
        console.log("Number", Number(habit["minutes"]));

        await fetch('http://localhost:8080/add', {
            method: (habit.id) ? 'PUT' : 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(habit)
        });
        this.props.history.push('/habits');
    }



    render() {
        const { habit } = this.state;
        console.log("habit", habit);
        const title  = <h2>{ habit.id ? 'Edit Habit' : 'Add Habit'}</h2>;

        const minuteOptions = [...Array(61).keys()];


        return (
            <div>
                <AppNav/>
                <ReactBootstrap.Container>
                    {title}
                        <ReactBootstrap.Form onSubmit={this.handleSubmit}>
                            <ReactBootstrap.Form.Group>
                                <ReactBootstrap.Form.Label for="title">Title</ReactBootstrap.Form.Label>
                                <ReactBootstrap.Form.Control type="text" name={"title"} id={"title"} defaultValue={habit.title || ''}
                                                              onChange={this.handleChange} autoComplete={'title'}/>
                            </ReactBootstrap.Form.Group>
                            <div className={"row"} align={"center"}>
                                <ReactBootstrap.FormGroup className={"col-md-4 mb-3"}>
                                    <ReactBootstrap.Form.Label for={"location"}>Location</ReactBootstrap.Form.Label>
                                    <ReactBootstrap.Form.Control type={"text"} name={"location"} id={"location"} defaultValue={habit.location || ''}
                                                                 onChange={this.handleChange} autoComplete={"Location"}/>
                                </ReactBootstrap.FormGroup>
                                <ReactBootstrap.FormGroup className={"col-md-5 mb-3"}>
                                    <ReactBootstrap.Form.Label for={"minutes"} >Minutes</ReactBootstrap.Form.Label>
                                    <ReactBootstrap.Form.Control name={"minutes"} as={"select"} onChange={this.handleChange}>
                                        {minuteOptions.map(minute => <option>{minute}</option>)}</ReactBootstrap.Form.Control>
                                </ReactBootstrap.FormGroup>
                            </div>

                            <ReactBootstrap.FormGroup>
                                <ReactBootstrap.Form.Label for={"details"}>Details</ReactBootstrap.Form.Label>
                                <ReactBootstrap.Form.Control type={"text"} name={"details"} id={"details"} defaultValue={habit.details || ''}
                                                             onChange={this.handleChange} autoComplete={"Details"}/>
                            </ReactBootstrap.FormGroup>
                            <ReactBootstrap.FormGroup>
                                <ReactBootstrap.Button color={'success'} type={'submit'}>Submit</ReactBootstrap.Button>
                            </ReactBootstrap.FormGroup>
                        </ReactBootstrap.Form>
                </ReactBootstrap.Container>
            </div>
        )
    }
}

export default  withRouter(HabitEdit);