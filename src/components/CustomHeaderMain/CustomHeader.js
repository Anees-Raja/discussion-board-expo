import React, { Component } from 'react';
import { Header, Left, Right, Body, Icon, Title, Content, Button } from 'native-base';

class CustomHeader extends Component {
  render() {
    return(
      <Header style={{ backgroundColor: 'transparent' }}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.navigate('ActivityScreen')} >
            <Icon type='SimpleLineIcons' name='notebook' style={{ fontSize: 18 }} />
          </Button>
        </Left>
        <Body>
          <Button transparent>
            <Title style={{ color: '#FFFFFF' }} >Bridges</Title>
          </Button>
        </Body>
        <Right>
          <Button transparent onPress={() => this.props.navigation.navigate('ProfileScreen')} >
            <Icon type='Entypo' name='user' style={{ fontSize: 18 }} />
          </Button> 
        </Right>
      </Header>
    )
  }
}

export default CustomHeader