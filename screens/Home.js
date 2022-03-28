import React from "react";
import { StyleSheet } from "react-native";
import { Dtext, Dview } from "react-native-ui-doj";
import HomeHeader from "../components/HomeHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../components/Button";
const Home = ({ navigation }) => {
  const [userDetails, setUserDetails] = React.useState();

  React.useEffect(() => {
    getUserDetails();
  }, []);

  const logout = () => {
    AsyncStorage.setItem(
      "user",
      JSON.stringify({ ...userDetails, loggedIn: false })
    );
    navigation.navigate("Login");
  };

  const getUserDetails = async () => {
    const userData = await AsyncStorage.getItem("user");
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };
  return (
    <Dview style={styles.container}>
      <HomeHeader />
      <Dtext fs={40} mt={20} text="center" fw="bold">
        Welcome {userDetails?.fullname}
      </Dtext>
      <Button title="logout" onPress={logout} />
    </Dview>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
