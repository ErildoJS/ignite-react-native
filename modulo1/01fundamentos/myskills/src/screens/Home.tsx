import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

// interface MySkillsProps {
//   id: number;
//   title: string;
// }

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<string[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    setMySkills(prevState => [...prevState, newSkill]);
  }

  useEffect(() => {
    const currentyHour = new Date().getHours();
    if (currentyHour < 12) {
      setGreeting('Good Morning');
    } else if (currentyHour >= 12 && currentyHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Night');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Erildo</Text>
      <Text style={styles.greeting}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={text => setNewSkill(text)}
        value={newSkill}
      />
      <Button onpress={handleAddNewSkill} />
      <Text style={[styles.title, {marginVertical: 30}]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item: skill}) => <SkillCard key={skill} skill={skill} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  greeting: {
    color: '#fff',
  },
});

//safeAreaView nao e necessario no android
//no androi a caixa de input de texto tem um tamanho maior do que no ios, por padarao
