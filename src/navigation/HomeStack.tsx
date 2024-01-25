import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CustomNavBar from "./CustomNavBar";
import BottomNavigator from "./BottomNavigator";
import Scanner from "../screens/Scanner";
import CreateReceipt from "../screens/CreateReceipt";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <CustomNavBar {...props} />,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="CreateReceipt" component={CreateReceipt} />

    </Stack.Navigator>
  );
}
