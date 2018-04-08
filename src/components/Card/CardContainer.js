import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomCard from './CustomCard';
import { List, ListItem, Container } from 'native-base';

const CustomCardContainer = props => {
  const { data, events, courses } = props
  const main = [...data, ...events, ...courses]
  console.log(main)
  return(
    <Container>
      {data && events && courses &&
      <List 
      dataArray={main}
      renderRow={(obj) => 
      <ListItem>
        <CustomCard data={obj} />
      </ListItem>}
      >
      </List>}
    </Container>
  )
}

const mapStateToProps = state => ({
  data: state.feed.data,
  events: state.data.events,
  courses: state.data.courses.info
});

export default connect(mapStateToProps)(CustomCardContainer);