import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Header from './components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import * as MediaLibrary from 'expo-media-library';
import Photos from './components/Photos';


export default function App() {
  useEffect(() => {
    MediaLibrary.getPermissionsAsync().then((permission) => { }).catch(err => console.error(err));
    MediaLibrary.requestPermissionsAsync().then((permission) => { }).catch(err => console.error(err));
    // TODO: Handle scenario when permission is denied
  }, [])
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Header user={{ name: 'Vaibhav Arora' }} />
        <Photos />
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
