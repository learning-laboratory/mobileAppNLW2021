import React from 'react';

import {
  View
} from 'react-native';

import { styles } from './styles';

export function Message(){
  return (
    <View style={styles.container}>
        <Text style={styles.message}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, cum.
        </Text>
    </View>
  );
}