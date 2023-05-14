import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image 
          style={styles.image}
          source={require('./assets/myimages/sun-weather.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer:{
    width: 350,
    height: 400,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image:{
    width: 150,
    height: 150,
    backgroundColor: 'red'
  }
});
