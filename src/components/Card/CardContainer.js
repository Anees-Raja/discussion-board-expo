import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';

import CustomCard from './CustomCard';
import { List, ListItem, Container } from 'native-base';

const CustomCardContainer = props => {
  const { data, events } = props
  const main = [...data, ...events]

  return(
    <Container>
      {data && events &&
      <List 
      dataArray={main}
      renderRow={(obj) => 
      <ListItem style={styles.item}>
        <CustomCard data={obj} />
      </ListItem>}
      >
      </List>}
    </Container>
  )
}

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 0
  }
})

const mapStateToProps = state => ({
  data: state.feed.data,
  events: state.data.events,
});


export default connect(mapStateToProps)(CustomCardContainer);