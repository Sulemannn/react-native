import React from 'react';
import TextsComponent from './components/TextsComponents';
import ImagesComponent from './components/ImagesComponents';

import { Text, StyleSheet, ScrollView, ActivityIndicator, Pressable, Alert } from 'react-native';

export default class App extends React.Component {
    constructor() {
      super();
      this.state = {
        showLoading: false
      }
    }

    onPress = () => {
      this.setState({
        showLoading: !this.state.showLoading
      })
      Alert.alert("Bouton pressé", "Vous avez appuyé sur le bouton")
    }

    render() {
      return (
        <ScrollView style={styles.container}>
          <TextsComponent/>
          <ImagesComponent/>
          { this.state.showLoading ? 
            <ActivityIndicator size="large"/>
            : null
          }
          <Pressable 
            onPress={this.onPress}
            style={styles.btn}
          >
            <Text>Appuyez-ici !</Text>
          </Pressable>
          
        </ScrollView>
      ) 
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1
  },
  btn: {
    backgroundColor: 'grey',
    borderRadius: 0.5
  }
})