import React from 'react';
import {Feather} from '@expo/vector-icons'
import {RFValue} from 'react-native-responsive-fontsize'
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {TransactionCard, TransactionCardProps} from '../../components/TransactionCard';
import {styles} from './styles';
import theme from '../../global/styles/theme';
import { HighLightCard } from '../../components/HighLightCard';

interface dataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de Software',
      amount: 'kwz 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: '13/10/2022'
    },
    {
      id: '2',
      type: 'negative',
      title: 'Pizza',
      amount: 'kwz 1.000,00',
      category: {
        name: 'compras',
        icon: 'coffee'
      },
      date: '23/10/2022'
    },
    {
      id: '3',
      type: 'negative',
      title: 'aluguer',
      amount: 'kwz 5.000,00',
      category: {
        name: 'casa',
        icon: 'shopping-bag'
      },
      date: '13/10/2022'
    },
  ]
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
        <HighLightCard title='Entradas' amount='Kwz 17.400,00' lastTransaction='Ultima entrada dia 13 de abril' type='up'/>
        <HighLightCard title='Saidas' amount='Kwz 1.259,00' lastTransaction='Ultima saida dia 03 de abril'  type='down'/>
        <HighLightCard title='Total' amount='Kwz 16.141,00' lastTransaction='01 a 16 de abril'  type='total'/>
      
      </ScrollView>

      <View style={styles.transactions}>
        <Text style={styles.title}>Listagem</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 16}}
          style={styles.transactionsList} 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard title={item.title} amount={item.amount} category={{name: item.category.name, icon: item.category.icon}} date={item.date} type={item.type} />}
        />
      </View>
    </View>
  );
}
