import React from 'react';
import { StyleSheet } from 'react-native';
import Header from './components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Header user={{ name: 'Vaibhav Arora' }} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
