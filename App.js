import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Main from './src/components/Main';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <PaperProvider theme={theme} >
          <Main />
        </PaperProvider>
      </NavigationContainer>
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
