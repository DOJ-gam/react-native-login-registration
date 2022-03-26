import { StyleSheet } from "react-native";
import React from "react";
import { DformContainer, Dtext, Dview } from "react-native-ui-doj";
import { COLORS, SIZES } from "../constants/Theme";

const Register = () => {
  return (
    <DformContainer style={styles.container}>
      <Dtext fc={COLORS.black} fs={SIZES.h1} fw="bold">
        Register
      </Dtext>
      <Dtext fc={COLORS.grey} fs={SIZES.h4} my={10}>
        Enter Your Details to Register
      </Dtext>
      <Dview my={20}></Dview>
    </DformContainer>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
