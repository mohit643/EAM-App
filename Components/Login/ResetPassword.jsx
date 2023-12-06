import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Checkbox, } from 'react-native-paper';
import { useState } from "react";
import Input from "../../input";
import DynamicButton from "../../button";
import { bgColor, placeHolderColor, textLinkColor } from "../../color";
import logo from '../../assets/logo.png'


const ResetPassword = ({ navigation }) => {

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
                    Reset Password
                </Text>
            </View>
            <View>
                <Input
                    placeholder='Enter email or phone'
                    iconName='email-outline'
                    label="Email or Phone Number" />

                <View>

                    <View style={{ marginTop: 10 }}>
                        <DynamicButton
                            backgroundColor={bgColor}
                            text='Submit'
                        // onPress={() => navigation.navigate('Tabs')}
                        />
                    </View>
                    <View style={[styles.center, { marginTop: 20 }]}>
                        <Text>Did’t received yet,<Text style={{ color: textLinkColor }}>Send Again</Text> </Text>
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
        backgroundColor:'white',
        flex:1
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


export default ResetPassword;