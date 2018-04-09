import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import AvatarContainer from '../components/Profile/Avatar/AvatarContainer';
import UserInfoContainer from '../components/Profile/UserInfo';
import { Container, Text, Content } from 'native-base';

export default class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <AvatarContainer />
          <UserInfoContainer />
        </Content>
      </Container>
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
