// import { View,Text } from "react-native"

// const Reports = () => {
//     return(
//         <View>
//             <Text>Schedule</Text>
//         </View>
//     )
// };
// export default Reports;



import React, { useRef, useState } from 'react';
import {
    Button,
    DrawerLayoutAndroid,
    Text,
    StyleSheet,
    View,
} from 'react-native';

const Reports = () => {
    const drawer = useRef(null);

    const [drawerPosition, setDrawerPosition] = useState('');

    const getDrawerPosition = () => {
        const position = drawer?.current?.getDrawerPosition();
        setDrawerPosition(position);
    };

    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.paragraph}>I'm in the Drawer!</Text>
            <Button
                title="Close drawer"
                onPress={() => drawer?.current?.closeDrawer()}
            />
        </View>
    );

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={'left'}
            renderNavigationView={navigationView}>
            <View style={styles.container}>
                <Text style={styles.paragraph}>Drawer on the</Text>
              
                <Button
                    title="Open drawer"
                    onPress={() => drawer.current?.openDrawer()}
                />
              
            </View>
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    navigationContainer: {
        // backgroundColor: '#ecf0f1',
        // backgroundColor:'red'
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: 'center',
        margin: 20
    },
});

export default Reports;