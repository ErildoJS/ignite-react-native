import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Text, View } from 'react-native';
import { Button } from '../../components/form/Button';
import { CategorySelectButton } from '../../components/form/CategorySelectButton';
import { Input } from '../../components/form/Input';
import { InputForm } from '../../components/form/InputForm';
import { TransactionTypeButton } from '../../components/form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { styles } from './styles';

interface formData {
  name: string;
  amount: number;
}

export function Register() {
  const [transactionType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const {control, handleSubmit} = useForm()

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }

  function handleRegister(form: formData) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }

    console.log(data);
    
  }

  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.fields}>
          <InputForm name='name' control={control} placeholder='Nome'/>
          <InputForm name='amount' control={control}placeholder='Preco'/>
          <View style={styles.transactionsTypes}>
            <TransactionTypeButton title='Income' type='up' onPress={() => handleTransactionsTypeSelect('up')} isActive={transactionType === 'up'}/>
            <TransactionTypeButton title='Outcome' type='down' onPress={() => handleTransactionsTypeSelect('down')} isActive={transactionType === 'down'}/>
          </View>

          <CategorySelectButton title={category.name} onPress={handleOpenSelectCategoryModal}/>
        </View>
        <Button title='Enviar' onPress={handleSubmit(handleRegister)}/>
      </View>

      <Modal visible={categoryModalOpen}>
        <CategorySelect category={category} setCategory={setCategory} closeSelectCategory={handleCloseSelectCategoryModal}/>
      </Modal> 
    </View>
  );
}
