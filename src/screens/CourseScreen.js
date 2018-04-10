import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native'
import { Container, Content, Text, Title, Button, Icon, Body, Spinner } from 'native-base'

import SecondaryHeader from '../components/SecondaryHeader';

export default class CourseScreen extends Component {
  render() {
    const { course } = this.props.navigation.state.params
    console.log(course)
    return (
      <Container style={styles.container}>
        {course ? <SecondaryHeader navigation={this.props.navigation} pageTitle={course.section} /> : <Spinner />}
        <Content padder>
          {course ?
          <Body>
            <Title style={styles.bodyText}>{course.name}</Title>
            <Text style={styles.bodyText}>{course.teacherGroupEmail}</Text>
            <Text style={styles.bodyText}>{course.creationTime}</Text>
            <Text style={styles.bodyText}>{course.calendarId}</Text>
            <Text style={styles.bodyText}>{course.alternateLink}</Text>
            <Text style={styles.bodyText}>{course.id}</Text>
          </Body> : <Spinner />}
        </Content>
      </Container>
    );
  }
}

styles = StyleSheet.create({
  container: {
    backgroundColor: '#102649'
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
  bodyText: {
    color: '#FFFFFF'
  }
})