import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../HomePage/Home";
import Reports from "../ReportsPage/Reports";
import Settings from "../SettingPage/Settings";
import Sync from "../SyncPage/Sync";
import { bgColor, placeHolderColor } from "../../color";
import { View } from "react-native-animatable";
import DashboardNav from "../StackNavigation/DashboardNav";


const Tab = createBottomTabNavigator();

const AppStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarActiveBackgroundColor: bgColor,
                tabBarStyle: {
                    backgroundColor: '#F1F1F1',
                    position: 'absolute',
                    bottom: 10,
                    marginHorizontal: 10,
                    height: 60,
                    borderRadius: 20,
                    shadowColor: '#000',
                    shadowOpacity: 0.06,
                    shadowOffset: {
                        width: 10,
                        height: 10
                    }

                },

            }}
            initialRouteName="Home"
        >
            <Tab.Screen name='Home' component={DashboardNav}

                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        top: -10,

                    },

                    tabBarIcon: ({ focused, color }) => (
                        <View style={{
                            position: 'absolute',
                        }}>
                            <Ionicons name="home" size={25} color={color} />
                        </View>
                    )
                }}

            />

            <Tab.Screen name='Reports' component={Reports}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        top: -10
                    },
                    tabBarIcon: ({ focused, color }) => (
                        <View style={{
                            position: 'absolute',
                        }}>
                            <MaterialCommunityIcons name="chart-box-outline" size={26} color={color} />
                        </View>
                    )
                }}
            />
            <Tab.Screen name='Settings' component={Settings}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        top: -10
                    },
                    tabBarIcon: ({ focused, color }) => (
                        <View style={{
                            position: 'absolute',
                        }}>
                            <Ionicons name="settings-outline" size={26} color={color} />
                        </View>
                    )
                }}
            />
            <Tab.Screen name='Sync' component={Sync}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        top: -10
                    },
                    tabBarIcon: ({ focused, color }) => (
                        <View style={{
                            position: 'absolute',
                        }}>
                            <Ionicons name="sync" size={26} color={color} />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}
export default AppStack;