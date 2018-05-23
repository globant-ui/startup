import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active
    }

    this.onClickHome = this.onClickHome.bind(this);
    this.onClickMovies = this.onClickMovies.bind(this);
    this.onClickHelp = this.onClickHelp.bind(this);
    this.onClickAbout = this.onClickAbout.bind(this);
    this.onClickContact = this.onClickContact.bind(this);
  }

  onClickHome(e) {
    this.setState({ active: "main" }, this.changeContentMain);
    console.log(this.state)
  }

  onClickMovies(e) {
    this.setState({ active: "movies" }, this.changeContentMovies);
  }

  onClickHelp(e) {
    this.setState({ active: "help" });
  }

  onClickAbout(e) {
    this.setState({ active: "about" });
  }

  onClickContact(e) {
    this.setState({ active: "contact" });
  }

  changeContentMain() {
    this.props.click("main");
  }

  changeContentMovies() {
    this.props.click("movies");
  }

	render() {
		return (
      <nav>
        <ul>
            <a href="#" className={this.state.active === "main" ? "active" : ""} onClick={this.onClickHome}><li>Home</li></a>
            <a href="#" className={this.state.active === "movies" ? "active" : ""} onClick={this.onClickMovies}><li>Movies</li></a>
            <a href="#"><li>About us</li></a>
            <a href="#"><li>Contact</li></a>
        </ul>
      </nav>
      )
  }
}