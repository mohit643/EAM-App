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
import MyAssetes from '../My Assetes/MyAssetes';
import MyNotification from '../My Notification/MyNotification';
import MyTeam from '../My Team/MyTeam';
import Map from '../MyWorkOrder/Map';



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
                name='My Assetes'
                options={{ headerShown: true }}
                component={MyAssetes} />
            <Stack.Screen
                name='Create Work Order'
                options={{ headerShown: true }}
                component={CreateWorkOrder} />
            <Stack.Screen
                name='My Notifications'
                options={{ headerShown: true }}
                component={MyNotification} />
            <Stack.Screen
                name='Add Notification'
                options={{ headerShown: true }}
                component={AddNotification} />
            <Stack.Screen
                name='My Team'
                options={{ headerShown: true }}
                component={MyTeam} />
            <Stack.Screen
                name='Map'
                options={{ headerShown: true }}
                component={Map} />


        </Stack.Navigator>


    )
}

export default DashboardNav;
