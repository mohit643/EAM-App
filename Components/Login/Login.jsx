import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Checkbox, } from 'react-native-paper';
import { useContext, useState } from "react";
import Input from "../../input";
import DynamicButton from "../../button";
import { bgColor, placeHolderColor, textLinkColor } from "../../color";
import logo from '../../assets/logo.png'
import { AuthContext } from "../Utils/AuthContext";


const Login = () => {
    const { login } = useContext(AuthContext);
    const [checked, setChecked] = useState(false);
    const [passwordVisibility, setPasswordVisibility] = useState(true);



    const togglePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);

    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={logo} />
            </View>
            <View style={{ paddingTop: 20, paddingBottom: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '600' }}>
                    Login to your account
                </Text>
            </View>
            <View>
                <Input
                    placeholder='Enter full name'
                    iconName='account'
                    label="Username" />
                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.label}>Password</Text>
                    <View style={[styles.inputContainer]}>
                        <Icon name='email-outline' style={{ color: placeHolderColor, fontSize: 22, marginRight: 10, }} />
                        <TextInput style={{ width: '80%', }} placeholder="Enter email or phone" />
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Icon name={passwordVisibility ? 'eye' : 'eye-off'} style={{ color: placeHolderColor, fontSize: 22, marginRight: 10, }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center' }}>
                            <Checkbox
                                color={textLinkColor}
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text>Remember me</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                                <Text style={{ textAlign: 'right', color: textLinkColor, right: 0, fontWeight: '500' }}>Forgot Password ?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <DynamicButton
                            backgroundColor={bgColor}
                            text='Log In'
                            onPress={() => login()}
                        />
                    </View>
                </View>
            </View>
            <View  >
            </View>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    bgcolor: {
        backgroundColor: bgColor,
        flex: 1,
    },
    label: {
        marginVertical: 5,
        fontSize: 15,
        color: '#5F5F5F',
        fontWeight: '400'
    },
    inputContainer: {
        height: 55,
        backgroundColor: "light",
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderWidth: 0.5,
        alignItems: 'center',
        borderRadius: 10,

    },
    container: {
        padding: 20,
        backgroundColor: 'white',
        flex: 1
    },
    center: {
        justifyContent: 'center',
        alignItems: "center"
    },
    icon: {
        height: 150,
        width: "100%",
        position: "absolute",

    },
    circle: {
        height: 150,
        width: 150,
        borderRadius: 150,
        backgroundColor: 'transparent',
        marginTop: -75
    },
    // input: {
    //     // height: 40,
    //     // margin: 12,
    //     // borderWidth: 1,
    //     // padding: 10,
    //     marginVertical: 20,
    //     marginHorizontal: 40
    // },


})


export default Login;