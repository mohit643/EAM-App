import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login/Login';
import StackNavigation from './Components/StackNavigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (

    
      <StackNavigation />




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
