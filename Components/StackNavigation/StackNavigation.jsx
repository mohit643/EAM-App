import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import Login from '../Login/Login';
import ResetPassword from '../Login/ResetPassword';
import Tabs from '../Tabs/Tabs';


const StackNavigation = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='ResetPassword' component={ResetPassword} />
                <Stack.Screen name='Tabs' component={Tabs} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default StackNavigation;
