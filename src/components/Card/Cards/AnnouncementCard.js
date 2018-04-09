import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, CardItem, Left, Right, Text, Body, Button, Icon, Container, Card } from 'native-base';
import moment from 'moment';

export default class AnnouncementCard extends Component {
  render(){
    let { type } = this.props.data
    let icon_name = 'calendar-alt'
    let icon_type = 'FontAwesome'
    let cardStyle = styles.event

    if(type === 'announcement'){
      icon = 'bullhorn'
      cardStyle = styles.announcement
    }
    if(type === 'activity'){
      icon = 'asterisk'
      cardStyle = styles.activity
    }

    return (
      <Card style={cardStyle}>
        <CardItem header style={styles.cardItem}>
          <Text style={{ color: 'white', backgroundColor: 'transparent' }} >{this.props.data.title}</Text>
        </CardItem>
        <CardItem style={styles.cardItem}>
          <Body>
            <Text style={{ color: 'white', backgroundColor: 'transparent' }} >{this.props.data.body}</Text>
          </Body> 
        </CardItem>
        <CardItem footer style={styles.cardItem}>
          <Left>
            <Icon style={{ color: 'white', backgroundColor: 'transparent' }} name={icon} />
          </Left>
          <Right>
            <Text style={{ color: 'white', backgroundColor: 'transparent' }} >{this.props.data.author_name}</Text>
            <Text style={{ color: 'white', backgroundColor: 'transparent' }} >{moment(this.props.data.createdAt).format('DD-MM-YYYY')}</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}


const styles = StyleSheet.create({
  cardItem: {
    backgroundColor: 'transparent'
  },
  event: {
    backgroundColor: '#813772',
    borderRadius: 10,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  announcement: {
    backgroundColor: '#062F4F',
    borderRadius: 10,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activity: {
    backgroundColor: '#B82601',
    borderRadius: 10,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  }
})