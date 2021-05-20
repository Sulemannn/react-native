import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default class Title extends React.Component {
  render() {
    return (
      <View>
        <Image
          source={imgUrl}
          style={styles.imgSize}
        ></Image>
        <Image
          source={require('../assets/konexio-logo.png')}
          style={styles.imgSize}
        ></Image>
      </View>
    )
  }
}
const imgUrl = "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png"

const styles = StyleSheet.create({
  imgSize: { 
    width: 300,
    height: 100
  }
})