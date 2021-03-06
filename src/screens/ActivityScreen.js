import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Content } from 'native-base';

import CourseListContainer from '../components/CourseList';
import SecondaryHeader from '../components/SecondaryHeader';


export default class ActivityScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/images/blur-background08.jpg')} />
        <SecondaryHeader navigation={this.props.navigation} pageTitle='Your Courses' />
        <Content padder>
          <CourseListContainer navigation={this.props.navigation} />
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
