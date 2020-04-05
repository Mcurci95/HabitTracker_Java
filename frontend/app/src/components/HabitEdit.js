import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import AppNav from "./Navbar";
import {FormGroup} from "react-bootstrap";

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
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const habit = await( await fetch(`/api/habits/${this.props.match.params.id``}`)).json();
            this.setState({habit: habit});
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {habit} = this.state;

        await fetch('/api/habit', {
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
        const title  = <h2>{ habit.id ? 'Edit Habit' : 'Add Habit'}</h2>;

        return (
            <div>
                <AppNav/>
                <ReactBootstrap.Container>
                    {title}
                </ReactBootstrap.Container>
                <FormGroup onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type={"text"} name={"title"} id={"title"} value={habit.title || ''}
                               onChange={this.handleChange} autoComplete={'title'}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for={"location"}>Location</Label>
                        <Input type={"text"} name={"location"} id={"location"} value={habit.location || ''}
                               onChange={this.handleChange} autoComplete={"Location"}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for={"details"}>Details</Label>
                        <Input type={"text"} name={"details"} id={"details"} value={habit.details || ''}
                               onChange={this.handleChange} autoComplete={"Details"}/>
                    </FormGroup>
                </FormGroup>
            </div>
        )
    }
}

export default HabitEdit;