import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { Card, Icon, IconButton } from 'react-native-paper';
import userImage from '../../assets/Oval.png'
import { Badge } from 'react-native-paper';
import SearchBar from "../../searchBar";
import { Ionicons, Foundation, MaterialCommunityIcons } from "@expo/vector-icons";


import { bgColor } from "../../color";
import { useContext } from "react";
import { AuthContext } from "../Utils/AuthContext";

const Home = ({ navigation }) => {


    const handlePress = () => {
        if (props.redirection) {
            if (props.screen) {
                navigation.navigate(props.redirection, { screen: props.screen });
            } else {
                navigation.navigate(props.redirection);
            }
        }
    };
    return (
        <SafeAreaView>
            <View >
                <View >
                    <View style={styles.headerContent}>
                        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', }}>
                            <View>
                                <TouchableOpacity
                                    onPress={() => navigation.openDrawer()}
                                // onPress={() => navigation.navigate('MyProfile')}
                                >
                                    <Image
                                        source={userImage}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={{ fontWeight: '700', fontSize: 22 }}>Hi, Alexander Rhys</Text>
                                <Text style={{ fontWeight: '600', fontSize: 16, color: '#525252' }} >Welcome to EAM</Text>
                            </View>
                            <View>
                                <View style={styles.dot}>
                                    <TouchableOpacity>
                                        <Badge size={10} style={{ top: 0, right: 5, position: 'absolute' }} />
                                        <MaterialCommunityIcons name="bell-outline" size={30} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <SearchBar
                            iconName='search'
                            placeholder="Search here.."
                            rightIcon='filter'
                        />
                    </View>
                    <ScrollView style={styles.scrollContainer}>
                        <View style={{ padding: 10 }}>
                            <View >
                                <Card style={{ backgroundColor: 'white' }}>
                                    <Card.Content >
                                        <TouchableOpacity onPress={() => navigation.navigate("My Work Orders")}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <View>
                                                    <View style={styles.dot}>
                                                        <Ionicons name="documents-sharp" size={30} color={bgColor} />
                                                    </View>
                                                </View>
                                                <View style={{ alignItems: 'flex-end' }}>
                                                    <Text style={{ fontSize: 28, fontWeight: '700' }}>30</Text>
                                                    <Text style={{ fontSize: 16, fontWeight: '600' }}>My Works Orers</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </Card.Content>
                                </Card>
                            </View>
                        </View>
                        <View style={{ padding: 10 }}>
                            <View style={{ flexDirection: 'row', gap: 20 }}>
                                <Card style={{ backgroundColor: 'white', flex: 1 }}>
                                    <Card.Content >
                                        <View >
                                            <View style={{ alignItems: 'flex-end' }}>
                                                <View style={styles.dot}>
                                                    <Foundation name="page-search" size={30} color={bgColor} />
                                                </View>
                                            </View>
                                            <View >
                                                <Text style={styles.value}>30</Text>
                                                <Text style={styles.cardText}>My Inspections</Text>
                                            </View>
                                        </View>
                                    </Card.Content>
                                </Card>
                                <Card style={{ backgroundColor: 'white', flex: 1 }}>
                                    <Card.Content >
                                        <View >
                                            <View style={{ alignItems: 'flex-end' }}>
                                                <View style={styles.dot}>
                                                    {/* <Image
                                                        source={Image4}
                                                    /> */}
                                                    <MaterialCommunityIcons name="book-settings-outline" size={30} color={bgColor} />

                                                </View>
                                            </View>
                                            <View >
                                                <Text style={styles.value}>30</Text>
                                                <Text style={styles.cardText}>My Assets</Text>
                                            </View>
                                        </View>
                                    </Card.Content>
                                </Card>
                            </View>


                        </View>
                        <View style={{ padding: 10 }}>
                            <View style={{ flexDirection: 'row', gap: 20 }}>
                                <Card style={{ backgroundColor: 'white', flex: 1 }}>
                                    <Card.Content >
                                        <TouchableOpacity onPress={() => navigation.navigate('AddNotification')}>
                                            <View >
                                                <View style={{ alignItems: 'flex-end' }}>
                                                    <View style={styles.dot}>
                                                        <MaterialCommunityIcons name="bell-badge-outline" size={30} color={bgColor} />
                                                    </View>
                                                </View>
                                                <View >
                                                    <Text style={styles.value}>30</Text>
                                                    <Text style={styles.cardText}>My Notification</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </Card.Content>
                                </Card>
                                <Card style={{ backgroundColor: 'white', flex: 1 }}>
                                    <Card.Content >
                                        <View >
                                            <View style={{ alignItems: 'flex-end' }}>
                                                <View style={styles.dot}>
                                                    <Ionicons name="documents-outline" size={30} color={bgColor} />
                                                </View>
                                            </View>
                                            <View >
                                                <Text style={styles.value}>30</Text>
                                                <Text style={styles.cardText}>My Reports</Text>
                                            </View>
                                        </View>
                                    </Card.Content>
                                </Card>
                            </View>


                        </View>
                        <View style={{ padding: 10 }}>
                            <View style={{ flexDirection: 'row', gap: 20 }}>
                                <Card style={{ backgroundColor: 'white', width: 150 }}>
                                    <Card.Content >
                                        <View >
                                            <View style={{ alignItems: 'flex-end' }}>
                                                <View style={styles.dot}>
                                                    <MaterialCommunityIcons name="cloud-sync-outline" size={30} color={bgColor} />
                                                </View>
                                            </View>
                                            <View >
                                                <Text style={styles.value}>15</Text>
                                                <Text style={styles.cardText}>Sync Box</Text>
                                            </View>
                                        </View>
                                    </Card.Content>
                                </Card>
                                {/* <Card style={{ backgroundColor: 'white', flex: 1 }}>
                                    <Card.Content >
                                        <View >
                                            <View style={{ alignItems: 'flex-end' }}>
                                                <View style={styles.dot}>
                                                    <Image
                                                        source={Image4}
                                                    />
                                                </View>
                                            </View>
                                            <View >
                                                <Text style={styles.value}>30</Text>
                                                <Text style={styles.cardText}>My Assets</Text>
                                            </View>
                                        </View>
                                    </Card.Content>
                                </Card> */}
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>

    )
};

const styles = StyleSheet.create({

    headerContent: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
    },
    name: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: '600',
    },
    value: {
        fontSize: 28,
        fontWeight: '700'
    },
    boxIcon: {
        marginTop: -40
    },
    cardText: {
        fontSize: 16,
        fontWeight: '600'
    },
    scrollContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 575

    },
    dot: {
        height: 50,
        width: 50,
        backgroundColor: '#F4F4F4',
        borderRadius: 50,
        justifyContent: 'center', alignItems: 'center'
    }
})
export default Home;