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

const MPointEntry = ({ navigation }) => {
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
                    <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                        <Text style={styles.Mainheading}>Reading</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ flex: 2 }}>
                            <TextInputField label={'Reading'} value={'003 Repair'} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.text}> </Text>
                            <View >
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

                    <View>
                        <TextInputField label={'Test'} value={'1-1 High'} />
                    </View>

                    <View style={{ flexDirection: 'row', gap: 20, }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.text}>Read on </Text>
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
                            <Text style={styles.text}></Text>
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
                                        icon="clock"
                                    />
                                }
                            />
                        </View>

                    </View>
                    <View style={{}}>
                        <Text style={styles.text}>Read By</Text>
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
                    <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                        <Text style={styles.Mainheading}>Point Information</Text>
                    </View>
                    <View>
                        <TextInputField label={'Position'} value={'1000 - EAM'} />
                    </View>
                    <View>
                        <TextInputField label={'Category'} value={'PM03- Breakdown Maintenance'} />
                    </View>
                    <View>
                        <TextInputField label={'Equipment'} value={'PM03- Breakdown Maintenance'} />
                    </View>
                    <View >
                        <TextInputField label={'Functional Location'} value={'003 Repair'} />
                    </View>
                    <View >
                        <TextInputField label={'Text'} value={''} />
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
    Mainheading: {
        fontSize: 16,
        color: '#2EA0A1',
        fontWeight: '500'
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

export default MPointEntry;