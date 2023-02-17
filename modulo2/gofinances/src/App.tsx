import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold, useFonts
} from '@expo-google-fonts/poppins';
import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Dashboard } from './screens/Dashboard';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <ActivityIndicator />
  }

  return (
    <>
    <StatusBar barStyle="light-content" />
    <Dashboard />
    </>
  )  
  
}
