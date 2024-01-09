import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native"
import { Button, Card } from "react-native-paper";
import { bgColor, rejectColor } from "../../color";
import { Ionicons, FontAwesome, MaterialCommunityIcons, Fontisto, Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Modal from "react-native-modal";


const Bom = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);

    const list = [
        {
            id: 1, Material: '312', Description: 'Test-Construction Material', Qty: "1EA", Category: 'Construction Material', Valid: '12-10-2023'
        },
        {
            id: 2, Material: '312', Description: 'EAM Support Site', Qty: "1EA", Category: 'Construction Material', Valid: '12-10-2023'
        },
        {
            id: 3, Material: '312', Description: 'EAM Support Site', Qty: "1EA", Category: 'Construction Material', Valid: '12-10-2023'
        },
        {
            id: 4, Material: '312', Description: 'EAM Support Site', Qty: "1EA", Category: 'Construction Material', Valid: '12-10-2023'
        },
        {
            id: 5, Material: '312', Description: 'EAM Support Site', Qty: "1EA", Category: 'Construction Material', Valid: '12-10-2023'
        },


    ]

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
            id: 1, Points: '124', Category: 'Construction Type Material', Description: 'Test-Construction Material', LastReading: '124', Code: '120.00 hours', Date: '25-09-2023',
        },
        {
            id: 2, Points: '124', Category: 'Construction Type Material', Description: 'Test-Construction Material', LastReading: '124', Code: '120.00 hours', Date: '25-09-2023',
        },
        {
            id: 3, Points: '124', Category: 'Construction Type Material', Description: 'Test-Construction Material', LastReading: '124', Code: '120.00 hours', Date: '25-09-2023',
        },
        {
            id: 4, Points: '124', Category: 'Construction Type Material', Description: 'Test-Construction Material', LastReading: '124', Code: '120.00 hours', Date: '25-09-2023',
        },

        // Add more tasks with different statuses
    ];


    return (
        <>
            <View style={{ height: 460 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                            Bom
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
                                    <View style={{ position: 'absolute', top: 5, right: 5 }}>
                                        <TouchableOpacity onPress={handleModalOpen}>
                                            <View style={styles.dot}>
                                                <Feather name="arrow-up-right" size={20} color={'#2EA0A1'} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </Card.Actions>
                                <Card.Content style={{}} >
                                    <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
                                        <View style={{ width: '33%' }}>
                                            <Text style={styles.cardText}>Material</Text>
                                            <Text>{item.Points}</Text>
                                        </View>
                                        <View style={{ width: '67%' }}>
                                            <Text style={styles.cardText}>Description</Text>
                                            <Text>{item.Description}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', }}>


                                        <View style={{ width: '33%' }}>
                                            <Text style={styles.cardText}>Quantity</Text>
                                            <Text>{item.LastReading}</Text>
                                        </View>



                                        <View style={{ width: '33%' }}>
                                            <Text style={styles.cardText}>Category</Text>
                                            <Text>{item.Category}</Text>
                                        </View>


                                        <View style={{ width: '33%' }}>
                                            <Text style={styles.cardText}>Valid From</Text>
                                            <Text>{item.Date}</Text>

                                        </View>

                                    </View>

                                </Card.Content>
                            </Card>
                        </View>
                    )}
                />
                <Modal isVisible={isModalVisible} style={{ backgroundColor: 'white', borderRadius: 20, marginTop: 80, marginBottom: 170 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, top: -10 }}>
                        <View >
                            <Text style={styles.cardText}>
                                Material BOM
                            </Text>
                        </View>
                        <View >
                            <TouchableOpacity onPress={handleModalClose}>
                                <Fontisto name="close" size={20} color={rejectColor} />
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#9E9E9E' }} />
                    <View style={{}}>
                        <View style={[styles.tableHeader, { width: '100%' }]}>
                            <View style={{ width: '20%' }}>
                                <Text style={styles.text}>Material</Text>
                            </View>
                            <View style={{ width: '26%' }}>
                                <Text style={styles.text}>Description</Text>
                            </View>
                            <View style={{ width: '9%' }}>
                                <Text style={styles.text}>Qty.</Text>
                            </View>
                            <View style={{ width: '21%' }}>
                                <Text style={styles.text}>Category</Text>
                            </View>
                            <View style={{ width: '12%' }}>
                                <Text style={styles.text}>Valid</Text>
                            </View>
                        </View>
                        <View style={{ height: hp('50%') }}>
                            <FlatList
                                data={list}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item, index }) => (
                                    <View style={[styles.cell, { backgroundColor: index % 2 === 0 ? 'white' : '#F8F8F8', width: '100%' }]}>
                                        <View style={{ width: '20%' }}>
                                            <Text style={styles.innertext}>{item?.Material}</Text>
                                        </View>
                                        <View style={{ width: '26%' }}>
                                            <Text style={[styles.innertext,]}>{item?.Description}</Text>
                                        </View>
                                        <View style={{ width: '10%' }}>
                                            <Text style={[styles.innertext,]}>{item?.Qty}</Text>
                                        </View>
                                        <View style={{ width: '20%' }}>
                                            <Text style={[styles.innertext,]}>{item?.Category}</Text>
                                        </View>
                                        <View style={{ width: '22%' }}>
                                            <Text style={[styles.innertext,]}>{item?.Valid}</Text>
                                        </View>
                                    </View>
                                )}
                            />

                        </View>
                    </View>
                </Modal>
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
    tableHeader: {
        backgroundColor: '#DCDCDC',
        flexDirection: 'row',
        gap: 5,
        padding: 10,
    },
    cell: {
        backgroundColor: 'white',
        flexDirection: 'row',
        gap: 4,
        padding: 10,

        paddingLeft: 10

    },
    innertext: {
        fontSize: 13,
        fontWeight: '400',
    },
    text: {
        fontSize: 15,
        fontWeight: '700',
    },
})

export default Bom;