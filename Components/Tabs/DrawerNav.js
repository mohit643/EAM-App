import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppStack from "./AppStack";
import Order from "../MyWorkOrder/Order";
import { MaterialCommunityIcons, Feather, Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { bgColor } from "../../color";
import { AuthContext } from "../Utils/AuthContext";
import Login from "../Login/Login";
import CreateWorkOrder from "../MyWorkOrder/CreateWorkOrder";
import CreateOperation from "../MyWorkOrder/CreateOperation";
import MyProfile from "../My Profile/MyProfile";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    const { logout } = useContext(AuthContext)
    const handleTaskViewPress = () => {
        // Custom action for TaskView screen
        console.log("TaskView screen pressed");
        // You can navigate to the TaskViewScreen or perform any other action here
    };
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                swipeEnabled: true,
                drawerPosition: "left",
            }}
        >
            <Drawer.Screen name="Dashboard" component={AppStack}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <MaterialCommunityIcons
                            name={"home"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />

            <Drawer.Screen name="My Profile" component={MyProfile}
                options={{
                    headerShown: true,
                    drawerIcon: ({ focused, size }) => (
                        <Feather
                            name={"user"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="My Reports" component={Order}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name={"document-text-outline"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="Assign Order" component={Order}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <MaterialIcons
                            name={"assignment"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="My Team " component={Order}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Feather
                            name={"users"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="Team Activity" component={Order}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <MaterialCommunityIcons
                            name={"file-document-multiple-outline"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="Create Work Order" component={CreateWorkOrder}
                options={{
                    headerShown: true,
                    drawerIcon: ({ focused, size }) => (
                        <MaterialCommunityIcons
                            name={"note-check"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="Create Notification" component={Order}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <MaterialCommunityIcons
                            name={"bell-plus-outline"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="Create Inspection" component={Order}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <MaterialCommunityIcons
                            name={"file-find-outline"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="Create Operation" component={CreateOperation}
                options={{
                    headerShown: true,
                    drawerIcon: ({ focused, size }) => (
                        <MaterialIcons
                            name={"note-add"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="Create Requisition" component={Order}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Octicons
                            name={"diff-added"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="Create Reservation" component={Order}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <MaterialCommunityIcons
                            name={"note-check-outline"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="My Requisitions" component={Order}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <MaterialCommunityIcons
                            name={"note"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="My Reservations " component={Order}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <MaterialCommunityIcons
                            name={"calendar-clock-outline"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="Upload Document" component={Order}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <MaterialCommunityIcons
                            name={"file-upload-outline"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="Assign Inspection" component={Order}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <MaterialIcons
                            name={"assignment-turned-in"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="Assign Operation" component={Order}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <MaterialCommunityIcons
                            name={"check-decagram-outline"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="Add Time" component={Order}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <MaterialCommunityIcons
                            name={"clock-plus-outline"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="Change Status " component={Order}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name={"sync-circle"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="Settings" component={Order}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name={"settings-sharp"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    )
                }}
            />
            <Drawer.Screen name="Logout" component={Login}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Feather
                            name={"log-in"}
                            size={size}
                            color={focused ? bgColor : '#414141'}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNav;
