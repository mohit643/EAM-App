import { Text, View, TouchableOpacity, StyleSheet } from "react-native"
import { SimpleLineIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { bgColor, placeHolderColor } from "../../color";
import { Avatar } from 'react-native-elements';
import userImage from '../../assets/Oval.png'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CreateWorkOrder from "../MyWorkOrder/CreateWorkOrder";
import Order from "../MyWorkOrder/Order";
import PersonalDetails from "./PersonalDetails";
import AccountDetails from "./AccountDetails";


const Tab = createMaterialTopTabNavigator();


const MyProfile = ({ navigation }) => {
    const Header = () => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 10 }}>
                    <TouchableOpacity
                        style={{ marginLeft: 10, marginRight: 40 }}
                        onPress={() => {
                            navigation.goBack();
                        }}>
                        <Ionicons name='arrow-back-outline' size={26} color={'black'} />
                    </TouchableOpacity>
                </View>
            ),

            headerRight: () => (
                <View style={{ marginRight: 16 }}>
                    <TouchableOpacity>
                        <View style={{ height: 40, width: 40, backgroundColor: '#F4F4F4', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <SimpleLineIcons name="pencil" size={20} />
                        </View>
                    </TouchableOpacity>
                </View>
            ),
            headerTitleAlign: "center",
            headerStyle: {
                backgroundColor: 'white',
                height: 100,
            },
            headerTintColor: "black",
        });
    };

    React.useLayoutEffect(() => {
        Header();
    }, []);

    return (
        <>
            <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: 'white' }}>
                <View>
                    <Avatar
                        size={80}
                        rounded
                        source={userImage}
                    >
                        <Avatar.Accessory size={20} style={{ marginLeft: 10, top: 4, backgroundColor: bgColor }} />
                    </Avatar>
                </View>
                <View>
                    <Text style={{ fontWeight: '700', fontSize: 22 }}>Alexander Rhys</Text>
                    <Text style={{ fontWeight: '600', fontSize: 16, color: '#525252' }} >Manager</Text>
                </View>
            </View>
            <View>

            </View>
            <Tab.Navigator
                style={{ marginTop: 0 }}
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: 'white',
                        height: 50,
                        justifyContent: "center",
                    },
                    tabBarActiveTintColor: "black",
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontWeight: "600",
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: bgColor, 
                        height: 3, 
                    },
                }}
            >
                <Tab.Screen name="Personal Details" component={PersonalDetails} />
                <Tab.Screen name="Account Detail" component={AccountDetails} />
            </Tab.Navigator>
        </>
    )
};



export default MyProfile;