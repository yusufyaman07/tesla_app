import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import cars from './cars';
import CarItem from '../CarItem';
import styles from '../CarsList/styles';

const CarsList = () => {
  return (
    <View style={styles.conatiner}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarsList;
