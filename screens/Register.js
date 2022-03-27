import { StyleSheet, Keyboard, Alert } from "react-native";
import React, { useState } from "react";
import { DformContainer, Dtext, Dview } from "react-native-ui-doj";
import { COLORS, SIZES } from "../constants/Theme";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import Loader from "../components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = () => {
  const navigation = useNavigation();

  // states
  const [inputs, setInputs] = useState({
    email: "",
    fullname: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  // validate func
  const validate = () => {
    // hide keyboard
    Keyboard.dismiss();
    //initialize form validity
    let valid = true;

    // Validate Email
    if (!inputs.email) {
      handleError("Please input email", "email");
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input valid email", "email");
      valid = false;
    }
    // validate fullname
    if (!inputs.fullname) {
      handleError("Please input Fullname", "fullname");
      valid = false;
    }
    // validate Phone Numner
    if (!inputs.phone) {
      handleError("Please input Phone", "phone");
      valid = false;
    }
    // validate Password
    if (!inputs.password) {
      handleError("Please input Password", "password");
      valid = false;
    } else if (inputs.password.length < 5) {
      handleError("Min password length is 5", "password");
      valid = false;
    }

    // if validation is passed
    if (valid) {
      register();
    }
  };

  // Register Func
  const register = async () => {
    setLoading(true);

    setTimeout(async () => {
      setLoading(false);

      try {
        await AsyncStorage.setItem("user", JSON.stringify(inputs));
        navigation.navigate("Login");
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
      }
    }, 3000);
  };

  // handleChange func
  const handleOnChange = (text, input) => {
    setInputs((prev) => ({ ...prev, [input]: text }));
  };

  // handleError func
  const handleError = (errorMessage, input) => {
    setErrors((prev) => ({ ...prev, [input]: errorMessage }));
  };

  return (
    <DformContainer>
      <Dview style={styles.container}>
        <Loader visible={loading} />
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
            onChangeText={(text) => handleOnChange(text, "email")}
            error={errors.email}
            onFocus={() => {
              handleError(null, "email");
            }}
          />
          <Input
            label="Fullname"
            iconName="account-outline"
            placeholder="Enter your Fullname"
            onChangeText={(text) => handleOnChange(text, "fullname")}
            error={errors.fullname}
            onFocus={() => {
              handleError(null, "fullname");
            }}
          />
          <Input
            keyboardType="numeric"
            label="Phone Number"
            iconName="phone-outline"
            placeholder="Enter your Phone Nummber"
            onChangeText={(text) => handleOnChange(text, "phone")}
            error={errors.phone}
            onFocus={() => {
              handleError(null, "phone");
            }}
          />
          <Input
            label="Password"
            iconName="lock-outline"
            placeholder="Enter your password"
            password
            onChangeText={(text) => handleOnChange(text, "password")}
            error={errors.password}
            onFocus={() => {
              handleError(null, "password");
            }}
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
