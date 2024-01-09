import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, TouchableWithoutFeedback } from "react-native"
import { Card, IconButton, } from "react-native-paper";
import { Ionicons, Foundation, MaterialCommunityIcons, FontAwesome6, Feather } from "@expo/vector-icons";
import { bgColor } from "../../color";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Modal from "react-native-modal";
import React, { useState } from "react";
import SearchBar from "../../searchBar";
import MPoints from "../MyWorkOrder/MPoints";
import General from "./General";
import Items from "./Items";
import CausesMyNotification from "./CausesMyNotification";
import ActivitiesMyNotification from "./ActivitiesMyNotification";
import TaskMyNotification from "./TaskMyNotification";
import DocumentsMyNotification from "./DocumentsMyNotification";


const MyNotification = ({ navigation }) => {
    const [secondDrawer, setSecondDrawer] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(0);
    const getTitleText = () => {
        switch (focusedIndex) {
            case 0:
                return "My Notifications";
            case 1:
                return "Items";
            case 2:
                return "Causes";
            case 3:
                return "Activities";
            case 4:
                return "Tasks";
            case 5:
                return "Documents ";
            // Add more cases as needed
            default:
                return "Default Title";
        }
    };
    const handlOpenUploadDocuments = () => {

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
                                {focusedIndex == 5 ?
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
                                                    <TouchableOpacity onPress={handlOpenUploadDocuments}>
                                                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', paddingBottom: 5 }}>
                                                            <MaterialCommunityIcons name="folder-upload" size={20} color="black" />
                                                            <Text>Upload Documents</Text>
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


    const handleCardPress = (index) => {
        setFocusedIndex(index);
    };

    const data = [
        { icons: 'clipboard-text-multiple-outline', name: 'General' },
        { icons: 'clipboard-text-outline', name: ' Items' },
        { icons: 'folder-download-outline', name: 'Causes' },
        { icons: 'radioactive-circle-outline', name: 'Activities' },
        { icons: 'clipboard-edit', name: 'Tasks' },
        { icons: 'file-document-outline', name: 'Documents' },
        // { icons: 'file-settings', name: 'M Points' },
        // ... (other data)
    ];
    const renderCard = (item, index) => {
        const isFocused = index === focusedIndex;
        const name = item.name
        return (
            < >
                <View key={index} >
                    <View style={{}} >
                        <Card style={{ backgroundColor: isFocused ? bgColor : 'white', margin: 10, }}>
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
                    focusedIndex === 0 ? <General /> :
                        focusedIndex === 1 ? <Items /> :
                            focusedIndex === 2 ? <CausesMyNotification /> :
                                focusedIndex === 3 ? <ActivitiesMyNotification /> :
                                    focusedIndex === 4 ? <TaskMyNotification /> :
                                        focusedIndex === 5 ? <DocumentsMyNotification /> :
                                            focusedIndex === 6 ? <MPoints /> :
                                                null
                }
            </View>
        </View>
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
})
export default MyNotification;