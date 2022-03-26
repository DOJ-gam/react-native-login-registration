import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { DformContainer } from "react-native-ui-doj";
import HomeHeader from "../../components/HomeHeader";
import Categories from "../../components/Categories";

const Home = () => {
  return (
    <DformContainer style={styles.container}>
      <Header />
      <HomeHeader />
      <Categories />
    </DformContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 10,
  },
});
