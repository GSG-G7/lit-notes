import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

import { colors } from '../Constants/Colors';
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
      console.log(error);
    }
  }

  render() {
    return (
      <View style={StyleSheet.container}>
        <ActivityIndicator
          style={styles.ActivityIndicator}
          size="large"
          color={colors.blue}
        />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  ActivityIndicator: {
    marginTop: 300
  }
});

export default withFirebase(AuthLoadingScreen);
