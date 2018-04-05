import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Grid
} from 'native-base';
import moment from 'moment';
class ActivityCard extends Component {
  render() {
    return (
      <Content padder>
        <CardItem header>
        <Left><Text>{this.props.data.title} - {this.props.data.type}</Text></Left>
          <Right>
            <Text>{this.props.data.author_name}</Text>
            <Text>{moment(this.props.data.createdAt).format('DD-MM-YYYY')}</Text>
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{this.props.data.body}</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Left>
            <Button transparent success>
              <Icon name="thumbs-up" />
            </Button>
          </Left>
        </CardItem>
      </Content>
    );
  }
}

class AnnouncementCard extends Component {
  render() {
    return (
      <Content>
        <CardItem header>
        <Left><Text>{this.props.data.title} - {this.props.data.type}</Text></Left>
          <Right>
            <Text>{this.props.data.author_name}</Text>
            <Text>{moment(this.props.data.createdAt).format('DD-MM-YYYY')}</Text>
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{this.props.data.body}</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Left>
            <Button transparent success>
              <Icon name="thumbs-up" />
            </Button>
          </Left>
        </CardItem>
      </Content>
    );
  }
}

class EventCard extends Component {
  render() {
    console.log(this.props);
    return (
      <Content padder>
        <CardItem header>
          <Left><Text>{this.props.data.title} - {this.props.data.type}</Text></Left>
          <Right>
            <Text>{this.props.data.author_name}</Text>
            <Text>{moment(this.props.data.createdAt).format('DD-MM-YYYY')}</Text>
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{this.props.data.body}</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Left>
            <Button transparent success>
              <Icon name="thumbs-up" />
            </Button>
          </Left>
        </CardItem>
      </Content>
    );
  }
}

export default class CustomCard extends Component {
  render() {
    const { type } = this.props.data;
    return (
      <Card>
        {type === 'event' ? (
          <EventCard data={this.props.data} />
        ) : type === 'announcement' ? (
          <AnnouncementCard data={this.props.data} />
        ) : type === 'activity' ? (
          <ActivityCard data={this.props.data} />
        ) : null}
      </Card>
    );
  }
}
