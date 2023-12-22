import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import Login from '../Login/Login';
import ResetPassword from '../Login/ResetPassword';
import MyWorkOrders from '../MyWorkOrder/MyWorkOrders';
import Order from '../MyWorkOrder/Order';
import AddNotification from '../My Notification/AddNotification';
import CreateWorkOrder from '../MyWorkOrder/CreateWorkOrder';
import Dashboard from '../HomePage/Home';
import AppStack from '../Tabs/AppStack';
import MyProfile from '../My Profile/MyProfile';
import OrderDetails from '../MyWorkOrder/OrderDetails';

const DashboardNav = () => {
    const Stack = createStackNavigator();

    return (

        <Stack.Navigator
            initialRouteName='Dashborad'
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Dashborad" component={Dashboard} />
            {/* <Stack.Screen
                name='Tabs'
                component={AppStack} /> */}
            <Stack.Screen
                name='Order'
                component={Order} />
            <Stack.Screen
                name='My Work Orders'
                options={{ headerShown: true }}
                component={MyWorkOrders} />
            <Stack.Screen
                name='Create Work Order'
                options={{ headerShown: true }}
                component={CreateWorkOrder} />
            <Stack.Screen
                name='Add Notification'
                options={{ headerShown: true }}
                component={AddNotification} />
                
           

        </Stack.Navigator>


    )
}

export default DashboardNav;
