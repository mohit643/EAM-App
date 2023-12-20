import { Text, View } from "react-native"
import { Header } from "../../Header";
import React from "react";


const MyProfile = ({ navigation }) => {
    React.useLayoutEffect(() => {
        Header(navigation);
    }, [navigation]);
    return (
        <View>
            <Text>ddd</Text>
        </View>
    )
};
export default MyProfile;