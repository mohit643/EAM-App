import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, SafeAreaView } from "react-native"
import MainHeader from "../Header/MainHeader";
import { Card, IconButton } from "react-native-paper";
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, AntDesign, Feather } from "@expo/vector-icons";
import { bgColor } from "../../color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useState } from "react";
import { TopHeader } from "../../TopHeader";
import SearchBar from "../../searchBar";
import { ScrollView } from "react-native-gesture-handler";


const MyAssetes = ({ navigation }) => {
    const Header = () => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 10 }}>
                    <TouchableOpacity
                        style={{ marginLeft: 10, }}
                        onPress={() => {
                            navigation.openDrawer();
                        }}>
                        <Feather name='bar-chart-2' size={26} color={'black'} style={{ transform: [{ rotate: '90deg' }], }} />
                    </TouchableOpacity>
                </View>
            ),

            headerRight: () => (
                <View style={{ marginRight: 16 }}>
                    <TouchableOpacity>
                        <View style={styles.dot}>
                            <IconButton icon="dots-vertical" />
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


    const [focusedIndex, setFocusedIndex] = useState(0);
    const handleCardPress = (index) => {
        setFocusedIndex(index);
    };

    const list = [
        { AssetsName: '100092- Motor Alloy 2P .09KW 56B3 1PH', name: 'Order' },
        { AssetsName: '100092- Motor Alloy 2P .09KW 56B3 1PH', name: 'Order' },
        { AssetsName: '100092- Motor Alloy 2P .09KW 56B3 1PH', name: 'Order' },
        { AssetsName: '100092- Motor Alloy 2P .09KW 56B3 1PH', name: 'Order' },
        { AssetsName: '100092- Motor Alloy 2P .09KW 56B3 1PH', name: 'Order' },
        { AssetsName: '100092- Motor Alloy 2P .09KW 56B3 1PH', name: 'Order' },
        { AssetsName: '100092- Motor Alloy 2P .09KW 56B3 1PH', name: 'Order' },
        { AssetsName: '100092- Motor Alloy 2P .09KW 56B3 1PH', name: 'Order' },
        { AssetsName: '100092- Motor Alloy 2P .09KW 56B3 1PH', name: 'Order' },
        { AssetsName: '100092- Motor Alloy 2P .09KW 56B3 1PH', name: 'Order' },
        { AssetsName: '100092- Motor Alloy 2P .09KW 56B3 1PH', name: 'Order' },
        { AssetsName: '100092- Motor Alloy 2P .09KW 56B3 1PH', name: 'Order' },
        // ... (other data)
    ];

    return (
        <>
            <View style={{ backgroundColor: 'white', paddingLeft: 10, paddingRight: 10 }}>
                <SearchBar
                    iconName='search'
                    placeholder="Search here.."
                    rightIcon='filter'
                />
            </View>

            <View style={styles.tableHeader}>
                <View style={{ width: 40 }}>
                    <Text style={styles.text}>S.No</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>Assets Name</Text>
                </View>
            </View>
            <View >
                <FlatList
                    style={{ height: hp('63%') }}
                    data={list}
                    renderItem={({ item, index }) => (
                        <View style={[styles.cell, { backgroundColor: index % 2 === 0 ? 'white' : '#F8F8F8', }]}>
                            <View style={{ width: 40 }}>
                                <Text>{index + 1}</Text>
                            </View>
                            <View style={{ width: 280 }}>
                                <Text style={{ color: bgColor }}>{item.AssetsName}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity >
                                    <AntDesign name="right" size={16} color="black" />
                                </TouchableOpacity>

                            </View>
                        </View>
                    )}
                />
            </View>


        </>
    )
};
const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: '700',
    },
    dot: {
        height: 40,
        width: 40,
        backgroundColor: '#F4F4F4',
        borderRadius: 50,
        justifyContent: 'center', alignItems: 'center'
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 20,
        paddingBottom: 20
    },
    cell: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 20,
        paddingBottom: 20
    },
})
export default MyAssetes;