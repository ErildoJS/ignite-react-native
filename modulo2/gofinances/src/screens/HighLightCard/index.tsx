import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'
import {Text, View} from 'react-native';
import {styles} from './styles';

export function HighLightCard() {
  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <Text style={styles.title}>Entrada</Text>
        <Feather name='arrow-up-circle' size={RFValue(40)}/>
      </View>

      <View style={styles.footer}>
        <Text style={styles.amount}>Kwz 17.400,00</Text>
        <Text style={styles.lastTransaction}>
          Ultima entrada dia 13 de abril
        </Text>
      </View>
    </View>
  );
}
