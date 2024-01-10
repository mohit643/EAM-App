import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native"
import { Button, Card } from "react-native-paper";
import { bgColor, rejectColor } from "../../color";
import { Ionicons, AntDesign, MaterialCommunityIcons, Fontisto, Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import Filter from "../../filter";
import Modal from "react-native-modal";
import DynamicButton from "../../button";

const Order = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const [renderSecond, setRenderSecond] = useState(true);
    const [details, setDetails] = useState(true);
    const [details2, setDetails2] = useState(true);
    const [object, setObject] = useState(true);
    const [responsibility, setResponsibility] = useState(true);
    const [notes, setNotes] = useState(true);

    const handleButtonClick = () => {
        // Set renderSecond to true when the button is clicked
        setRenderSecond(!renderSecond);
    };

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
            id: 1, Euipment: 'Circular saw, Hammer and Drill', FunctionalLocation: 'Saket, Delhi', WorkCenter: 'Saket', Type: 'Preventive Maintenance', Priority: '3-3 Medium', startDate: '12/09/2023', endDate: '13/09/2023', Revision: 'Lorem Ipsum is simply', StartTime: '2:00 PM', EndTime: '2:30 PM'
        },
        {
            id: 2, Euipment: 'Circular saw, Hammer and Drill', FunctionalLocation: 'Saket, Delhi', WorkCenter: 'Saket', Type: 'Preventive Maintenance', Priority: '3-3 Medium', startDate: '12/09/2023', endDate: '13/09/2023', Revision: 'Lorem Ipsum is simply', StartTime: '2:00 PM', EndTime: '2:30 PM'
        },
        {
            id: 3, Euipment: 'Circular saw, Hammer and Drill', FunctionalLocation: 'Saket, Delhi', WorkCenter: 'Saket', Type: 'Preventive Maintenance', Priority: '3-3 Medium', startDate: '12/09/2023', endDate: '13/09/2023', Revision: 'Lorem Ipsum is simply', StartTime: '2:00 PM', EndTime: '2:30 PM'
        },
        {
            id: 4, Euipment: 'Circular saw, Hammer and Drill', FunctionalLocation: 'Saket, Delhi', WorkCenter: 'Saket', Type: 'Preventive Maintenance', Priority: '3-3 Medium', startDate: '12/09/2023', endDate: '13/09/2023', Revision: 'Lorem Ipsum is simply', StartTime: '2:00 PM', EndTime: '2:30 PM'
        },

        // Add more tasks with different statuses
    ];

    return (
        <>

            {renderSecond
                ? (
                    <View style={{ height: 460 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <View>
                                <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                    Orders
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
                                            <View style={{ backgroundColor: '#B2E7E8', borderRadius: 20, left: 0, position: 'absolute' }}>
                                                <View style={{ padding: 4 }} >
                                                    <Text style={{ fontSize: 12, fontWeight: '700' }}>
                                                        Order no # 6751345
                                                    </Text>
                                                </View>
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
                                            <TouchableOpacity onPress={handleButtonClick}>


                                                <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                                                    <View style={{ width: 150, }}>
                                                        <Text style={styles.cardText}>Euipment</Text>
                                                        <Text>{item.Euipment}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={styles.cardText}>Functional Location</Text>
                                                        <Text>{item.FunctionalLocation}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                                                    <View style={{ width: 150, }}>
                                                        <Text style={styles.cardText}>Work Center</Text>
                                                        <Text>{item.WorkCenter}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={styles.cardText}>Type</Text>
                                                        <Text>{item.Type}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                                                    <View style={{ width: 150, }}>
                                                        <Text style={styles.cardText}>Priority</Text>
                                                        <Text>{item.Priority}</Text>
                                                    </View>
                                                    <View style={{ width: 85 }}>
                                                        <Text style={styles.cardText}>Start Date</Text>
                                                        <Text>{item.startDate}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={styles.cardText}>End Date</Text>
                                                        <Text>{item.endDate}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', }}>
                                                    <View style={{ width: 150, }}>
                                                        <Text style={styles.cardText}>Revision</Text>
                                                        <Text>{item.Revision}</Text>
                                                    </View>
                                                    <View style={{ width: 85 }}>
                                                        <Text style={styles.cardText}>Start Time</Text>
                                                        <Text>{item.StartTime}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={styles.cardText}>End Time</Text>
                                                        <Text>{item.EndTime}</Text>
                                                    </View>
                                                </View>

                                            </TouchableOpacity>
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
                    </View>
                ) : (
                    <SafeAreaView>
                        <ScrollView style={{ height: 450 }}>
                            <View style={{}}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                        <TouchableOpacity onPress={handleButtonClick}>
                                            <Ionicons name='return-up-back' size={20} color={bgColor} />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                            Details
                                        </Text>
                                    </View>
                                    <View >
                                        <TouchableOpacity onPress={() => setDetails(!details)}>
                                            <AntDesign name='minuscircleo' size={16} color={bgColor} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ borderBottomWidth: 1, }} />
                                {details && (
                                    <View style={{ padding: 10, }}>
                                        <View style={{ paddingBottom: 2 }}>
                                            <Text style={styles.headrText}>
                                                Description
                                            </Text>
                                            <Text style={styles.text}>
                                                Annual service and maintenance
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Order Type
                                                </Text>
                                                <Text style={styles.text}>
                                                    PO3 maintenance
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Activity Type
                                                </Text>
                                                <Text style={styles.text}>
                                                    Annual service and maintenance
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Priority
                                                </Text>
                                                <Text style={styles.text}>
                                                    PO3 maintenance
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    System Condition
                                                </Text>
                                                <Text style={styles.text}>
                                                    Annual service and maintenance
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                )}

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center', paddingTop: 0 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                            Objects
                                        </Text>
                                    </View>
                                    <View >
                                        <TouchableOpacity onPress={() => setObject(!object)}>
                                            <AntDesign name='minuscircleo' size={16} color={bgColor} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ borderBottomWidth: 1, }} />
                                {object && (
                                    <View style={{ padding: 10 }}>

                                        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Location
                                                </Text>
                                                <Text style={styles.text}>
                                                    Delhi
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Equipment
                                                </Text>
                                                <Text style={styles.text}>
                                                    Circular saw, Hammer and Drill
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Assembly
                                                </Text>
                                                <Text style={styles.text}>
                                                    PO3 maintenance
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Add on Field
                                                </Text>
                                                <Text style={styles.text}>
                                                    Annual service and maintenance
                                                </Text>
                                            </View>

                                        </View>
                                        <View style={{}}>
                                            <Text style={styles.headrText}>
                                                Notification
                                            </Text>
                                            <Text style={styles.text}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                            </Text>
                                        </View>
                                    </View>
                                )}

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center', paddingTop: 0 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                            Responsibility
                                        </Text>
                                    </View>
                                    <View >
                                        <TouchableOpacity onPress={() => setResponsibility(!responsibility)}>
                                            <AntDesign name='minuscircleo' size={16} color={bgColor} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ borderBottomWidth: 1, }} />
                                {responsibility && (
                                    <View style={{ padding: 10 }}>

                                        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Planning Plant
                                                </Text>
                                                <Text style={styles.text}>
                                                    EAM Plant
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Planning Group
                                                </Text>
                                                <Text style={styles.text}>
                                                    EAM Group
                                                </Text>
                                            </View>
                                        </View>

                                    </View>
                                )}

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center', paddingTop: 0 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                            Details
                                        </Text>
                                    </View>
                                    <View >
                                        <TouchableOpacity onPress={() => setDetails2(!details2)}>
                                            <AntDesign name='minuscircleo' size={16} color={bgColor} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ borderBottomWidth: 1, }} />
                                {details2 && (
                                    <View style={{ padding: 10 }}>
                                        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Basic Start
                                                </Text>
                                                <Text style={styles.text}>
                                                    22-09-2023
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Basic End
                                                </Text>
                                                <Text style={styles.text}>
                                                    22-09-2023
                                                </Text>
                                            </View>
                                        </View>

                                    </View>
                                )}

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center', paddingTop: 0 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                            Notes
                                        </Text>
                                    </View>
                                    <View >
                                        <TouchableOpacity onPress={() => setNotes(!notes)}>
                                            <AntDesign name='minuscircleo' size={16} color={bgColor} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ borderBottomWidth: 1, }} />
                                {notes && (
                                    <View style={{ padding: 10 }}>
                                        <View style={{ paddingBottom: 2 }}>
                                            <View >
                                                <Text style={styles.headrText}>
                                                    Note
                                                </Text>
                                                <Text style={styles.text}>
                                                    Note
                                                </Text>
                                            </View>

                                        </View>

                                    </View>
                                )}
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                )}
        </>

    )
};

const styles = StyleSheet.create({
    cardText: {
        fontSize: 16,
        fontWeight: '600'
    },
    headrText: {
        fontSize: 16,
        fontWeight: '600'
    },
    text: {
        fontSize: 13,
    },
    dot: {
        height: 30,
        width: 30,
        backgroundColor: '#C6F8F9',
        borderRadius: 50,
        justifyContent: 'center', alignItems: 'center'
    },

})

export default Order;