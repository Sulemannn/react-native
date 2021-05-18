import React from 'react';
// import MoreText from './components/MoreText'
import { StyleSheet, View, Text, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.scrollView}>


      <View style={styles.containerText}>

        <Text style={{ fontSize: "30px" }}>TextSize 30</Text>
        <Text style={{ textAlign: "center", margin: "auto" }}>TextCentered</Text>
        <Text style={{ fontWeight: "bold" }}>TextBold</Text>

        <Image source={require("./img/konexio-logo.png")}
          style={{ width: 300, height: 100 }} />

        <Image
          source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
          style={{ width: 300, height: 100, margin: "auto" }} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
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
