import { StyleSheet, Keyboard, Alert } from "react-native";
import React, { useState } from "react";
import { DformContainer, Dtext, Dview } from "react-native-ui-doj";
import { COLORS, SIZES } from "../constants/Theme";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import Loader from "../components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
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
    }

    // validate Password
    if (!inputs.password) {
      handleError("Please input Password", "password");
      valid = false;
    }
    // if validation is passed
    if (valid) {
      login();
    }
  };

  // login Func
  const login = async () => {
    setLoading(true);

    setTimeout(async () => {
      setLoading(false);

      // get user info from storage
      let userData = await AsyncStorage.getItem("user");
      if (userData) {
        //   convert back to obj
        userData = JSON.parse(userData);
        // compare
        if (
          inputs.email == userData.email &&
          inputs.password == userData.password
        ) {
          AsyncStorage.setItem(
            "user",
            JSON.stringify({ ...userData, loggedIn: true })
          );
          navigation.navigate("Home");
        } else {
          Alert.alert("Error", "Invalid details");
        }
      } else {
        Alert.alert("Error", "User does not exist");
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
          Login
        </Dtext>
        <Dtext fc={COLORS.grey} fs={SIZES.h4} my={10}>
          Enter Your Details to Login
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
          <Button title="Login" onPress={validate} />
          <Dtext
            fc={COLORS.black}
            fs={16}
            text="center"
            onPress={() => navigation.navigate("Register")}
          >
            Don't have an account ? Register
          </Dtext>
        </Dview>
      </Dview>
    </DformContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
