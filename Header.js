import { Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { bgColor } from "./color";
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons';


export const Header = (navigation) => {
    navigation.setOptions({

        headerRight: () => (
            <View style={{ marginRight: 16 }}>
                <TouchableOpacity>
                    <View style={styles.dot}>
                        <SimpleLineIcons name="pencil" size={20} />
                    </View>
                </TouchableOpacity>
            </View>
        ),
        headerStyle: {
            backgroundColor: bgColor,
            height: 100,
        },

        headerTintColor: "white",
    });
};
const styles = StyleSheet.create({
    dot: {
        height: 40,
        width: 40,
        backgroundColor: '#F4F4F4',
        borderRadius: 50,
        justifyContent: 'center', alignItems: 'center'
    },
})