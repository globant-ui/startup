import AuthService from '../../utils/AuthService';
import React, { PropTypes as T } from 'react';
import RaisedButton from "material-ui/RaisedButton";

class Login extends React.Component {
  static contextTypes: {
    router: T.object
  }

  render() {
    const { auth } = this.props;
    if(Object.keys(auth.getProfile()).length !== 0) {
      return (
        <div className='login'>
          <h2>You're already logged in as { auth.getProfile().name }!</h2>
        </div>
      );
    } else {
      return (
        <div className='login'>
          <h2>Please login to play the game.</h2>
          <div>
            <RaisedButton primary={true} onTouchTap={auth.login.bind(this)}>Login</RaisedButton>
          </div>
        </div>
      );
    }
  }
}

Login.propTypes = {
  location: T.object,
  auth: T.instanceOf(AuthService)
};

export default Login;
