// Import necessary modules and components
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../HomePage/Home';
import Settings from '../SettingPage/Settings';


const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
        {/* Add more screens as needed */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppDrawer;
