// AuthStack.js
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Login/Login";


const AuthScreens = createStackNavigator();

const AuthStack = () => {
    return (
        <AuthScreens.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
        >
            <AuthScreens.Screen name="Login" component={Login} />
        </AuthScreens.Navigator>
    );
};

export default AuthStack;
