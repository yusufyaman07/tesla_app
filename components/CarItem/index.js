import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import styles from './style';
import StyledButton from '../Button';

const CarItem = props => {
  const {name, tagline, image} = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name} </Text>
        <Text style={styles.subtitle}>{tagline} </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content="Custom Order"
          onPress={() => {
            console.warn('Custom Order');
          }}
        />
        <StyledButton
          type="secondary"
          content="Existing Inventory"
          onPress={() => {
            console.warn('Existing Inventory');
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
