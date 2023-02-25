import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold, useFonts
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { AppRoutes } from './routes/app.routes';

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
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <AppRoutes />
    </NavigationContainer>
  )  
  
}
