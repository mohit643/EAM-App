import { Text, View } from "react-native";
import TextInputField from "../../TextInputField";
import { ScrollView, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import DynamicButton from "../../button";
import { bgColor } from "../../color";


const ItemDetails = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: '700', }}>
                    Details
                </Text>
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: '#9E9E9E' }} />
            <ScrollView>

                <View style={{ padding: 10 }}>

                    <View style={{ flex: 1 }}>
                        <TextInputField label={'Description'} value={'Stalling'} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInputField label={'Object Parts'} value={'PM1 7 Machanical '} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInputField label={'Overview of Damage'} value={'PM1 00 - not applicable-not damage'} />
                    </View>
                </View>

            </ScrollView>
            <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between', gap: 20 }}>
                <View style={{ flex: 1 }}>

                </View>
                <View style={{ flex: 1 }}>
                    <DynamicButton text={'Save & Next'} backgroundColor={bgColor} />
                </View>
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
    },
})
export default ItemDetails;