import React, { Component } from 'react'
import { Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Content } from 'native-base'


export default class Avatar extends Component {
  render() {
    const avatar = this.props.avatar
    return (
      <Content padder>
        {avatar &&
        <TouchableOpacity>
            <Image
            style={styles.image}
            source={{uri: avatar}}
            />
        </TouchableOpacity>}
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: 300,
    height:300,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#3a5684"
  }
})