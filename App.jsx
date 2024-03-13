import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <CarsList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
