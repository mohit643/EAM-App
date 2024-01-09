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

const MyTeam = ({ navigation }) => {
    const [focusedIndex, setFocusedIndex] = useState(0);

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

    const handleCardPress = (index) => {
        setFocusedIndex(index);
    };

    const list = [
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
        { Name: 'Ram Kumar', LastSync: '16:00 PM, 24/09/2023' },
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
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>Name</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>Last Sync</Text>
                </View>
                <View style={{ flex: 0 }}>
                    <Text style={styles.text}>Activity</Text>
                </View>
            </View>

            <View >
                <FlatList
                    style={{ height: hp('63%') }}
                    data={list}
                    renderItem={({ item, index }) => (
                        <View style={[styles.cell, { backgroundColor: index % 2 === 0 ? 'white' : '#F8F8F8', }]}>
                            <View style={{ flex: 1 }}>
                                <Text>{item.Name}</Text>
                            </View>
                            <View style={{ flex: 2 }}>
                                <Text style={{ color: bgColor }}>{item.LastSync}</Text>
                            </View>
                            <View style={{ flex: 0 }}>
                                <TouchableOpacity >
                                    <View style={styles.Activitydot}>
                                        <MaterialCommunityIcons name="file-document-multiple" color={'white'} />
                                    </View>
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
    Activitydot: {
        height: 30,
        width: 30,
        backgroundColor: bgColor,
        borderRadius: 50,
        justifyContent: 'center', alignItems: 'center'
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between'
    },
    cell: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
})
export default MyTeam;