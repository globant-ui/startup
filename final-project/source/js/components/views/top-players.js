import AuthService from '../../utils/AuthService';
import firebase from 'firebase';
import RaisedButton from "material-ui/RaisedButton";
import React, { PropTypes as T } from "react";

class TopPlayers extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.getTopPlayers = this.getTopPlayers.bind(this);
    this.state = {
      topPlayers: []
    };
    this.getTopPlayers();
  }

  getTopPlayers() {
    let usersDb = `users`;
    let thisHome = this;
    let users = [];
    firebase.database().ref(usersDb).orderByChild("points").limitToLast(10).once('value').then(function(snapshot) {
      let usersKeys = snapshot.val();
      Object.keys(usersKeys).forEach((user) => {
        users.push({ name: usersKeys[user].name , points: usersKeys[user].points });
      });
      users.sort(function(a, b) {
        return b.points - a.points;
      });
      thisHome.setState({ topPlayers: users });
    });
  }

  static contextTypes: {
    router: T.object
  }

  render () {
    if (this.state.topPlayers.length === 0) {
      return(
        <div className='top-players'>
          <h2>No one played the game yet</h2>
        </div>
      );
    } else {
      return(
        <div className='top-players'>
          <h2>Top 10</h2>
          <ol>
          { this.state.topPlayers.map((user) => {
            return(
              <li>{user.points} - {user.name}</li>
          )})}
        </ol>
        </div>
      );
    }
  }
}

TopPlayers.propTypes = {
  auth: T.instanceOf(AuthService)
};

export default TopPlayers;
