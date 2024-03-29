import React, { useState, useRef } from "react";
import { Text, TouchableOpacity, StyleSheet, View, TextInput, Image, DrawerLayoutAndroid } from "react-native";
import { Ionicons, FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native';
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { bgColor } from "../../color";
import { IconButton } from "react-native-paper";
import SearchBar from "../../searchBar";


const MainHeader = ({
    onPress,
    text,
    iconName,
    rightIcon,
    leftImage,
    rightImage,
    iconColor,
    ...props
}) => {
    const drawer = useRef(null);
    const openDrawer = () => {
        drawer.current.openDrawer();
    };






    return (
        <View style={styles.header}>
            <DrawerLayoutAndroid
                ref={drawer}
                drawerWidth={200}
                drawerPosition="left"
                renderNavigationView={() => (
                    <>

                        <View style={styles.drawerContent}>
                            {/* Add your drawer content here */}
                            <Text>Drawer Section</Text>
                            {/* Close drawer button */}
                            <IconButton
                                icon="close"
                                onPress={() => drawer.current.closeDrawer()}
                                color="#000"
                                size={30}
                            />
                        </View>

                    </>
                )}
                // style={{ flex: 1 }}
            >

                <View style={styles.headerContent}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={openDrawer}>
                            <View>
                                <Feather name='bar-chart-2' size={26} color={iconColor} style={{ transform: [{ rotate: '90deg' }], }} />
                            </View>
                        </TouchableOpacity>

                        <View>
                            <Text style={{ fontWeight: '700', fontSize: 20, color: '#383636' }}>{text}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <TouchableOpacity>
                                <View style={styles.dot}>
                                    <IconButton icon="dots-vertical" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <SearchBar
                        iconName='search'
                        placeholder="Search here.."
                        rightIcon='filter'
                    />
                </View>
            </DrawerLayoutAndroid>
        </View>
    )
};
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 170,

    },
    headerContent: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
    },
    dot: {
        height: 40,
        width: 40,
        backgroundColor: '#F4F4F4',
        borderRadius: 50,
        justifyContent: 'center', alignItems: 'center'
    },
    drawerContent: {
        // zIndex: 999,
        // height:700,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
})


export default MainHeader;