import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Content, Footer, Button } from 'native-base';

import SecondaryHeader from '../components/SecondaryHeader';
import AvatarContainer from '../components/Profile/Avatar/AvatarContainer';
import UserInfoContainer from '../components/Profile/UserInfo';
import SignOutButton from '../components/Profile/SignOutButton';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/images/blur-background08.jpg')} />
        <SecondaryHeader navigation={this.props.navigation} pageTitle='You' />
        <Content padder>
          <AvatarContainer />
          <UserInfoContainer />
        </Content>
        <Footer style={styles.footer}>
          <SignOutButton />
        </Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
  }
});
