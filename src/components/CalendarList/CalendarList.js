import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';

export default class CalendarList extends Component {
  render(){
    console.log(this.props)
    return(
    <Content>
      <List>
        <ListItem>
          <Body>
            <Text>Sankhadeep</Text>
            <Text note>Its time to build a difference . .</Text>
          </Body>
        </ListItem>
      </List>
    </Content>
    )
  }
}