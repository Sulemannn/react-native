import React from 'react';
import ThreeText from './components/ThreeText'
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerPrincipal}>


      <View style={styles.containerText}>

        <Text style={{ fontSize: "30px" }}>TextSize 30</Text>
        <Text style={{ textAlign: "center", margin: "auto" }}>TextCentered</Text>
        <Text style={{ fontWeight: "bold" }}>TextBold</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    width: "360px",
    height: "640px",
    backgroundColor: "blue",
  },

  containerText: {
    height: "160px",
    width: "160px",
    margin: "auto",
    backgroundColor: "white",
  },

});
