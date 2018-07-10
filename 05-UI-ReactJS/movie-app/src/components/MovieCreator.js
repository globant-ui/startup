import React, { Component } from 'react';

export default class MovieCreator extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            movies: []
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        const tittle = e.target[0].value;
        const year = e.target[1].value;
        const duration = e.target[2].value;

        let newMovie = {
            tittle: { tittle },
            year: { year },
            duration: { duration }
        };

        this.setState(prevState => ({
            movies: [...prevState.movies, newMovie]
        }));

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="tittle" placeholder="Tittle" ></input>
                <input type="number" name="year" min="1920" max="2018" placeholder="Year" ></input>
                <input type="time" name="duration"></input>
                <button type="submit"> Add Movie</button>
            </form>
        );
    }
}
