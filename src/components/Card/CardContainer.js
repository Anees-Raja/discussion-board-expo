import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomCard from './CustomCard';
import { List, ListItem } from 'native-base';

const CustomCardContainer = props => {
  const { data } = props
  console.log('FEED CARDS:', data)
  return(
    <List 
    dataArray={data}
    renderRow={(obj) => 
    <ListItem>
      <CustomCard data={obj} />
    </ListItem>}
    >
    </List>
  )
}

const mapStateToProps = state => ({
  data: state.feed.data
});

export default connect(mapStateToProps)(CustomCardContainer);