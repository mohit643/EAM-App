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

const Componenets = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);


    const handleModalOpen = (order) => {
        setSelectedOrder(order);
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };

    const onLongPress = (itemId) => {
        // Check if the item is already selected
        const isSelected = selectedItems.includes(itemId);

        // Toggle the selection status
        if (isSelected) {
            setSelectedItems(selectedItems.filter((selectedId) => selectedId !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    const data = [
        { id: 1, status: "In Transit" },
        { id: 2, status: "In Progress" },
        { id: 3, status: "Paused" },
        { id: 4, status: "Awaiting Parts" },
        { id: 5, status: "Return to Planner" },
        { id: 6, status: "My Work Complete" },
        { id: 7, status: "Order Complete" },
        { id: 8, status: "Teco Order" },

        // Add more data as needed
    ];

    const tasks = [
        {
            id: 1, Euipment: '40004694', FunctionalLocation: 'Filter, Primary. Air Con Unit', WorkCenter: '3EA', Type: '22 Sept 2023, Mon', Priority: '67', startDate: '13EA', endDate: '3EA', Revision: 'Lorem Ipsum is simply', StartTime: '2:00 PM', EndTime: '2:30 PM'
        },
        {
            id: 2, Euipment: '40004694', FunctionalLocation: 'Filter, Primary. Air Con Unit', WorkCenter: '3EA', Type: '22 Sept 2023, Mon', Priority: '67', startDate: '13EA', endDate: '3EA', Revision: 'Lorem Ipsum is simply', StartTime: '2:00 PM', EndTime: '2:30 PM'
        },

        {
            id: 3, Euipment: '40004694', FunctionalLocation: 'Filter, Primary. Air Con Unit', WorkCenter: '3EA', Type: '22 Sept 2023, Mon', Priority: '67', startDate: '13EA', endDate: '3EA', Revision: 'Lorem Ipsum is simply', StartTime: '2:00 PM', EndTime: '2:30 PM'
        },
        {
            id: 4, Euipment: '40004694', FunctionalLocation: 'Filter, Primary. Air Con Unit', WorkCenter: '3EA', Type: '22 Sept 2023, Mon', Priority: '67', startDate: '13EA', endDate: '3EA', Revision: 'Lorem Ipsum is simply', StartTime: '2:00 PM', EndTime: '2:30 PM'
        },


        // Add more tasks with different statuses
    ];


    return (
        <>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>
                        Components
                    </Text>
                </View>
                <View >
                    <Text style={{ fontSize: 14, fontWeight: '700' }}>
                        Total Orders : {tasks.length}
                    </Text>
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, }} />
            <FlatList style={{ height: 480 }}
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ padding: 10, }}>
                        <Card>
                            <Card.Actions style={{}}>
                                <View style={{ left: 0, position: 'absolute' }}>
                                    <Text style={{ fontSize: 12, fontWeight: '700', color: '#218789' }}>
                                        Air Conditioning Inspection
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={handleModalOpen}>
                                        <View style={styles.dot}>
                                            <Feather name="arrow-up-right" size={20} color={'#2EA0A1'} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </Card.Actions>
                            <Card.Content >
                                <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                                    <View style={{ width: 110, }}>
                                        <Text style={styles.cardText}>Category</Text>
                                        <Text>{item.Euipment}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.cardText}>Description</Text>
                                        <Text>{item.FunctionalLocation}</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                                    <View style={{ width: 110, }}>
                                        <Text style={styles.cardText}>Material</Text>
                                        <Text>{item.Priority}</Text>
                                    </View>
                                    <View style={{ width: 110 }}>
                                        <Text style={styles.cardText}>Required Qty.</Text>
                                        <Text>{item.startDate}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.cardText}>Reqest Qty.</Text>
                                        <Text>{item.endDate}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                                    <View style={{ width: 110, }}>
                                        <Text style={styles.cardText}>Division Qty.</Text>
                                        <Text>{item.WorkCenter}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.cardText}>Required</Text>
                                        <Text>{item.Type}</Text>
                                    </View>
                                </View>


                            </Card.Content>
                        </Card>
                    </View>
                )}
            />

            <Modal isVisible={isModalVisible} style={{ backgroundColor: 'white', borderRadius: 20, margin: 20, marginTop: 80, marginBottom: 80 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <View >
                        <Text style={styles.cardText}>
                            0035671
                        </Text>
                        <Text>
                            Annual Service and Inspection
                        </Text>
                        <Text style={{ fontSize: 16 }}>
                            Recevied in EAM
                        </Text>
                    </View>
                    <View >
                        <TouchableOpacity onPress={handleModalClose}>
                            <Fontisto name="close" size={20} color={rejectColor} />
                        </TouchableOpacity>

                    </View>

                </View>

                <View style={{ borderBottomWidth: 1, borderColor: '#9E9E9E' }} />

                <FlatList
                    style={{ width: "100%", }}
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onLongPress={() => onLongPress(item.id)}>
                            <View style={{ borderWidth: 1, padding: 10, margin: 10, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', borderColor: selectedItems.includes(item.id) == '' ? '#DEDBDD' : bgColor }}>
                                <Text>
                                    {item.status}
                                </Text>
                                {selectedItems.includes(item.id) && (
                                    <MaterialCommunityIcons name="check-circle-outline" size={20} color={bgColor} />
                                )}
                            </View>
                        </TouchableOpacity>
                    )}
                />

                <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between', gap: 20 }}>
                    <View style={{ flex: 1 }}>
                        <DynamicButton text={'Cancel'} backgroundColor={rejectColor} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <DynamicButton text={'Apply'} backgroundColor={bgColor} />
                    </View>


                </View>



            </Modal>
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

export default Componenets;