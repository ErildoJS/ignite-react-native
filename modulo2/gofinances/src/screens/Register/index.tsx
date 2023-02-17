import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../components/forms/Button';
import { Input } from '../../components/forms/Input';
import { TransactionTypeButton } from '../../components/forms/TransactionTypeButton';
import { styles } from './styles';


export function Register() {
  const [transactionType, setTransactionType] = useState('')

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <Text style={styles.text}>Cadastro</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.fields}>
          <Input placeholder='Nome'/>
          <Input placeholder='Preco'/>
          <View style={styles.transactionsTypes}>
            <TransactionTypeButton title='Income' type='up' onPress={() => handleTransactionsTypeSelect('up')} isActive={transactionType === 'up'}/>
            <TransactionTypeButton title='Outcome' type='down' onPress={() => handleTransactionsTypeSelect('down')} isActive={transactionType === 'down'}/>
          </View>
        </View>
        <Button title='Enviar'/>
      </View>
    </View>
  );
}
