import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native"
import MainHeader from "../Header/MainHeader";
import { Card } from "react-native-paper";
import { Ionicons, Foundation, MaterialCommunityIcons, FontAwesome6, Feather } from "@expo/vector-icons";
import { bgColor } from "../../color";
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import React, { useState } from "react";

import { TopHeader } from "../../TopHeader";
import SearchBar from "../../searchBar";
import Order from "../MyWorkOrder/Order";
import Inspections from "../MyWorkOrder/Inspections";
import Operation from "../MyWorkOrder/Operation";
import Permits from "../MyWorkOrder/Permits";
import Documents from "../MyWorkOrder/Documents";
import MPoints from "../MyWorkOrder/MPoints";
import Componenets from "../MyWorkOrder/Componenets";
import General from "./General";
import Items from "./Items";
import CausesMyNotification from "./CausesMyNotification";
import ActivitiesMyNotification from "./ActivitiesMyNotification";
import TaskMyNotification from "./TaskMyNotification";
import DocumentsMyNotification from "./DocumentsMyNotification";


const MyNotification = ({ navigation }) => {
    React.useLayoutEffect(() => {
        TopHeader(navigation);
    }, [navigation]);

    const [focusedIndex, setFocusedIndex] = useState(0);
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
            <View style={{ backgroundColor: bgColor, paddingLeft: 10, paddingRight: 10 }}>
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
    }
})
export default MyNotification;