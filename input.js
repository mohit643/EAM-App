import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { placeHolderColor } from "./color";



const Input = ({
    label,
    iconName,
    rightIcon,
    error,
    password,
    onFocus = () => { },
    ...props
}) => {
    return (
        <View style={{ marginBottom: 10 }}>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.inputContainer]}>
                <Icon name={iconName} style={{ color: placeHolderColor, fontSize: 22, marginRight: 10, }} />
                <TextInput {...props} style={{ width: '80%' }} />
                <Icon name={rightIcon} style={{ color: placeHolderColor, fontSize: 22, marginRight: 10, }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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

    }
})


export default Input;