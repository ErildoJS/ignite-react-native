import {Text, View} from 'react-native';
import {styles} from './styles';
import {Feather} from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: 'positive' | 'negative',
  title: string;
  amount: string;
  category: Category;
  date: string;
}



export function TransactionCard({title, amount, category, date, type}: TransactionCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.amount, type === 'positive' ? {color: theme.colors.success} : {color: theme.colors.attention}]}>
        {type === 'negative' && '- '}
        {amount}
        </Text>
      <View style={styles.footer}>
        <View style={styles.category}>
          <Feather name={category.icon} size={RFValue(20)} color={theme.colors.text} />
          <Text style={styles.categoryName}>{category?.name}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  )
}
