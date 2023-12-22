import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native"


const OrderDetails = () => {
    const [renderSecond, setRenderSecond] = useState(false);
    const handleButtonClick = () => {
        // Set renderSecond to true when the button is clicked
        setRenderSecond(true);
    };
    const second = () => {
        return (
            <View>
                <Text>
                    second
                </Text>
            </View>
        )
    }
    return (
        <View>
            {/* Render the first or second component based on the state */}
            {renderSecond ? (
                <View>
                    <Text>Second</Text>
                </View>
            ) : (
                <TouchableOpacity onPress={handleButtonClick}>
                    <View>
                        <Text>First</Text>
                    </View>
                </TouchableOpacity>
            )}

            {/* Display button based on the state */}
            
        </View>
    );
};
export default OrderDetails;