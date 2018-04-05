import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button,
  Icon
} from "native-base";
class ActivityCard extends Component {
  render() {
    return (
      <Content padder>
        <CardItem header>
          <Text>{this.props.data.title} activity</Text>
        </CardItem>
          <CardItem>
            <Body>
              <Text>{this.props.data.body}</Text>
            </Body>
          </CardItem>
        <CardItem footer>
          <Button transparent success><Icon name="thumbs-up" /></Button>
        </CardItem>
      </Content>
    );
  }
}

class AnnouncementCard extends Component {
  render() {
    return (
      <Content padder>
        <CardItem header>
          <Text>{this.props.data.title} announcement</Text>
        </CardItem>
          <CardItem>
            <Body>
              <Text>{this.props.data.body}</Text>
            </Body>
          </CardItem>
        <CardItem footer>
          <Button transparent success><Icon name="thumbs-up" /></Button>
        </CardItem>
      </Content>
    );
  }
}

class EventCard extends Component {
  render() {
    return (
      <Content padder>
        <CardItem header>
          <Text>{this.props.data.title} event</Text>
        </CardItem>
          <CardItem>
            <Body>
              <Text>{this.props.data.body}</Text>
            </Body>
          </CardItem>
        <CardItem footer>
          <Button transparent success><Icon name="thumbs-up" /></Button>
        </CardItem>
      </Content>
    );
  }
}


export default class CustomCard extends Component {

  render(){
    const { type } = this.props.data
    return(
      <Card>
      {
        type === 'event' ? <EventCard data={this.props.data} /> :
        type === 'announcement' ? <AnnouncementCard data={this.props.data} /> :
        type === 'activity' ? <ActivityCard data={this.props.data} /> : null
      }
      </Card>
    )
  }
}