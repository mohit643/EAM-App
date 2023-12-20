import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login/Login';

import { NavigationContainer } from '@react-navigation/native';
import AppNav from './Components/Tabs/AppNav';
import { AuthProvider } from './Components/Utils/AuthContext';


export default function App() {
  return (


    <AuthProvider>
      <AppNav />
    </AuthProvider>



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
