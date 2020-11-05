import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#00F" barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello World Feliz</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FF0',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
