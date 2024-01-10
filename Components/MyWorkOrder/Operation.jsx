import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native"
import { Button, Card } from "react-native-paper";
import { bgColor, rejectColor } from "../../color";
import { Ionicons, AntDesign, MaterialCommunityIcons, Fontisto, Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

import { useState } from "react";
import Filter from "../../filter";
import Modal from "react-native-modal";
import DynamicButton from "../../button";

const Operation = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const [renderSecond, setRenderSecond] = useState(true);
    const [details, setDetails] = useState(true);
    const [dates, setDates] = useState(true);
    const [status, setStatus] = useState(true);

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
        { id: 6, status: "Completed" },


        // Add more data as needed
    ];

    const tasks = [
        {
            id: 1, Activity: 'Undertable functional dem0dotration', ActivityType: 'Saket', WorkCenter: 'Saket', People: '2', Planned: '1.5 H', startDate: '12/09/2023', endDate: '13/09/2023', Duration: '2 hours', StartTime: '2:00 PM', EndTime: '2:30 PM', Actual: '0 H', Remaining: '0,5 H'
        },
        {
            id: 2, Activity: 'Undertable functional dem0dotration', ActivityType: 'Saket', WorkCenter: 'Saket', People: '2', Planned: '1.5 H', startDate: '12/09/2023', endDate: '13/09/2023', Duration: '2 hours', StartTime: '2:00 PM', EndTime: '2:30 PM', Actual: '0 H', Remaining: '0,5 H'
        },
        {
            id: 3, Activity: 'Undertable functional dem0dotration', ActivityType: 'Saket', WorkCenter: 'Saket', People: '2', Planned: '1.5 H', startDate: '12/09/2023', endDate: '13/09/2023', Duration: '2 hours', StartTime: '2:00 PM', EndTime: '2:30 PM', Actual: '0 H', Remaining: '0,5 H'
        },
        {
            id: 4, Activity: 'Undertable functional dem0dotration', ActivityType: 'Saket', WorkCenter: 'Saket', People: '2', Planned: '1.5 H', startDate: '12/09/2023', endDate: '13/09/2023', Duration: '2 hours', StartTime: '2:00 PM', EndTime: '2:30 PM', Actual: '0 H', Remaining: '0,5 H'
        },

        // Add more tasks with different statuses
    ];


    return (
        <>
            {renderSecond ? (
                <View style={{ height: 460 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                Operations
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
                                    <Card.Actions>
                                        <View style={{}}>
                                            <TouchableOpacity
                                            // onPress={handleModalOpen}
                                            >
                                                <View style={styles.dot}>
                                                    <Feather name="arrow-up-right" size={20} color={'#2EA0A1'} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </Card.Actions>
                                    <Card.Content style={{}} >
                                        <TouchableOpacity onPress={() => setRenderSecond(!renderSecond)}>
                                            <View style={{ flexDirection: 'row', paddingBottom: 10, marginTop: -10 }}>

                                                <View style={{ width: 120, }}>
                                                    <Text style={styles.cardText}>Activity</Text>
                                                    <Text>{item.Activity}</Text>
                                                </View>


                                                <View style={{ width: 100, }}>
                                                    <Text style={styles.cardText}>Start</Text>
                                                    <Text>{item.startDate}</Text>
                                                </View>


                                                <View style={{ width: 100, }}>
                                                    <Text style={styles.cardText}>End</Text>
                                                    <Text>{item.endDate}</Text>

                                                </View>

                                            </View>
                                            <View style={{ flexDirection: 'row', paddingBottom: 10 }}>

                                                <View style={{ width: 120, }}>
                                                    <Text style={styles.cardText}>Activity Type</Text>
                                                    <Text>{item.ActivityType}</Text>
                                                </View>


                                                <View style={{ width: 100, }}>
                                                    <Text style={styles.cardText}>Work Center</Text>
                                                    <Text>{item.WorkCenter}</Text>
                                                </View>


                                                <View style={{ width: 100, }}>
                                                    <Text style={styles.cardText}>People</Text>
                                                    <Text>{item.People}</Text>

                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', paddingBottom: 10 }}>

                                                <View style={{ width: 120, }}>
                                                    <Text style={styles.cardText}>Planned</Text>
                                                    <Text>{item.Planned}</Text>
                                                </View>


                                                <View style={{ width: 100, }}>
                                                    <Text style={styles.cardText}>Duration</Text>
                                                    <Text>{item.Duration}</Text>
                                                </View>


                                                <View style={{ width: 100, }}>
                                                    <Text style={styles.cardText}>Actual</Text>
                                                    <Text>{item.Actual}</Text>

                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', }}>

                                                <View style={{ width: 120, }}>
                                                    <Text style={styles.cardText}>Remaining</Text>
                                                    <Text>{item.Remaining}</Text>
                                                </View>


                                            </View>
                                        </TouchableOpacity>
                                    </Card.Content>
                                </Card>
                            </View>
                        )}
                    />
                    <Modal isVisible={isModalVisible} style={{ backgroundColor: 'white', borderRadius: 20, margin: 20, marginTop: 80, marginBottom: 170 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <View >
                                <Text style={styles.cardText}>
                                    Operation Status
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
                                    <TouchableOpacity onPress={() => setRenderSecond(!renderSecond)}>
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
                                            Change themostat
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.headrText}>
                                                Work Center
                                            </Text>
                                            <Text style={styles.text}>
                                                1000-EAM
                                            </Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.headrText}>
                                                Planned Work
                                            </Text>
                                            <Text style={styles.text}>
                                                PM01
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.headrText}>
                                                Duration
                                            </Text>
                                            <Text style={styles.text}>
                                                0.5 hours
                                            </Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.headrText}>
                                                Actual Work
                                            </Text>
                                            <Text style={styles.text}>
                                                Change themostat
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.headrText}>
                                                Work Remaining
                                            </Text>
                                            <Text style={styles.text}>
                                                Change themostat
                                            </Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.headrText}>
                                                Control Key
                                            </Text>
                                            <Text style={styles.text}>
                                                PM01- Plant Maintenance-Internal
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.headrText}>
                                                System Condition
                                            </Text>
                                            <Text style={styles.text}>
                                                0-Not in operation
                                            </Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.headrText}>
                                                Functional Location
                                            </Text>
                                            <Text style={styles.text}>
                                                Delhi
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.headrText}>
                                                Assembly
                                            </Text>
                                            <Text style={styles.text}>
                                                System work
                                            </Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.headrText}>
                                                Inventory
                                            </Text>
                                            <Text style={styles.text}>
                                                Themostat
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

                                    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.headrText}>
                                                Earlier Start
                                            </Text>
                                            <Text style={styles.text}>
                                                7:00PM, 22 Sept 2023
                                            </Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.headrText}>
                                                Earlier End
                                            </Text>
                                            <Text style={styles.text}>
                                                7:30PM, 22 Sept 2023
                                            </Text>
                                        </View>
                                    </View>

                                </View>
                            )}

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center', paddingTop: 0 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                        Status
                                    </Text>
                                </View>
                                <View >
                                    <TouchableOpacity onPress={() => setStatus(!status)}>
                                        <AntDesign name='minuscircleo' size={16} color={bgColor} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ borderBottomWidth: 1, }} />
                            {status && (
                                <View style={{ padding: 10 }}>

                                    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.headrText}>
                                                System Status
                                            </Text>
                                            <Text style={[styles.text, { color: '#419C32' }]}>
                                                Open
                                            </Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.headrText}>
                                                User Status
                                            </Text>
                                            <Text style={[styles.text, { color: rejectColor }]}>
                                                Closed
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
    container: {
        // flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
})

export default Operation;