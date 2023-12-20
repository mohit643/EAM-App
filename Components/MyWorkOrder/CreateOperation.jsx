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

const CreateOperation = ({ navigation }) => {
    React.useLayoutEffect(() => {
        TopHeader(navigation);
    }, [navigation]);
    const [open, setOpen] = useState(false);
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
                        <TextInputField label={'Activity'} value={'MYPM-VEH - Vehicles'} />
                    </View>
                    <View>
                        <TextInputField label={'Description'} value={'1-1 High'} />
                    </View>
                    <View>
                        <TextInputField label={'Work Center'} value={'1000 - EAM'} />
                    </View>
                    <View>
                        <TextInputField label={'Control Key'} value={'PM03- Breakdown Maintenance'} />
                    </View>
                    <View>
                        <TextInputField label={'System Condition'} value={'PM03- Breakdown Maintenance'} />
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ flex: 1 }}>
                            <TextInputField label={'Work'} value={'003 Repair'} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.text}>Peoples</Text>
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


                    <View >
                        <TextInputField label={'Duration'} value={'003 Repair'} />
                    </View>

                    <View>
                        <Text style={styles.text}>Basic Start </Text>
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
                    <View >
                        <TextInputField label={'Equipment'} value={''} />
                    </View>
                    <View >
                        <TextInputField label={'Assembly'} value={''} />
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

export default CreateOperation;