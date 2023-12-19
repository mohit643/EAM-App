import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { placeHolderColor } from "./color";



const TextInputField = ({
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
                <TextInput {...props} style={{ width: '80%' }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontWeight: '500',
        marginVertical: 5,
        fontSize: 15,
        color: '#272727'
    },
    inputContainer: {
        height: 55,
        backgroundColor: "light",
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderWidth: 0.5,
        alignItems: 'center',
        borderRadius: 5,

    }
})


export default TextInputField;