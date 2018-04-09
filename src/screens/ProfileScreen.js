import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AvatarContainer from '../components/Profile/Avatar/AvatarContainer';
import UserInfoContainer from '../components/Profile/UserInfo';
import { Text, Content } from 'native-base';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SecondaryHeader navigation={this.props.navigation} pageTitle='You' />
        <Image style={styles.image} source={require('../../assets/images/blur-background08.jpg')} />
        <Content padder>
          <AvatarContainer />
          <UserInfoContainer />
        </Content>
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
  }
});
