import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native"
import { Button, Card } from "react-native-paper";
import { bgColor, rejectColor } from "../../color";
import { Ionicons, FontAwesome, MaterialCommunityIcons, Fontisto, Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import BottomSheet from 'react-native-bottom-sheet';
import { useState } from "react";
import Filter from "../../filter";
import Modal from "react-native-modal";
import DynamicButton from "../../button";
import SearchBar from "../../searchBar";

const OperationHistory = () => {

    const tasks = [
        {
            id: 1, Date: '22-10/2023', Order: 'Order 1', FunctionalLocation: 'Operating FL1', Equipment: 'Equipment1', User: 'User123', Status: 'In Progress',
        },
        {
            id: 2, Date: '22-10/2023', Order: 'Order 1', FunctionalLocation: 'Operating FL1', Equipment: 'Equipment1', User: 'User123', Status: 'In Progress',
        },
        {
            id: 3, Date: '22-10/2023', Order: 'Order 1', FunctionalLocation: 'Operating FL1', Equipment: 'Equipment1', User: 'User123', Status: 'In Progress',
        },
        {
            id: 4, Date: '22-10/2023', Order: 'Order 1', FunctionalLocation: 'Operating FL1', Equipment: 'Equipment1', User: 'User123', Status: 'In Progress',
        },
        {
            id: 5, Date: '22-10/2023', Order: 'Order 1', FunctionalLocation: 'Operating FL1', Equipment: 'Equipment1', User: 'User123', Status: 'In Progress',
        },
        {
            id: 6, Date: '22-10/2023', Order: 'Order 1', FunctionalLocation: 'Operating FL1', Equipment: 'Equipment1', User: 'User123', Status: 'In Progress',
        },
        {
            id: 7, Date: '22-10/2023', Order: 'Order 1', FunctionalLocation: 'Operating FL1', Equipment: 'Equipment1', User: 'User123', Status: 'In Progress',
        },

        // Add more tasks with different statuses
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
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                            Operation History
                        </Text>
                    </View>
                    <View >
                        <Text style={{ fontSize: 14, fontWeight: '700' }}>
                            Total : {tasks.length}
                        </Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, }} />
                <FlatList style={{ height: '81%' }}
                    data={tasks}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ padding: 10, }}>
                            <Card style={{ backgroundColor: 'white' }}>
                                <Card.Content style={{}} >
                                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingBottom: 5 }}>
                                        <View style={{ width: '30%' }}>
                                            <Text style={styles.cardText}>Date</Text>
                                            <Text>{item.Date}</Text>
                                        </View>
                                        <View style={{ width: '30%' }}>
                                            <Text style={styles.cardText}>Order</Text>
                                            <Text>{item.Order}</Text>
                                        </View>
                                        <View style={{ width: '30%' }}>
                                            <Text style={styles.cardText}>Functional Location</Text>
                                            <Text>{item.FunctionalLocation}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                        <View style={{ width: '30%' }}>
                                            <Text style={styles.cardText}>Equipment</Text>
                                            <Text>{item.Equipment}</Text>
                                        </View>
                                        <View style={{ width: '30%' }}>
                                            <Text style={styles.cardText}>User</Text>
                                            <Text>{item.User}</Text>
                                        </View>
                                        <View style={{ width: '30%' }}>
                                            <Text style={styles.cardText}>Status</Text>
                                            <Text>{item.Status}</Text>
                                        </View>
                                    </View>
                                </Card.Content>
                            </Card>
                        </View>
                    )}
                />

            </View>
        </>

    )
};

const styles = StyleSheet.create({
    cardText: {
        fontSize: 16,
        fontWeight: '600'
    },
    dot: {
        height: 30,
        width: 30,
        backgroundColor: '#C6F8F9',
        borderRadius: 50,
        justifyContent: 'center', alignItems: 'center'
    },
    container: {
        // flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
})

export default OperationHistory;