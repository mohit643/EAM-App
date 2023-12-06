import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, TextInput } from "react-native";
import { Ionicons, FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { bgColor, placeHolderColor } from "./color";


const SearchBar = ({
    onPress,
    iconName,
    rightIcon,
    ...props
}) => {
    return (
        <View style={{ flexDirection: "row", }}>
            <View style={{ marginTop:10,marginBottom:10 }}>

                <View style={[styles.inputContainer]}>
                    <Ionicons name={iconName} style={{ color: placeHolderColor, fontSize: 22, marginRight: 10, }} />
                    <TextInput {...props} style={{ width: '80%' }} />
                    <TouchableOpacity
                        onPress={onPress}
                    >
                        <View>
                            <Ionicons name={rightIcon} style={{ color: bgColor, fontSize: 22, marginRight: 10, }} />
                        </View>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({

    inputContainer: {
        height: 55,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderWidth: 0.5,
        alignItems: 'center',
        borderRadius: 10,

    }
});
