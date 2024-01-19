import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native"
import { Button, Card } from "react-native-paper";
import { bgColor, rejectColor } from "../../color";
import { Ionicons, AntDesign, MaterialCommunityIcons, Fontisto, Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import Modal from "react-native-modal";
import DynamicButton from "../../button";

const General = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const [renderSecond, setRenderSecond] = useState(true);
    const [details, setDetails] = useState(true);
    const [dates, setDates] = useState(true);
    const [brief, setBrief] = useState(true);
    const [object, setObject] = useState(true);
    const [responsibilities, serResponsibilities] = useState(true);


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
        { id: 10, status: "Teco Order" },

        // Add more data as needed
    ];

    const tasks = [
        {
            id: 1, Euipment: 'DHEJ234', FunctionalLocation: '00022 Parts Repair', WorkCenter: 'Repair', Type: 'Demostration', Priority: 'Functional repair', startDate: '1-1 Very High', endDate: '004 EAM', Revision: 'Lorem Ipsum is simply', StartTime: '2:00 PM', EndTime: '2:30 PM'
        },
        {
            id: 2, Euipment: 'DHEJ234', FunctionalLocation: '00022 Parts Repair', WorkCenter: 'Repair', Type: 'Demostration', Priority: 'Functional repair', startDate: '1-1 Very High', endDate: '004 EAM', Revision: 'Lorem Ipsum is simply', StartTime: '2:00 PM', EndTime: '2:30 PM'
        },
        {
            id: 3, Euipment: 'DHEJ234', FunctionalLocation: '00022 Parts Repair', WorkCenter: 'Repair', Type: 'Demostration', Priority: 'Functional repair', startDate: '1-1 Very High', endDate: '004 EAM', Revision: 'Lorem Ipsum is simply', StartTime: '2:00 PM', EndTime: '2:30 PM'
        },
        {
            id: 4, Euipment: 'DHEJ234', FunctionalLocation: '00022 Parts Repair', WorkCenter: 'Repair', Type: 'Demostration', Priority: 'Functional repair', startDate: '1-1 Very High', endDate: '004 EAM', Revision: 'Lorem Ipsum is simply', StartTime: '2:00 PM', EndTime: '2:30 PM'
        },

        // Add more tasks with different statuses
    ];

    return (
        <>

            {renderSecond
                ? (
                    <View style={{ height: 450 }}>

                        <View style={{ borderBottomWidth: 1, }} />
                        <FlatList style={{ height: 480 }}
                            data={tasks}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <View style={{ padding: 10, }}>
                                    <Card>
                                        <Card.Actions style={{}}>
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
                                                <View style={{ flexDirection: 'row', paddingBottom: 10, marginTop: -20 }}>
                                                    <View style={{ width: 120, }}>
                                                        <Text style={styles.cardText}>Notification Id</Text>
                                                        <Text>{item.Euipment}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={styles.cardText}>Description</Text>
                                                        <Text>{item.FunctionalLocation}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                                                    <View style={{ width: 120, }}>
                                                        <Text style={styles.cardText}>Type</Text>
                                                        <Text>{item.Priority}</Text>
                                                    </View>
                                                    <View style={{ width: 100 }}>
                                                        <Text style={styles.cardText}>Priority</Text>
                                                        <Text>{item.startDate}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={styles.cardText}>Coding</Text>
                                                        <Text>{item.endDate}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                                                    <View style={{ width: 120, }}>
                                                        <Text style={styles.cardText}>Functional</Text>
                                                        <Text>{item.WorkCenter}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={styles.cardText}>Equipment</Text>
                                                        <Text>{item.Type}</Text>
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
                        <ScrollView style={{ height: 440 }}>
                            <View style={{}}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                        <TouchableOpacity onPress={handleButtonClick}>
                                            <Ionicons name='return-up-back' size={20} color={bgColor} />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                            Brief
                                        </Text>
                                    </View>
                                    <View >
                                        <TouchableOpacity onPress={() => setBrief(!brief)}>
                                            <AntDesign name='minuscircleo' size={16} color={bgColor} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ borderBottomWidth: 1, }} />
                                {brief && (
                                    <View style={{ padding: 10, }}>
                                        <View style={{ paddingBottom: 2 }}>
                                            <Text style={styles.headrText}>
                                                Description
                                            </Text>
                                            <Text style={styles.text}>
                                                Undertaken functional demonstration
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Type
                                                </Text>
                                                <Text style={styles.text}>
                                                    M1 Maintenance request
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Priority
                                                </Text>
                                                <Text style={styles.text}>
                                                    1-1 Very High
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Coding
                                                </Text>
                                                <Text style={styles.text}>
                                                    MYPM0-Observation
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    System Effect
                                                </Text>
                                                <Text style={styles.text}>
                                                    Hault
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
                                                Undertaken functional demonstration
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Type
                                                </Text>
                                                <Text style={styles.text}>
                                                    M1 Maintenance request
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Priority
                                                </Text>
                                                <Text style={styles.text}>
                                                    1-1 Very High
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Coding
                                                </Text>
                                                <Text style={styles.text}>
                                                    MYPM0-Observation
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    System Effect
                                                </Text>
                                                <Text style={styles.text}>
                                                    Hault
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                )}


                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center', paddingTop: 0 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>

                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                            Object
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
                                    <View style={{ padding: 10, }}>
                                        <View style={{ paddingBottom: 2 }}>
                                            <Text style={styles.headrText}>
                                                Functional Location
                                            </Text>
                                            <Text style={styles.text}>
                                                Undertaken functional demonstration
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Equipment
                                                </Text>
                                                <Text style={styles.text}>
                                                    M1 Maintenance request
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Assembly
                                                </Text>
                                                <Text style={styles.text}>
                                                    1-1 Very High
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Sort Field
                                                </Text>
                                                <Text style={styles.text}>
                                                    MYPM0-Observation
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Assigned Order
                                                </Text>
                                                <Text style={styles.text}>
                                                    Hault
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                )}


                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center', paddingTop: 0 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                            Responsibilities
                                        </Text>
                                    </View>
                                    <View >
                                        <TouchableOpacity onPress={() => serResponsibilities(!responsibilities)}>
                                            <AntDesign name='minuscircleo' size={16} color={bgColor} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ borderBottomWidth: 1, }} />
                                {responsibilities && (
                                    <View style={{ padding: 10 }}>

                                        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Planner Group
                                                </Text>
                                                <Text style={styles.text}>
                                                    EAM Plant
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Planner Plant
                                                </Text>
                                                <Text style={styles.text}>
                                                    EAM Group
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Work Centre
                                                </Text>
                                                <Text style={styles.text}>
                                                    EAM Plant
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Reported by
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
                                            Dates
                                        </Text>
                                    </View>
                                    <View >
                                        <TouchableOpacity onPress={() => setDates(!dates)}>
                                            <AntDesign name='minuscircleo' size={16} color={bgColor} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ borderBottomWidth: 1, }} />
                                {dates && (
                                    <View style={{ padding: 10 }}>
                                        <View style={{ flexDirection: 'row', paddingBottom: 2, gap: 10 }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Malfunction Start Time
                                                </Text>
                                                <Text style={styles.text}>
                                                    22-09-2023
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Malfunction End Time
                                                </Text>
                                                <Text style={styles.text}>
                                                    22-09-2023
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', paddingBottom: 2, gap: 10 }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Malfunction Start
                                                </Text>
                                                <Text style={styles.text}>
                                                    22-09-2023
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Malfunction End
                                                </Text>
                                                <Text style={styles.text}>
                                                    22-09-2023
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', paddingBottom: 2, gap: 10 }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Requested Start
                                                </Text>
                                                <Text style={styles.text}>
                                                    22-09-2023
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Requested End
                                                </Text>
                                                <Text style={styles.text}>
                                                    22-09-2023
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ paddingBottom: 2 }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.headrText}>
                                                    Downtime Duratoin
                                                </Text>
                                                <Text style={styles.text}>
                                                    22-09-2023
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

export default General;