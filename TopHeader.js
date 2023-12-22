import { Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { bgColor } from "./color";
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { IconButton } from "react-native-paper";


export const TopHeader = (navigation) => {
  navigation.setOptions({
    headerLeft: () => (
      <View style={{ marginLeft: 10 }}>
        <TouchableOpacity
          style={{ marginLeft: 10, }}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Feather name='bar-chart-2' size={26} color={'white'} style={{ transform: [{ rotate: '90deg' }], }} />
        </TouchableOpacity>
      </View>
    ),
    headerRight: () => (
      <View style={{ marginRight: 16 }}>
        <TouchableOpacity>
          <View style={styles.dot}>
            <IconButton icon="dots-vertical" />
          </View>
        </TouchableOpacity>
      </View>
    ),
    headerTitleAlign: "center",
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