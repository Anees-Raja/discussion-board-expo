import React, { Component } from 'react';
import { List, ListItem, Thumbnail, Text, Body } from 'native-base';

export default class CourseList extends Component {
  render(){
    console.log(this.props)
    return(
    <List
      dataArray={this.props.courses}
      renderRow={(obj) =>
      <ListItem>
        <Body>
          <Text>{obj.name}</Text>
          <Text note>{obj.descriptionHeading}</Text>
        </Body>
      </ListItem>}>
     </List>
    )
  }
}