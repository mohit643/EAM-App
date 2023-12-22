import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native"
import MainHeader from "../Header/MainHeader";
import { Card } from "react-native-paper";
import { Ionicons, Foundation, MaterialCommunityIcons, FontAwesome6, Feather } from "@expo/vector-icons";
import { bgColor } from "../../color";
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import React, { useState } from "react";
import Order from "./Order";
import Operation from "./Operation";
import Inspections from "./Inspections";
import Permits from "./Permits";
import Documents from "./Documents";
import Components from "./Componenets";
import MPoints from "./MPoints";
import { TopHeader } from "../../TopHeader";
import SearchBar from "../../searchBar";
import OrderDetails from "./OrderDetails";

const MyWorkOrders = ({ navigation }) => {
    React.useLayoutEffect(() => {
        TopHeader(navigation);
    }, [navigation]);

    const [focusedIndex, setFocusedIndex] = useState(0);
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
                    focusedIndex === 0 ? <Order /> :
                        focusedIndex === 1 ? <Operation /> :
                            focusedIndex === 2 ? <Inspections /> :
                                focusedIndex === 3 ? <Permits /> :
                                    focusedIndex === 4 ? <Documents /> :
                                        focusedIndex === 5 ? <Components /> :
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
export default MyWorkOrders;