import { StyleSheet } from "react-native";
import React from "react";
import { DformContainer, Dtext, Dview } from "react-native-ui-doj";
import { COLORS, SIZES } from "../constants/Theme";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();
  const validate = () => {};

  return (
    <DformContainer style={styles.container}>
      <Dtext fc={COLORS.black} fs={SIZES.h1} fw="bold">
        Register
      </Dtext>
      <Dtext fc={COLORS.grey} fs={SIZES.h4} my={10}>
        Enter Your Details to Register
      </Dtext>
      <Dview my={20}>
        <Input
          label="Email"
          iconName="email-outline"
          placeholder="Enter your email address"
          // error="Input email"
        />
        <Input
          label="Fullname"
          iconName="account-outline"
          placeholder="Enter your Fullname"
          // error="Input email"
        />
        <Input
          label="Phone Number"
          iconName="phone-outline"
          placeholder="Enter your Phone Nummber"
          // error="Input email"
        />
        <Input
          label="Password"
          iconName="lock-outline"
          placeholder="Enter your password"
          password
          // error="Input email"
        />
        <Button title="Register" onPress={validate} />
        <Dtext
          fc={COLORS.black}
          fs={16}
          text="center"
          onPress={() => navigation.navigate("Login")}
        >
          Already have an account ? Login
        </Dtext>
      </Dview>
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
