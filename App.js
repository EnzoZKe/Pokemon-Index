import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dex from './src/components/dex';
import DrawerMenu from './src/components/pages/navStack';

export default function App() {
  return (
    <DrawerMenu/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
