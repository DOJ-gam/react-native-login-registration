import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DformContainer, Dview } from "react-native-ui-doj";
import HomeHeader from "../components/HomeHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Home = ({ navigation }) => {
  return (
    <Dview style={styles.container}>
      <HomeHeader />
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
