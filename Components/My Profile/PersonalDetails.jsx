import { StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView } from "react-native"
import PhoneInput from "react-native-phone-input";
import { bgColor, inputBackColor, placeHolderColor } from "../../color";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { EvilIcons, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import DynamicButton from "../../button";

const PersonalDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ padding: 10 }}>
          <View style={{ paddingBottom: 10 }}>
            <View style={[styles.inputContainer, {}]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={'account'} style={{ color: placeHolderColor, fontSize: 22, marginRight: 10, }} />
                <TextInput placeholder="Enter full name">

                </TextInput>
              </View>
            </View>
          </View>
          <View style={{ paddingBottom: 10 }}>
            <View style={[styles.inputContainer, {}]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={'email'} style={{ color: placeHolderColor, fontSize: 22, marginRight: 10, }} />
                <TextInput placeholder="Email">

                </TextInput>
              </View>
            </View>
          </View>
          <View style={{ paddingBottom: 10 }}>
            <View style={styles.inputContainer}>
              <PhoneInput
                style={{ height: 35 }}
                ref={(ref) => {
                  this.phone = ref;
                }}
                onPressFlag={this.onPressFlag}
                initialCountry={"us"}
                // initialValue="13178675309"
                textProps={{
                  placeholder: "Enter a phone number...",
                }}
              />
            </View>
          </View>

          <View style={{ paddingBottom: 10 }}>
            <View style={[styles.inputContainer, {}]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <EvilIcons name={'location'} size={26} style={{ color: placeHolderColor, }} />
                <TextInput placeholder="location">

                </TextInput>
              </View>
            </View>
          </View>
          <View style={{ paddingBottom: 10 }}>
            <View style={[styles.inputContainer, {}]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <FontAwesome5 name={'chess-queen'} size={20} style={{ color: placeHolderColor, marginRight: 10 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flex: 4 }}>
                    <TextInput placeholder="Email">

                    </TextInput>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Ionicons name={'calendar-sharp'} size={20} style={{ color: placeHolderColor, }} />
                  </View>

                </View>
              </View>
            </View>
          </View>
          <View>
            <DynamicButton text={"Update"} backgroundColor={bgColor} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10, alignItems: 'center' }}>
            <MaterialIcons name="logout" size={24} color={bgColor} />
            <Text style={{ color: bgColor }}>
              Logout
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  containe: {
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
    // paddingTop: StatusBar.currentHeight,
  },
  label: {
    marginVertical: 5,
    fontSize: 15,
    color: '#5F5F5F',
    fontWeight: '400'
  },
  inputContainer: {
    height: 55,
    justifyContent: 'center',
    backgroundColor: "light",
    // flexDirection: 'row',
    paddingHorizontal: 10,
    borderWidth: 0.5,
    // alignItems: 'center',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
  },
  scrollContainer: {
    marginTop: 0,
    marginBottom: 160,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "white",
  },
  inputContaine: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  dropdown: {

    padding: 40,
    borderWidth: 0.5,
    borderRadius: 4,
    // backgroundColor: "white",
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 4,
  },
  dropdownPlaceholder: {
    fontSize: 13,
    color: placeHolderColor,
    fontWeight: "400",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  header: {
    width: "100%",
    height: 120,
    backgroundColor: bgColor,
  },
  headerContent: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default PersonalDetails;