import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Main from './src/components/Main';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { WorkoutsProvider } from './src/context/workoutsContext';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#364156',
    secondary: '#B2E6D4',
  },
};
export default function App() {
  return (
    <SafeAreaProvider>
      <WorkoutsProvider>
        <NavigationContainer>
          <PaperProvider theme={theme} >
            <Main />
          </PaperProvider>
        </NavigationContainer>
      </WorkoutsProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
