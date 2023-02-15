import React from 'react';
import {Feather} from '@expo/vector-icons'
import {RFValue} from 'react-native-responsive-fontsize'
import {Image, ScrollView, Text, View} from 'react-native';
import {TransactionCard} from '../../components/TransactionCard';
import {HighLightCard} from '../HighLightCard';
import {styles} from './styles';
import theme from '../../global/styles/theme';

export function Dashboard() {
  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <View style={styles.userWrapper}>
          <View style={styles.userInfo}>
            <Image
              style={styles.photo}
              source={{
                uri: 'https://avatars.githubusercontent.com/u/52578096?v=4',
              }}
            />
            <View style={styles.user}>
              <Text style={styles.userGreeting}>Ola, </Text>
              <Text style={styles.userName}>Erildo</Text>
            </View>
          </View>

        <Feather name='power' size={RFValue(24)} color={theme.colors.secondary}/>
        </View>
      </View>

      <ScrollView
        style={styles.highLightCards}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 24}}>
        <HighLightCard />
        <HighLightCard />
        <HighLightCard />
      </ScrollView>

      <View style={styles.transactions}>
        <Text style={styles.title}>Listagem</Text>
        <TransactionCard />
      </View>
    </View>
  );
}
