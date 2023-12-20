// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./AuthStack";
import { View, ActivityIndicator } from "react-native";
import DrawerNav from "./DrawerNav";
import { AuthContext } from "../Utils/AuthContext";

function AppNav() {
  const { isLoading, userToken } = React.useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <NavigationContainer style={{ backgroundColor: "white" }}>
      {userToken !== null ? <DrawerNav /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppNav;
