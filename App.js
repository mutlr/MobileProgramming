import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './src/components/Main';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import { WorkoutsProvider } from './src/context/workoutsContext';
import { UnitsProvider } from './src/context/unitContext';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    textColor: '#364156',
    primary: 'white',
    secondary: '#B2E6D4',
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <UnitsProvider>
        <WorkoutsProvider>
          <NavigationContainer>
            <PaperProvider theme={theme} >
              <Main />
            </PaperProvider>
          </NavigationContainer>
        </WorkoutsProvider>
      </UnitsProvider>
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
