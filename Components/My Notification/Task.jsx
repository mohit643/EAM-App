import { Text, View } from "react-native";
import TextInputField from "../../TextInputField";
import { ScrollView, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import DynamicButton from "../../button";
import { bgColor } from "../../color";


const Task = () => {
    const list = [
        { id: 1, Description: 'New Task', Activitycode: 'C1', Status: 'Created', },
        { id: 2, Description: 'New Task', Activitycode: 'C1', Status: 'Created', },
        { id: 3, Description: 'New Task', Activitycode: 'C1', Status: 'Created', },
        { id: 4, Description: 'New Task', Activitycode: 'C1', Status: 'Created', },
        { id: 5, Description: 'New Task', Activitycode: 'C1', Status: 'Created', },

    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: '700', }}>
                    Task
                </Text>
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: '#9E9E9E' }} />
            <ScrollView>

                <View style={{ padding: 10 }}>

                    <View style={{ flex: 1 }}>
                        <TextInputField value={'C1'} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInputField label={'Description'} value={'Stalling'} />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20 }}>
                        <View style={{ flex: 1 }}>

                        </View>
                        <View style={{ flex: 1 }}>
                            <DynamicButton text={'Save & Next'} backgroundColor={bgColor} />
                        </View>
                    </View>
                </View>




                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, fontSize: 18, backgroundColor: '#DCDCDC', }}>
                    <Text style={styles.text}>
                        Activity code
                    </Text>
                    <Text style={styles.text}>
                        Description
                    </Text>
                    <Text style={styles.text}>
                        Status
                    </Text>
                </View>

                <FlatList
                    data={list}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, fontSize: 18, backgroundColor: '#DCDCDC', backgroundColor: index % 2 === 0 ? 'white' : '#F8F8F8', }}>
                            <View style={{ width: '30%' }}>
                                <Text style={styles.innertext}>{item?.Activitycode}</Text>
                            </View>
                            <View style={{ width: '30%' }}>
                                <Text style={styles.innertext}>{item?.Description}</Text>
                            </View>
                            <View style={{ width: '17%' }}>
                                <Text style={styles.innertext}>{item?.Status}</Text>
                            </View>
                        </View>
                    )}
                />

            </ScrollView>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
    },
    tableHeader: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        // gap: 10,
        // padding: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: '700',
    },
    cell: {
        backgroundColor: 'white',
        flexDirection: 'row',
        gap: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20
    },
    innertext: {
        fontSize: 13,
        fontWeight: '400',
    },
})
export default Task;