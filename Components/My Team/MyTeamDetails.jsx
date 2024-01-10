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

const MyTeamDetails = ({ navigation }) => {
    const [focusedIndex, setFocusedIndex] = useState(0);

    const Header = () => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 10 }}>
                    <TouchableOpacity
                        style={{ marginLeft: 10, marginRight: 40 }}
                        onPress={() => {
                            navigation.goBack();
                        }}>
                        <Ionicons name='arrow-back-outline' size={26} color={'white'} />
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
                backgroundColor: bgColor,
                height: 100,
            },
            headerTintColor: "white",
        });
    };

    React.useLayoutEffect(() => {
        Header();
    }, []);

    const handleCardPress = (index) => {
        setFocusedIndex(index);
    };

    const list = [
        { id: 1, TimeDate: '16:00 PM, 24/09/2023', Activity: 'N1 Notification Added' },
        { id: 2, TimeDate: '16:00 PM, 24/09/2023', Activity: 'N1 Notification Added' },
        { id: 3, TimeDate: '16:00 PM, 24/09/2023', Activity: 'N1 Notification Added' },
        { id: 4, TimeDate: '16:00 PM, 24/09/2023', Activity: 'N1 Notification Added' },
        { id: 5, TimeDate: '16:00 PM, 24/09/2023', Activity: 'N1 Notification Added' },
        { id: 6, TimeDate: '16:00 PM, 24/09/2023', Activity: 'N1 Notification Added' },
        { id: 7, TimeDate: '16:00 PM, 24/09/2023', Activity: 'N1 Notification Added' },
        { id: 8, TimeDate: '16:00 PM, 24/09/2023', Activity: 'N1 Notification Added' },
        { id: 9, TimeDate: '16:00 PM, 24/09/2023', Activity: 'N1 Notification Added' },
        { id: 10, TimeDate: '16:00 PM, 24/09/2023', Activity: 'N1 Notification Added' },
        { id: 11, TimeDate: '16:00 PM, 24/09/2023', Activity: 'N1 Notification Added' },
        { id: 12, TimeDate: '16:00 PM, 24/09/2023', Activity: 'N1 Notification Added' },
        { id: 13, TimeDate: '16:00 PM, 24/09/2023', Activity: 'N1 Notification Added' },
        // ... (other data)
    ];

    return (
        <>
            <View style={{ backgroundColor: bgColor, padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={styles.toptext}>
                        Name
                    </Text>
                    <Text style={styles.toptextheading}>
                        Mohan Yadav
                    </Text>
                </View>
                <View>
                    <Text style={styles.toptext}>
                        No. of Activities
                    </Text>
                    <Text style={styles.toptextheading}>
                        36
                    </Text>
                </View>
                <View>
                    <Text style={styles.toptext}>
                        Last Activity
                    </Text>
                    <Text style={styles.toptextheading}>
                        12/09/2023
                    </Text>
                </View>
            </View>
            <View style={{ backgroundColor: 'white', paddingLeft: 10, paddingRight: 10 }}>
                <SearchBar
                    iconName='search'
                    placeholder="Search here.."
                    rightIcon='filter'
                />
            </View>
            <View style={styles.tableHeader}>
                <View style={{ width: '15%' }}>
                    <Text style={styles.text}>S.No.</Text>
                </View>
                <View style={{ width: '45%' }}>
                    <Text style={styles.text}>Time and Date</Text>
                </View>
                <View style={{ width: '40%' }}>
                    <Text style={styles.text}>Activity</Text>
                </View>
            </View>

            <View >
                <FlatList
                    style={{ height: hp('63%') }}
                    data={list}
                    renderItem={({ item, index }) => (
                        <View style={[styles.cell, { backgroundColor: index % 2 === 0 ? 'white' : '#F8F8F8', }]}>
                            <View style={{ width: '15%' }}>
                                <Text style={{ fontSize: 13 }}>{item.id}</Text>
                            </View>
                            <View style={{ width: '45%' }}>
                                <Text style={{ fontSize: 13 }}>{item.TimeDate}</Text>
                            </View>
                            <View style={{ width: '40%' }}>
                                <Text style={{ fontSize: 13 }}>{item.Activity}</Text>
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
    toptext: {
        color: 'white',
        fontSize: 14,
        fontWeight: '300'
    },
    toptextheading: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500'
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
        width: '100%',
        backgroundColor: '#DCDCDC',
        flexDirection: 'row',
        padding: 20,
    },
    cell: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    },
})
export default MyTeamDetails;