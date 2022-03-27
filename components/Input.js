import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { Dtext, Dview } from "react-native-ui-doj";
import { COLORS, SIZES } from "../constants/Theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(password);
  return (
    <Dview mb={20}>
      <Dtext my={5} fs={SIZES.font} fc={COLORS.grey}>
        {label}
      </Dtext>
      <Dview
        h={55}
        bg={COLORS.light}
        flex="row"
        px={15}
        bw={1}
        items="center"
        bc={error ? COLORS.red : isFocused ? COLORS.darkBlue : COLORS.light}
      >
        <Icon
          name={iconName}
          style={{ fontSize: 22, color: COLORS.darkBlue, marginRight: 10 }}
        />
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          style={{ color: COLORS.darkBlue, flex: 1 }}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={{ fontSize: 22, color: COLORS.darkBlue }}
          />
        )}
      </Dview>
      {error && (
        <Dtext fc={COLORS.red} fs={12} mt={7}>
          {error}
        </Dtext>
      )}
    </Dview>
  );
};

export default Input;

const styles = StyleSheet.create({});
