import React from 'react';

import Loading from '../Components/Loading';
import { withFirebase } from '../Firebase/context';

class AuthLoadingScreen extends React.Component {
  async componentDidMount() {
    try {
      await this.props.firebase.auth.onAuthStateChanged(user => {
        if (user) {
          this.props.navigation.navigate('Main');
        } else {
          this.props.navigation.navigate('Landing');
        }
      });
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return <Loading />;
  }
}

export default withFirebase(AuthLoadingScreen);
