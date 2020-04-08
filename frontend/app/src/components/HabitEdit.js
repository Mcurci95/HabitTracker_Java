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
        if (this.props.match.params.id !== 'new') {
            const habit = await( await fetch(`/api/habits/${this.props.match.params.id}`)).json();
            this.setState({habit: habit});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = event.value;
        const name = target.name;
        let habit = {...this.state.habit};
        habit[name] = value;
        this.setState({habit});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {habit} = this.state;

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
                            <ReactBootstrap.FormGroup>
                                <ReactBootstrap.Form.Label for="title">Title</ReactBootstrap.Form.Label>
                                <ReactBootstrap.Form.Control type={"text"} name={"title"} id={"title"} value={habit.title || ''}
                                                             onChange={this.handleChange} autoComplete={'title'}/>
                            </ReactBootstrap.FormGroup>
                            <div className={"row"} align={"center"}>
                                <ReactBootstrap.FormGroup className={"col-md-4 mb-3"}>
                                    <ReactBootstrap.Form.Label for={"location"}>Location</ReactBootstrap.Form.Label>
                                    <ReactBootstrap.Form.Control type={"text"} name={"location"} id={"location"} value={habit.location || ''}
                                                                 onChange={this.handleChange} autoComplete={"Location"}/>
                                </ReactBootstrap.FormGroup>
                                <ReactBootstrap.FormGroup className={"col-md-5 mb-3"}>
                                    <ReactBootstrap.Form.Label for={"minutes"}>Minutes</ReactBootstrap.Form.Label>
                                    <ReactBootstrap.Form.Control as={"select"}>
                                        {minuteOptions.map(minute => <option>{minute}</option>)}</ReactBootstrap.Form.Control>
                                </ReactBootstrap.FormGroup>
                            </div>

                            <ReactBootstrap.FormGroup>
                                <ReactBootstrap.Form.Label for={"details"}>Details</ReactBootstrap.Form.Label>
                                <ReactBootstrap.Form.Control type={"text"} name={"details"} id={"details"} value={habit.details || ''}
                                                             onChange={this.handleChange} autoComplete={"Details"}/>
                            </ReactBootstrap.FormGroup>
                        </ReactBootstrap.Form>
                    <ReactBootstrap.FormGroup>
                        <ReactBootstrap.Button color={'success'} type={'submit'}>Submit</ReactBootstrap.Button>
                    </ReactBootstrap.FormGroup>
                </ReactBootstrap.Container>


            </div>
        )
    }
}

export default  withRouter(HabitEdit);