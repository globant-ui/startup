import AuthService from '../../utils/AuthService';
import firebase from 'firebase';
import RaisedButton from "material-ui/RaisedButton";
import React, { PropTypes as T } from "react";

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    if(props.auth) {
      this.updatePoints = this.updatePoints.bind(this);
      this.state = {
        profile: props.auth.getProfile(),
        points: 0
      };
      props.auth.on('profile_updated', (newProfile) => {
        this.setState(
          { profile: newProfile },
          () => {
            this.updatePoints();
          }
        );
      });
    }
  }

  updatePoints() {
    if(Object.keys(this.state.profile).length !== 0) {
      let userPoints = `users/${this.state.profile.user_id}/points`;
      let thisHome = this;
      firebase.database().ref(userPoints).once('value').then(function(snapshot) {
        thisHome.setState({ points: snapshot.val() });
      });
    }
  }

  componentDidMount() {
    this.updatePoints();
  }

  static contextTypes: {
    router: T.object
  }

  render () {
    if(Object.keys(this.state.profile).length !== 0) {
      return(
        <div className="home-page">
          <h2>Welcome to Countries Trivia { this.state.profile.name }!</h2>
          <h3>
            You have<span className='points'>{ this.state.points }</span>points
          </h3>
        </div>
      );
    } else {
      return (
        <div className="home-page">
          <h2>Welcome to Countries Trivia!</h2>
          <h3>Please login to play the game</h3>
        </div>
      );
    }
  }
}

Home.propTypes = {
  auth: T.instanceOf(AuthService)
};

export default Home;
