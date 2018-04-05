import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Content, H3, Grid, Row, Col, Text } from 'native-base'


export default class UserInfo extends Component {
  render() {
    const user = this.props.user
    console.log(user)
    return(
      <Content padder>
        {user &&
        <Grid>
          <Row style={styles.info}>
            <Col>
            <H3>User Info</H3>
              <Row><Text>Name: {`User's name is ${user.first_name} ${user.last_name}`}</Text></Row>
              <Row><Text>Email: {user.email}</Text></Row>
              <Row><Text>Gender: {user.gender}</Text></Row>
            </Col>
          </Row>
          <Row style={styles.recentPosts}>
            <Col>
              <H3>Recent Posts</H3>
            </Col>
          </Row>
        </Grid>
        }
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  info: {
    padding: 10,
    backgroundColor: '#91dbdb',
    borderRadius: 15
  },
  recentPosts: {
    padding: 10,
    backgroundColor: '#6fcaca',
    borderRadius: 15
  }
})

// {user.recentPosts.map((group, id) =>
//   <Row key={id}>
//     <Text>{`${group.id} : ${group.name}`}</Text>
//   </Row>
// )}