import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, TouchableWithoutFeedback } from "react-native"
import { Card, Checkbox, IconButton, ProgressBar } from "react-native-paper";
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto, Feather } from "@expo/vector-icons";
import { bgColor, rejectColor, cancelColor } from "../../color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useState } from "react";
import Modal from "react-native-modal";
import SearchBar from "../../searchBar";
import DynamicButton from "../../button";

const MyTeamDetails = ({ navigation }) => {
    const [focusedIndex, setFocusedIndex] = useState(0);
    const [secondDrawer, setSecondDrawer] = useState(false);
    const [isVisibleSyncData, setModalSyncData] = useState(false);


    const list1 = [
        { id: 1, name: 'Notification Data to Sync', Activity: 0.5, status: false },
        { id: 2, name: 'Ram Kumar', Activity: 1, status: true },
        { id: 3, name: 'Ram Kumar', Activity: 0.5, status: false },
        { id: 4, name: 'Ram Kumar', Activity: 1, status: true },
        { id: 5, name: 'Ram Kumar', Activity: 0.5, status: false },
        { id: 6, name: 'Ram Kumar', Activity: 1, status: true },

    ];
    const [checked, setChecked] = useState('');
    const handlchange = (item) => {
        const itemId = item.id
        console.log("Ss", item)
    }


    const handlOpenStatus = () => {
        setSecondDrawer(false);
        setModalSyncData(true);

    }
    const handleModalClose = () => {
        setModalSyncData(false);
    }

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
                    <TouchableOpacity onPress={() => setSecondDrawer(!secondDrawer)}>
                        <View style={styles.dot}>
                            <IconButton icon="dots-vertical" />
                        </View>
                    </TouchableOpacity>
                    {secondDrawer ?
                        <>
                            <Modal
                                statusBarTranslucent={true}
                                visible={secondDrawer}
                                transparent={true}
                                animationType="fade"
                                onRequestClose={() => setSecondDrawer(false)}
                            >
                                <TouchableWithoutFeedback onPress={() => setSecondDrawer(false)}>
                                    <View style={styles.modalOverlay} />
                                </TouchableWithoutFeedback>

                                <View style={styles.modalContent}>
                                    <Card style={{ alignItems: 'flex-start', padding: 10, backgroundColor: 'white' }}>
                                        <TouchableOpacity onPress={handlOpenStatus}>
                                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', paddingBottom: 5 }}>
                                                <MaterialCommunityIcons name="eye-arrow-right" size={20} color="black" />
                                                <Text>Sync Data</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </Card>
                                </View>
                            </Modal>
                        </> : null}
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
    }, [secondDrawer]);

    const handleCardPress = (index) => {
        setFocusedIndex(index);
    };
    { console.log("sss", secondDrawer); }
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
            {isVisibleSyncData ? (
                <Modal isVisible={isVisibleSyncData} style={{ backgroundColor: 'white', borderRadius: 20, display: 'flex', marginBottom: 100, marginTop: 50 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
                        <View >
                            <Text style={styles.cardText}>
                                Sync Data
                            </Text>
                        </View>
                        <View >
                            <TouchableOpacity onPress={handleModalClose}>
                                <Fontisto name="close" size={20} color={rejectColor} />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: '#9E9E9E' }} />
                    <SafeAreaView style={styles.container}>

                        <View style={{}}>
                            <View style={[styles.tableHeader, { display: 'flex', gap: 10 }]}>
                                <View style={{}}>
                                    <Text style={styles.text}>S.No.</Text>
                                </View>
                                <View style={{}}>
                                    <Text style={styles.text}>Sync</Text>
                                </View>
                            </View>
                            <View style={{}} >
                                <FlatList
                                    style={{ height: hp('50%') }}
                                    data={list1}
                                    renderItem={({ item, index }) => (
                                        <View style={[styles.cell, { backgroundColor: index % 2 === 0 ? 'white' : '#F8F8F8', gap: 10, display: 'flex', justifyContent: 'space-between', display: 'flex' }]}>
                                            <View style={{ width: '10%' }}>
                                                <Text>{item.id}</Text>
                                            </View>
                                            <View style={{ width: '40%' }}>
                                                <Text style={{ fontSize: 13 }}>{item.name}</Text>
                                            </View>
                                            <View style={{ width: '40%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                                <View style={{ width: '40%' }}>
                                                    <ProgressBar style={{ borderRadius: 20, height: 7 }} progress={item.Activity} color={(item.Activity > 0.5 ? bgColor : 'red')} />
                                                </View>
                                                <View style={{ width: '60%' }}>
                                                    <Text style={{ fontSize: 10 }}>{(item.Activity * 100)}% /100%</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )}
                                />

                                <View style={{ padding: 20 }}>
                                    <DynamicButton
                                        backgroundColor={bgColor}
                                        text='Sync in Background'
                                    />
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
                </Modal>
            ) : null}
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
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)', // semi-transparent black
    },
    modalContent: {
        position: 'absolute',
        top: 70,
        right: -10,
        // bottom: 0,
        // width: 160,
        padding: 10,
        // backgroundColor: 'white',
        zIndex: 2, // Ensure it's above the modalOverlay
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
    cardText: {
        fontSize: 16,
        fontWeight: '600'
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