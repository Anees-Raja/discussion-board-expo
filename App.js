import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // firebase things?
    };

    // Calling this function will open Google for login.
    this.googleLogin = async () => {
      try {
        // Add any configuration settings here:
        await GoogleSignin.configure({
          webClientId: '183152452205-ckd205qbcrn6676d3q5h6lsde1qcb3sl.apps.googleusercontent.com'
        });

        const data = await GoogleSignin.signIn();

        // create a new firebase credential with the token
        const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
        // login with credential
        const currentUser = await firebase.auth().signInWithCredential(credential);

        console.info(JSON.stringify(currentUser.toJSON()));
        alert(`Email: ${currentUser.email}`)
      } catch (e) {
        console.error(e);
      }
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.googleLogin} >
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: 100,
    height: 30,
    backgroundColor: '#cc9e35',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
  }
});
