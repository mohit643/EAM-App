import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native"
import { Button, Card } from "react-native-paper";
import { bgColor } from "../../color";
import { Ionicons, Foundation, MaterialCommunityIcons, FontAwesome6, Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import BottomSheet from 'react-native-bottom-sheet';
import { useState } from "react";
import Filter from "../../filter";

const Order = () => {
    const [filteredData, setFilteredData] = useState([]);
    // const filterData = (text) => {
    //     setFilteredData(tasks.filter((item) => item.name.includes(text)));
    //   };

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
        <View style={{}}>
            {/* <Filter/> */}
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
            <View style={{ borderWidth: 1, }} />
            <View style={{ marginBottom: 560 }}>
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ padding: 10, }}>

                            <Card>
                                <Card.Actions style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 170 }}>
                                    <View style={{ backgroundColor: '#B2E7E8', borderRadius: 20 }}>
                                        <View style={{ padding: 4 }} >
                                            <Text style={{ fontSize: 12, fontWeight: '700' }}>
                                                Order no # 6751345
                                            </Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View style={styles.dot}>
                                            <Feather name="arrow-up-right" size={20} color={'#2EA0A1'} />
                                        </View>
                                    </View>
                                </Card.Actions>
                                <Card.Content >
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

                                </Card.Content>
                            </Card>
                        </View>
                    )}
                />
            </View>





        </View>
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

export default Order;