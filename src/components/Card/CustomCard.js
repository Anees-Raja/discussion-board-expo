import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, Content } from 'native-base';
import moment from 'moment';

import AnnouncementCard from './Cards/AnnouncementCard'


export default class CustomCard extends Component {
  render() {
    const { type } = this.props.data
    return (
      <Content>
        {type === 'event' || type === 'announcement' || type === 'activity' ? (
          <AnnouncementCard data={this.props.data} />
        ) : null}
      </Content>
    );
  }
}
