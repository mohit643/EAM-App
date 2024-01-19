import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, FlatList } from "react-native"
import { Card, Checkbox, TextInput } from "react-native-paper";
import { MaterialCommunityIcons, } from "@expo/vector-icons";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { bgColor, cancelColor, placeHolderColor } from "../../../color";
import { TopHeader } from "../../../TopHeader";
import TextInputField from "../../../TextInputField";
import DynamicButton from "../../../button";
import SearchBar from "../../../searchBar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ProgressBar, MD3Colors } from 'react-native-paper';



const Assign = ({ navigation }) => {
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


    const list = [
        { id: 1, name: 'Ram Kumar', Activity: 0.5, status: false },
        { id: 2, name: 'Ram Kumar', Activity: 1, status: true },
        { id: 3, name: 'Ram Kumar', Activity: 0.5, status: false },
        { id: 4, name: 'Ram Kumar', Activity: 1, status: true },
        { id: 5, name: 'Ram Kumar', Activity: 0.5, status: false },
        { id: 6, name: 'Ram Kumar', Activity: 1, status: true },
    ];
    const [checked, setChecked] = useState('');
    const handlchange = (item) => {
        const itemId = item.id
        console.log("Ss", item)


    }

        ;
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingLeft: 10, paddingRight: 10, backgroundColor: bgColor }}>
                <SearchBar
                    iconName='search'
                    placeholder="Search here.."
                    rightIcon='filter'
                />
            </View>
            <View style={styles.tableHeader}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>Name</Text>
                </View>

            </View>

            <View >
                <FlatList
                    style={{ height: hp('63%') }}
                    data={list}
                    renderItem={({ item, index }) => (
                        <View style={[styles.cell, { backgroundColor: index % 2 === 0 ? 'white' : '#F8F8F8', gap: 10, display: 'flex', justifyContent: 'space-between' }]}>
                            <View style={{}}>
                                <Text>{item.name}</Text>
                            </View>
                            <View style={{ width: '40%' }}>
                                <Text>{(item.Activity * 100)}% Occupied</Text>
                                <ProgressBar progress={item.Activity} color={(item.Activity > 0.5 ? bgColor : 'red')} />
                            </View>
                            <View style={{}}>
                                {console.log("dddd", item.status)}
                                <Checkbox
                                    color={bgColor}

                                    onPress={() => handlchange(item)}
                                    status={checked ? 'checked' : 'unchecked'}

                                />

                            </View>
                        </View>
                    )}
                />
            </View>
            <View style={{ flexDirection: 'row', gap: 10, padding: 10 }}>
                <View style={{ flex: 1 }}>
                    <DynamicButton
                        backgroundColor={cancelColor}
                        text='Cancel'
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <DynamicButton
                        backgroundColor={bgColor}
                        text='Done'
                    />
                </View>
            </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: '700',
    },
    toptext: {
        color: 'white',
        fontSize: 14,
        fontWeight: '300'
    },
    toptextheading: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500'
    },
    dot: {
        height: 40,
        width: 40,
        backgroundColor: '#F4F4F4',
        borderRadius: 50,
        justifyContent: 'center', alignItems: 'center'
    },
    Activitydot: {
        height: 30,
        width: 30,
        backgroundColor: bgColor,
        borderRadius: 50,
        justifyContent: 'center', alignItems: 'center'
    },
    tableHeader: {
        width: '100%',
        backgroundColor: '#DCDCDC',
        flexDirection: 'row',
        padding: 20,
    },
    cell: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        width: '100%'
    },
});

export default Assign;