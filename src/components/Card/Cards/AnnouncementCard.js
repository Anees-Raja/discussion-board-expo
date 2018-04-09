import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, CardItem, Left, Right, Text, Body, Button, Icon, Container, Card } from 'native-base';
import moment from 'moment';

export default class AnnouncementCard extends Component {
  render(){
    let { type } = this.props.data
    let cardStyle = styles.event

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
            {
              type === 'announcement' ? <Icon name='megaphone' type='Entypo' style={{ color: 'white', fontSize: 20 }} /> :
              type === 'event' ? <Icon name='event' type='SimpleLineIcons' style={{ color: 'white', fontSize: 20 }} /> :
              type === 'activity' ? <Icon name='energy' type='SimpleLineIcons'style={{ color: 'white', fontSize: 20 }} /> : null
            }
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
    backgroundColor: '#93b0ab',
    borderRadius: 10,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  }
})