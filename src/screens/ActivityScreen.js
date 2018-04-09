import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import CourseListContainer from '../components/CourseList';

export default class ActivityScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <CourseListContainer />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF'
  }
});
