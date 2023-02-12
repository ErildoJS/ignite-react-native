import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

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
        </View>
      </View>
    </View>
  );
}
