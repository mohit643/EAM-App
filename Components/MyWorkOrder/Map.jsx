import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
    return (
        <View >
            <MapView
                style={{ width: '100%', height: '89%' }}
            >
                <Marker
                    coordinate={{ latitude: 25, longitude: 80 }}
                    title="Marker Title"
                    description="Marker Description"
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({

});
export default Map;