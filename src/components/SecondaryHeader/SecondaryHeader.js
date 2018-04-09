import React, { Component } from 'react';
import { Header, Left, Right, Body, Icon, Title, Content, Button } from 'native-base';

class SecondaryHeader extends Component {
  render() {
    return(
      <Header style={{ backgroundColor: 'transparent' }}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()} >
            <Icon type='SimpleLineIcons' name='arrow-left-circle' style={{ fontSize: 15 }} />
          </Button>
        </Left>
        <Body>
          {this.props.pageTitle &&
          <Title>{this.props.pageTitle}</Title>}
        </Body>
        <Right>
          <Button transparent onPress={() => this.props.navigation.navigate('ProfileScreen')} >
            <Icon type='Entypo' name='user' style={{ fontSize: 15 }} />
          </Button> 
        </Right>
      </Header>
    )
  }
}

export default SecondaryHeader