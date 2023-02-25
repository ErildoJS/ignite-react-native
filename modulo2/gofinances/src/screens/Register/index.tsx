import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Keyboard, Modal, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button } from '../../components/form/Button';
import { CategorySelectButton } from '../../components/form/CategorySelectButton';
import { InputForm } from '../../components/form/InputForm';
import { TransactionTypeButton } from '../../components/form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { styles } from './styles';
//import * as Yup from 'yup'
//import {yupResolver} from '@hookform/resolvers/yup'

interface formData {
  name: string;
  amount: string;
}

// const schema = Yup.object().shape({
//   name: Yup.string().required('Nome e obrigatorio),
//   amount: Yup.number().
//   typeError('Informe um valor numerico').
//   positive('o valor nao pode ser negativo').
//   required('o valor e obrigatorio')
// })

export function Register() {
  const [transactionType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const {control, handleSubmit, formState: {errors}} = useForm()
  // const {control, handleSubmit} = useForm({resolver: yupResolver(schema)})

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
    if(!transactionType) {
      return Alert.alert('Selecione o tipo de transacao')
    }
    if(category.key === 'category') {
      return Alert.alert('Selecione a categoria')
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }

    console.log(data);
    
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{/**fecha o teclado quando clicado em qualquer area fora */}
    <View style={styles.Container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.fields}>
          <InputForm name='name' error={errors.name && errors.name.message} control={control} placeholder='Nome' autoCapitalize='sentences' autoCorrect={false}/>
          <InputForm name='amount' error={errors.amount && errors.amount.message} control={control}placeholder='Preco' keyboardType='numeric'/>
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
    </TouchableWithoutFeedback>
  );
}
