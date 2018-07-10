import React, { Component } from 'react';

export default class MovieCreator extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            tittle: "",
            year: "",
            duration: "",
        };
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let movie = {
            tittle: this.state.tittle,
            year: this.state.year,
            duration: this.state.duration
        }
        this.props.onUpdate(movie);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="tittle"
                    placeholder="Tittle"
                    value={this.state.tittle}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="number"
                    name="year"
                    min="1920"
                    max="2018"
                    placeholder="Year"
                    value={this.state.year}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="time"
                    name="duration"
                    value={this.state.duration}
                    onChange={this.handleChange}
                    required
                />
                <button type="submit"> Add Movie</button>
            </form>
        );
    }
}
