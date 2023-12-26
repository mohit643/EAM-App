import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import { Card, TextInput } from "react-native-paper";
import { MaterialCommunityIcons, } from "@expo/vector-icons";
import { bgColor, cancelColor, placeHolderColor, rejectColor } from "../../color";
import React, { useState } from "react";
import { TopHeader } from "../../TopHeader";
import TextInputField from "../../TextInputField";
import DropDownPicker from "react-native-dropdown-picker";
import DynamicButton from "../../button";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const CreateRequisition = ({ navigation }) => {
    React.useLayoutEffect(() => {
        TopHeader(navigation);
    }, [navigation]);
    const [open, setOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [focusedIndex, setFocusedIndex] = useState(0);
    const [value, setValue] = useState(null);
    const [date, setDate] = useState(new Date());
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

    const handleCardPress = (index) => {
        setFocusedIndex(index);
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
            <ScrollView style={styles.scrollView}>
                <View style={{ padding: 10, paddingTop: 0 }}>
                    <View >
                        <TextInputField label={'Plant'} value={'MYPM-VEH - Vehicles'} />
                    </View>
                    <View>
                        <TextInputField label={'Description'} value={'1-1 High'} />
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ flex: 1 }}>
                            <TextInputField label={'Requisitioner'} value={'1-1 High'} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInputField label={'Good Recipient'} value={'1-1 High'} />
                        </View>
                    </View>
                    <View>
                        <TextInputField label={'Material Group'} value={'1000 - EAM'} />
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ flex: 1 }}>
                            <TextInputField label={'Quatity'} value={'003 Repair'} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.text}> </Text>
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
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ flex: 1 }}>
                            <TextInputField label={'Price'} value={'003 Repair'} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.text}> </Text>
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
                    </View>
                    <View style={{ paddingBottom: 10 }}>
                        <Text style={styles.text}>Date </Text>
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
                    <View>
                        <TextInputField label={'Order'} value={'PM03- Breakdown Maintenance'} />
                    </View>
                    <View >
                        <TextInputField label={'Operation'} value={'003 Repair'} />
                    </View>
                    <View >
                        <TextInputField label={'Unloading Point'} value={'003 Repair'} />
                    </View>
                    <View >
                        <TextInputField label={'Tracking Number'} value={'003 Repair'} />
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20, paddingTop: 10 }}>
                        <View style={{ flex: 1 }}>
                            <DynamicButton text={"Cancel"} backgroundColor={cancelColor} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <DynamicButton text={"Save"} backgroundColor={bgColor} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    dot: {
        height: 50,
        width: 50,
        backgroundColor: '#F4F4F4',
        borderRadius: 50,
        justifyContent: 'center', alignItems: 'center'
    },
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

export default CreateRequisition;