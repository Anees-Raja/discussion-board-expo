import React, { Component } from 'react';
import { Header, Left, Right, Body, Icon, Title, Content, Button } from 'native-base';

class SecondaryHeader extends Component {
  render() {
    return(
      <Header style={{ backgroundColor: 'transparent' }}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()} >
            <Icon type='SimpleLineIcons' name='action-undo' style={{ fontSize: 22 }} />
          </Button>
        </Left>
        <Body>
          {this.props.pageTitle &&
          <Button transparent onPress={() => this.props.navigation.navigate('FeedScreen')} >
            <Title style={{ color: '#FFFFFF' }} >{this.props.pageTitle}</Title>
          </Button>}
        </Body>
        <Right>
          <Button transparent onPress={() => this.props.navigation.navigate('ProfileScreen')} >
            <Icon type='Entypo' name='user' style={{ fontSize: 22 }} />
          </Button> 
        </Right>
      </Header>
    )
  }
}

export default SecondaryHeader