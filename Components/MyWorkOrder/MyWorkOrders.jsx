import { View, Text, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback, FlatList, SafeAreaView, scrollView, ScrollView } from "react-native"
import MainHeader from "../Header/MainHeader";
import { Card, IconButton, TextInput } from "react-native-paper";
import { Ionicons, Fontisto, MaterialCommunityIcons, MaterialIcons, Feather } from "@expo/vector-icons";
import { bgColor, cancelColor, placeHolderColor, rejectColor } from "../../color";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import React, { useEffect, useState } from "react";
import Order from "./Order";
import Operation from "./Operation";
import Inspections from "./Inspections";
import Permits from "./Permits";
import Documents from "./Documents";
import Components from "./Componenets";
import MPoints from "./MPoints";
import { TopHeader } from "../../TopHeader";
import SearchBar from "../../searchBar";
import Modal from "react-native-modal";
import DynamicButton from "../../button";
import TextInputField from "../../TextInputField";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";
import Map from "./Map";


const MyWorkOrders = ({ navigation }) => {
    const [secondDrawer, setSecondDrawer] = useState(false);
    const [isModalStatusVisible, setModalStatusVisible] = useState(false);
    const [isModalAddTimeVisible, setModalAddTimeVisible] = useState(false);
    const [isModalCreateOperation, setModalCreateOperation] = useState(false);
    const [isModalCreateRequisition, setModalCreateRequisition] = useState(false);
    const [isModalMaterialDemond, setModalMaterialDemon] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [focusedIndex, setFocusedIndex] = useState(0);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
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
    const handleModalClose = () => {
        setModalStatusVisible(false);
        setModalAddTimeVisible(false);
        setModalCreateRequisition(false);
        setModalMaterialDemon(false);
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

    const onLongPress = (itemId) => {
        // Check if the item is already selected
        const isSelected = selectedItems.includes(itemId);

        // // Toggle the selection status
        if (isSelected) {
            setSelectedItems(selectedItems.filter((selectedId) => selectedId !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    const dataItems = [
        { id: 1, status: "In Transit" },
        { id: 2, status: "In Progress" },
        { id: 3, status: "Paused" },
        { id: 4, status: "Awaiting Parts" },
        { id: 5, status: "Return to Planner" },
        { id: 6, status: "Completed" },


        // Add more data as needed
    ];

    const hanldOpenCreateOperation = () => {
        setSecondDrawer(false);
        // setModalCreateOperation(true);
        navigation.navigate('Create Operation')
    }
    const handlMatrialDemod = () => {
        setSecondDrawer(false);
        setModalMaterialDemon(true);
    };
    const handlOpenStatus = () => {
        setSecondDrawer(false);
        setModalStatusVisible(true)
    }
    const handlOpenAddTime = () => {
        setSecondDrawer(false);
        setModalAddTimeVisible(true);
    }
    const handlOpenCreateRequisition = () => {
        setSecondDrawer(false);
        setModalCreateRequisition(true);
    }

    const Header = () => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 10 }}>
                    <TouchableOpacity
                        style={{ marginLeft: 10, }}
                        onPress={() => {
                            navigation.openDrawer();
                        }}>
                        <Feather name='bar-chart-2' size={26} color={'black'} style={{ transform: [{ rotate: '90deg' }], }} />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View style={{ marginRight: 16 }}>
                    <TouchableOpacity onPress={() => setSecondDrawer(!secondDrawer)}>
                        <View style={styles.dot}>
                            <IconButton icon="dots-vertical" />
                        </View>
                    </TouchableOpacity>
                    {secondDrawer ?
                        <>
                            <View style={{ position: 'absolute', width: 160, right: 40, top: 0 }}>
                                {focusedIndex === 1 ?
                                    (
                                        <Modal
                                            statusBarTranslucent={true}
                                            visible={secondDrawer}
                                            transparent={true}
                                            animationType="fade"
                                            onRequestClose={() => setSecondDrawer(false)}
                                        >
                                            <TouchableWithoutFeedback onPress={() => setSecondDrawer(false)}>
                                                <View style={styles.modalOverlay} />
                                            </TouchableWithoutFeedback>

                                            <View style={styles.modalContent}>
                                                <Card style={{ alignItems: 'flex-start', padding: 10, backgroundColor: 'white' }}>
                                                    <TouchableOpacity onPress={handlOpenStatus}>
                                                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', paddingBottom: 5 }}>
                                                            <MaterialCommunityIcons name="eye-arrow-right" size={20} color="black" />
                                                            <Text>Status</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={handlOpenAddTime}>
                                                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', paddingBottom: 5 }}>
                                                            <MaterialCommunityIcons name="clock-edit-outline" size={20} color="black" />
                                                            <Text>Add Times</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={hanldOpenCreateOperation}>
                                                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', paddingBottom: 5 }}>
                                                            <MaterialIcons name="create-new-folder" size={20} color="black" />
                                                            <Text>Create Operation</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </Card>
                                            </View>
                                        </Modal>
                                    ) : focusedIndex == 5 ?
                                        (
                                            <Modal
                                                statusBarTranslucent={true}
                                                visible={secondDrawer}
                                                transparent={true}
                                                animationType="fade"
                                                onRequestClose={() => setSecondDrawer(false)}
                                            >
                                                <TouchableWithoutFeedback onPress={() => setSecondDrawer(false)}>
                                                    <View style={styles.modalOverlay} />
                                                </TouchableWithoutFeedback>

                                                <View style={styles.modalContent}>
                                                    <Card style={{ alignItems: 'flex-start', padding: 10, backgroundColor: 'white' }}>
                                                        <TouchableOpacity onPress={handlOpenCreateRequisition}>
                                                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', paddingBottom: 5 }}>
                                                                <MaterialCommunityIcons name="eye-arrow-right" size={20} color="black" />
                                                                <Text>Create Requisition</Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity onPress={handlMatrialDemod}>
                                                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', paddingBottom: 5 }}>
                                                                <MaterialCommunityIcons name="clock-edit-outline" size={20} color="black" />
                                                                <Text>Create Demand</Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </Card>
                                                </View>
                                            </Modal>
                                        ) : null}
                            </View>

                        </>
                        : null}
                </View>
            ),
            headerTitleAlign: "center",
            headerStyle: {
                backgroundColor: 'white',
                height: 100,
            },
            headerTintColor: "black",
            title: getTitleText(),
        });
    };

    React.useLayoutEffect(() => {
        Header();
    }, [secondDrawer, focusedIndex]);

    const getTitleText = () => {
        switch (focusedIndex) {
            case 0:
                return "My Work Orders";
            case 1:
                return "My Operation";
            case 2:
                return "My Inspections";
            case 3:
                return "Permits";
            case 4:
                return "Documents";
            case 5:
                return "Components ";
            case 6:
                return "M Points ";
            case 7:
                return "Map ";
            // Add more cases as needed
            default:
                return "Default Title";
        }
    };

    const handleCardPress = (index) => {
        setFocusedIndex(index);
    };

    const data = [
        { icons: 'script-text-outline', name: 'Order' },
        { icons: 'account-cog-outline', name: ' Operations' },
        { icons: 'book-search-outline', name: 'Inspection' },
        { icons: 'card-account-details-star-outline', name: 'Permits' },
        { icons: 'file-document-outline', name: 'Documents' },
        { icons: 'safe-square-outline', name: 'Components' },
        { icons: 'file-settings', name: 'M Points' },
        { icons: 'share-variant-outline', name: 'BOM' },
        { icons: 'earth', name: 'Map' },
        // ... (other data)
    ];
    const renderCard = (item, index) => {
        const isFocused = index === focusedIndex;
        const name = item.name
        return (
            < >
                <View key={index} >
                    <View style={{}} >
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
                </View>
            </>
        );
    };


    return (
        <View>
            <View style={{ backgroundColor: 'white', paddingLeft: 10, paddingRight: 10 }}>
                <SearchBar
                    iconName='search'
                    placeholder="Search here.."
                    rightIcon='filter'
                />
            </View>
            <View>
                <SwiperFlatList
                    data={data}
                    renderItem={({ item, index }) => renderCard(item, index)}
                />
                {
                    focusedIndex === 0 ? <Order /> :
                        focusedIndex === 1 ? <Operation /> :
                            focusedIndex === 2 ? <Inspections /> :
                                focusedIndex === 3 ? <Permits /> :
                                    focusedIndex === 4 ? <Documents /> :
                                        focusedIndex === 5 ? <Components /> :
                                            focusedIndex === 6 ? <MPoints /> :
                                                focusedIndex === 8 ? <Map /> :

                                                    null
                }
            </View>
            {isModalStatusVisible ? (
                <Modal isVisible={isModalStatusVisible} style={{ backgroundColor: 'white', borderRadius: 20, margin: 20, marginTop: 80, marginBottom: 170 }}>
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
                        data={dataItems}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onLongPress={() => onLongPress(item.id)}>
                                <View style={{
                                    borderWidth: 1, padding: 10, margin: 10, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between',
                                    borderColor: selectedItems.includes(item.id) == '' ? '#DEDBDD' : bgColor
                                }}>
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
            ) : null
            }
            {isModalAddTimeVisible ? (
                <Modal isVisible={isModalAddTimeVisible} style={{ backgroundColor: 'white', borderRadius: 20, paddingTop: 20, paddingBottom: 30 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <View >
                            <Text style={styles.cardText}>
                                Add Times
                            </Text>
                        </View>
                        <View >
                            <TouchableOpacity onPress={handleModalClose}>
                                <Fontisto name="close" size={20} color={rejectColor} />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: '#9E9E9E' }} />
                    <SafeAreaView style={styles.container}>
                        <ScrollView style={styles.scrollView}>
                            <View style={{ padding: 10, }}>
                                <View >
                                    <TextInputField label={'Operation'} value={'MYPM-VEH - Vehicles'} />
                                </View>
                                <View>
                                    <TextInputField label={'Work'} value={'1-1 High'} />
                                </View>
                                <View>
                                    <TextInputField label={'Work Remaining'} value={'1000 - EAM'} />
                                </View>
                                <View>
                                    <TextInputField label={'Work Date'} value={'PM03- Breakdown Maintenance'} />
                                </View>
                                <View>
                                    <TextInputField label={'Work Centre'} value={'PM03- Breakdown Maintenance'} />
                                </View>
                                <View >
                                    <TextInputField label={'Person'} value={'003 Repair'} />
                                </View>
                                <View >
                                    <TextInputField label={'Confirmation Text'} value={'003 Repair'} />
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
                </Modal>
            ) : null
            }

            {/* {isModalCreateOperation ? (
                <Modal isVisible={isModalCreateOperation} style={{ backgroundColor: 'white', borderRadius: 20, paddingTop: 20, paddingBottom: 30 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <View >
                            <Text style={styles.cardText}>
                                isModalCreateOperation
                            </Text>
                        </View>
                        <View >
                            <TouchableOpacity onPress={handleModalClose}>
                                <Fontisto name="close" size={20} color={rejectColor} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: '#9E9E9E' }} />
                    <SafeAreaView style={styles.container}>
                        <ScrollView style={styles.scrollView}>
                            <View style={{ padding: 10, paddingTop: 0 }}>
                                <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                                    <Text style={styles.Mainheading}>Material Details and Location</Text>
                                </View>
                                <View >
                                    <TextInputField label={'Material'} value={'MYPM-VEH - Vehicles'} />
                                </View>
                                <View>
                                    <TextInputField label={'Plant'} value={'1-1 High'} />
                                </View>

                                <View>
                                    <TextInputField label={'Storage Location'} value={'1000 - EAM'} />
                                </View>
                                <View>
                                    <TextInputField label={'Available Balance'} value={'1000 - EAM'} />
                                </View>

                                <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                                    <Text style={styles.Mainheading}>Demand Details</Text>
                                </View>
                                <View style={{ flexDirection: 'row', gap: 20 }}>
                                    <View style={{ flex: 1 }}>
                                        <TextInputField label={'Demand Quatity'} value={'003 Repair'} />
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
                                    <Text style={styles.text}>Required Date </Text>
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
                                    <TextInputField label={'Demand Orders'} value={'PM03- Breakdown Maintenance'} />
                                </View>
                                <View >
                                    <TextInputField label={'Operation'} value={'003 Repair'} />
                                </View>
                                <View >
                                    <TextInputField label={'Unloading Point'} value={'003 Repair'} />
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
                </Modal>
            ) : null} */}

            {isModalCreateRequisition ? (
                <Modal isVisible={isModalCreateRequisition} style={{ backgroundColor: 'white', borderRadius: 20, paddingTop: 20, paddingBottom: 30 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <View >
                            <Text style={styles.cardText}>
                                Create Requisition
                            </Text>
                        </View>
                        <View >
                            <TouchableOpacity onPress={handleModalClose}>
                                <Fontisto name="close" size={20} color={rejectColor} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: '#9E9E9E' }} />
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
                </Modal>
            ) : null
            }

            {isModalMaterialDemond ? (
                <Modal isVisible={isModalMaterialDemond} style={{ backgroundColor: 'white', borderRadius: 20, paddingTop: 20, paddingBottom: 30 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <View >
                            <Text style={styles.cardText}>
                                Material Demand
                            </Text>
                        </View>
                        <View >
                            <TouchableOpacity onPress={handleModalClose}>
                                <Fontisto name="close" size={20} color={rejectColor} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: '#9E9E9E' }} />
                    <SafeAreaView style={styles.container}>
                        <ScrollView style={styles.scrollView}>
                            <View style={{ padding: 10, paddingTop: 0 }}>
                                <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                                    <Text style={styles.Mainheading}>Material Details and Location</Text>
                                </View>
                                <View >
                                    <TextInputField label={'Material'} value={'MYPM-VEH - Vehicles'} />
                                </View>
                                <View>
                                    <TextInputField label={'Plant'} value={'1-1 High'} />
                                </View>

                                <View>
                                    <TextInputField label={'Storage Location'} value={'1000 - EAM'} />
                                </View>
                                <View>
                                    <TextInputField label={'Available Balance'} value={'1000 - EAM'} />
                                </View>

                                <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                                    <Text style={styles.Mainheading}>Demand Details</Text>
                                </View>
                                <View style={{ flexDirection: 'row', gap: 20 }}>
                                    <View style={{ flex: 1 }}>
                                        <TextInputField label={'Demand Quatity'} value={'003 Repair'} />
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
                                    <Text style={styles.text}>Required Date </Text>
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
                                    <TextInputField label={'Demand Orders'} value={'PM03- Breakdown Maintenance'} />
                                </View>
                                <View >
                                    <TextInputField label={'Operation'} value={'003 Repair'} />
                                </View>
                                <View >
                                    <TextInputField label={'Unloading Point'} value={'003 Repair'} />
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
                </Modal>
            ) : null
            }
        </View >
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
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)', // semi-transparent black
    },
    modalContent: {
        position: 'absolute',
        top: 70,
        right: -10,
        // bottom: 0,
        // width: 160,
        padding: 10,
        // backgroundColor: 'white',
        zIndex: 2, // Ensure it's above the modalOverlay
    },
    cardText: {
        fontSize: 16,
        fontWeight: '600'
    },
    headrText: {
        fontSize: 16,
        fontWeight: '600'
    },
    Mainheading: {
        fontSize: 16,
        color: '#2EA0A1',
        fontWeight: '500'
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
    input: {
        borderWidth: 0.5,
        borderRadius: 4,
        backgroundColor: "transparent",
    },
})
export default MyWorkOrders;