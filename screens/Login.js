import { StyleSheet } from "react-native";
import React from "react";
import { DformContainer, Dtext, Dview } from "react-native-ui-doj";
import { COLORS } from "../constants/Theme";

const Login = () => {
  return <DformContainer style={styles.container}></DformContainer>;
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
