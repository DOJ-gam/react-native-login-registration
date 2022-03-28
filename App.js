import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "./components/Loader";

const Stack = createNativeStackNavigator();

export default function App() {
  const [initialRouteName, setInitialRouteName] = React.useState("");

  React.useEffect(() => {
    setTimeout(authUser, 2000);
  }, []);

  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem("user");
      if (userData) {
        //if data means user has registered
        userData = JSON.parse(userData);
        if (userData?.loggedIn) {
          setInitialRouteName("Home");
        } else {
          setInitialRouteName("Login");
        }
      } else {
        setInitialRouteName("Register");
      }
    } catch (error) {
      setInitialRouteName("Register");
    }
  };

  return (
    <NavigationContainer>
      {initialRouteName == "" ? (
        <Loader visible={true} />
      ) : (
        <>
          <StatusBar style="transparent" />
          <Stack.Navigator
            initialRouteName={initialRouteName}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}
