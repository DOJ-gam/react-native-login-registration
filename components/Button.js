import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../constants/Theme";
import { Dtext } from "react-native-ui-doj";
import { useNavigation } from "@react-navigation/native";

const Button = ({ title, onPress = () => {} }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        height: 55,
        width: "100%",
        backgroundColor: COLORS.blue,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
      }}
    >
      <Dtext fc={COLORS.white} fw="bold" fs={18}>
        {title}
      </Dtext>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
