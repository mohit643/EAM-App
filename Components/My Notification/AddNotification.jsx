import { View, Text } from "react-native-animatable"
import MainHeader from "../Header/MainHeader";
import Header from "../Header/Header";
import { Card, Switch, TextInput } from 'react-native-paper';
import React, { useState } from "react";
import Input from "../../input";
import { Ionicons, FontAwesome, MaterialCommunityIcons, Fontisto, Feather } from "@expo/vector-icons";
import TextInputField from "../../TextInputField";
import { ScrollView, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import { bgColor, placeHolderColor, rejectColor, textLinkColor } from "../../color";
import DropDownPicker from 'react-native-dropdown-picker';
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DynamicButton from "../../button";
import Modal from "react-native-modal";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import ItemDetails from "./ItemDetails";
import Causes from "./Causes";
import Activities from "./Activities";
import Task from "./Task";
import { TopHeader } from "../../TopHeader";

const AddNotification = ({ navigation }) => {
    React.useLayoutEffect(() => {
        TopHeader(navigation);
    }, [navigation]);

    const [open, setOpen] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const [focusedIndex, setFocusedIndex] = useState(0);
    const [value, setValue] = useState(null);
    const [date, setDate] = useState(new Date());
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [items, setItems] = useState([
        { label: 'MEC - Mechanical', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    const [text, setText] = useState({
        Purpose: "",
        Locationto: "",
        LocationFrom: "",
        StartDate: date,
        EndDate: date,
        StartTime: "",
        EndTime: "",
        People: "",
    });


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

    const CardData = [
        { icons: 'script-text-outline', name: 'Item Detail' },
        { icons: 'account-cog-outline', name: ' Causes' },
        { icons: 'book-search-outline', name: 'Activities' },
        { icons: 'card-account-details-star-outline', name: 'Tasks' },
    ];
    const renderCard = (item, index) => {
        const isFocused = index === focusedIndex;
        const name = item.name
        console.log(';;', item.name);
        return (
            < >
                <View key={index} >
                    <Card style={{ backgroundColor: isFocused ? bgColor : 'white', margin: 5, }}>
                        {/* <Card.Content> */}
                        <TouchableOpacity onPress={() => handleCardPress(index)}>
                            <View style={{ width: 70, height: 70, alignItems: 'center', justifyContent: 'center' }}>
                                <MaterialCommunityIcons name={item.icons} size={30} color={isFocused ? 'white' : '#464646'} />
                                <Text style={{ color: isFocused ? 'white' : '#464646', fontSize: 10 }} >{name}</Text>
                            </View>
                        </TouchableOpacity>
                        {/* </Card.Content> */}
                    </Card>
                </View>
            </>

        );
    };
    const handleCardPress = (index) => {
        setFocusedIndex(index);
    };

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const handleModalOpen = (order) => {
        setSelectedOrder(order);
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        // setText(currentDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode("date");
    };

    const showTimepicker = () => {
        showMode("time");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
            </View>
            <View style={{ padding: 10, paddingBottom: 0, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View >
                        <Text>
                            Breakdown
                        </Text>
                    </View>
                    <View>
                        <Switch value={isSwitchOn} color="#00A3FF" onValueChange={onToggleSwitch} />
                    </View>
                </View>
            </View >
            <ScrollView style={styles.scrollView}>
                <View style={{ padding: 10, paddingTop: 0 }}>
                    <View >
                        <TextInputField label={'Type'} value={'MYPM-VEH - Vehicles'} />
                    </View>
                    <View>
                        <TextInputField label={'Priority'} value={'1-1 High'} />
                    </View>
                    <View>
                        <TextInputField label={'Coding'} value={'1000 - EAM'} />
                    </View>
                    <View>
                        <TextInputField label={'Functional Location'} value={'PM03- Breakdown Maintenance'} />
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ flex: 1 }}>
                            <TextInputField label={'Planner Plant'} value={'003 Repair'} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInputField label={'Equipment'} value={'003 Repair'} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.text}>Assembly</Text>
                            <View>
                                <DropDownPicker
                                    style={{
                                        backgroundColor: 'transparent',
                                        height: 55,
                                        borderWidth: 0.5
                                    }}
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInputField label={'System Effect'} value={'MEC - Mechanical'} />
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: '#2EA0A1', fontSize: 16, fontWeight: '500' }}>
                            Responsibility
                        </Text>
                    </View>
                    <View >
                        <TextInputField label={'Planner Group'} value={'003 Repair'} />
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ flex: 1 }}>
                            <TextInputField label={'Work Center'} value={'MEC - Mechanical'} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInputField label={'Reported by'} value={'MEC - Mechanical'} />
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: '#2EA0A1', fontSize: 16, fontWeight: '500' }}>
                            Dates
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.text}>Malfunction Started</Text>
                            <TextInput
                                showSoftInputOnFocus={false}
                                style={[styles.input, { flex: 1 }]}
                                onChangeText={setText}
                                // label="Date"
                                mode="flat"
                                underlineColor="transparent"
                                value={date.toLocaleDateString()}
                                right={
                                    <TextInput.Icon
                                        onPress={showDatepicker}
                                        icon="calendar-outline"
                                    />
                                }
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.text}>Malfunction End</Text>
                            <TextInput
                                showSoftInputOnFocus={false}
                                style={[styles.input, { flex: 1 }]}
                                onChangeText={setText}
                                // label="Date"
                                mode="flat"
                                underlineColor="transparent"
                                value={date.toLocaleDateString()}
                                right={
                                    <TextInput.Icon
                                        onPress={showDatepicker}
                                        icon="calendar-outline"
                                    />
                                }
                            />
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.text}>Required Start</Text>
                            <TextInput
                                showSoftInputOnFocus={false}
                                style={[styles.input, { flex: 1 }]}
                                onChangeText={setText}
                                // label="Date"
                                mode="flat"
                                underlineColor="transparent"
                                value={date.toLocaleDateString()}
                                right={
                                    <TextInput.Icon
                                        onPress={showDatepicker}
                                        icon="calendar-outline"
                                    />
                                }
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.text}>Required End</Text>
                            <TextInput
                                showSoftInputOnFocus={false}
                                style={[styles.input, { flex: 1 }]}
                                onChangeText={setText}
                                // label="Date"
                                mode="flat"
                                underlineColor="transparent"
                                value={date.toLocaleDateString()}
                                right={
                                    <TextInput.Icon
                                        onPress={showDatepicker}
                                        icon="calendar-outline"
                                    />
                                }
                            />
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.text}>Malfunction Start Time   </Text>
                            <TextInput
                                showSoftInputOnFocus={false}
                                style={[styles.input, { flex: 1 }]}
                                onChangeText={setText}
                                // label="Date"
                                mode="flat"
                                underlineColor="transparent"
                                value={date.toLocaleDateString()}
                                right={
                                    <TextInput.Icon
                                        onPress={showDatepicker}
                                        icon="clock-outline"
                                    />
                                }
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.text}>Malfunction End Time</Text>
                            <TextInput
                                showSoftInputOnFocus={false}
                                style={[styles.input, { flex: 1 }]}
                                onChangeText={(e) => setText({ ...text, EndTime: e })}
                                // label="Date"
                                mode="flat"
                                underlineColor="transparent"
                                value={date.toLocaleTimeString()}
                                right={
                                    <TextInput.Icon
                                        onPress={showDatepicker}
                                        icon="clock-outline"
                                    />
                                }
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20, paddingTop: 10 }}>
                        <View style={{ flex: 1 }}>
                            <DynamicButton text={"Cancel"} backgroundColor={rejectColor} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <DynamicButton text={"Save & Next"} backgroundColor={bgColor} onPress={handleModalOpen} />
                        </View>
                    </View>


                    <Modal isVisible={isModalVisible} style={{ backgroundColor: 'white', borderRadius: 20, margin: 20, }}>
                        <SafeAreaView style={styles.container}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 10 }}>
                                <View >
                                    <TouchableOpacity onPress={handleModalClose}>
                                        <Fontisto name="close" size={20} color={rejectColor} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingTop: 0, fontSize: 18, fontWeight: '' }}>
                                <Text style={{ fontSize: 18, fontWeight: '600', }}>
                                    Item001
                                </Text>
                                <Text style={{ fontSize: 18, fontWeight: '600', color: '#33AEB0' }}>
                                    EAMK7812
                                </Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, borderColor: '#9E9E9E' }} />
                            <View>
                                <SwiperFlatList
                                    style={{}}
                                    data={CardData}
                                    renderItem={({ item, index }) => renderCard(item, index)}
                                />

                            </View>

                            {
                                focusedIndex === 0 ? <ItemDetails /> :
                                    focusedIndex === 1 ? <Causes /> :
                                        focusedIndex === 2 ? <Activities /> :
                                            focusedIndex === 3 ? <Task /> : null
                            }


                        </SafeAreaView>
                    </Modal>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({

    dropdown: {
        borderWidth: 0.5,
        borderRadius: 4,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 4,
    },
    dropdownPlaceholder: {
        fontSize: 13,
        color: placeHolderColor,
        fontWeight: "400",
    },
    text: {
        fontWeight: '500',
        marginVertical: 5,
        fontSize: 15,
        color: '#272727'
    },
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        // backgroundColor: 'pink',
        // marginHorizontal: 20,
    },
    input: {
        borderWidth: 0.5,
        borderRadius: 4,
        backgroundColor: "transparent",
    },
});

export default AddNotification;