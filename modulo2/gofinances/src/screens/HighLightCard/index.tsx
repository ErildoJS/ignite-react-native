import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'
import {Text, View} from 'react-native';
import {styles} from './styles';
import theme from '../../global/styles/theme';

interface props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'up' | 'down' | 'total';
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
}

export function HighLightCard({title, amount, lastTransaction, type}: props) {
  return (
    <View style={[styles.Container, type === 'total' ? {backgroundColor: theme.colors.secondary} : {backgroundColor: theme.colors.shape}]}>
      <View style={styles.header}>
        <Text style={[styles.title, type === 'total' ? {color: theme.colors.shape} : {color: theme.colors.text_dark}]}>{title}</Text>
        <Feather name={icon[type]} size={RFValue(40)} color={type === 'up' ? theme.colors.success : type === 'down' ? theme.colors.attention : type === 'total' ? theme.colors.shape : ''} />
      </View>

      <View style={styles.footer}>
        <Text style={[styles.amount, type === 'total' ? {color: theme.colors.shape} : {color: theme.colors.text_dark}]}>{amount}</Text>
        <Text style={[styles.lastTransaction, type === 'total' ? {color: theme.colors.shape} : {color: theme.colors.text}]}>
          {lastTransaction}
        </Text>
      </View>
    </View>
  );
}
