import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dcard, Dinput, Dtext, Dview } from "react-native-ui-doj";
import { COLORS, SIZES } from "../constants/Theme";

const Header = () => {
  return (
    <Dview style={styles.container} mt={SIZES.statusbar} px={SIZES.padding}>
      <Dcard
        mb={20}
        br={10}
        px={15}
        mr={15}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContemt: "space-between",
          flex: 1,
        }}
      >
        <Dinput
          w={"90%"}
          style={{ borderBottomWidth: 0 }}
          placeholder="search fish, tomato, bread, etc"
          fs={16}
        />
        <Dtext>Icon</Dtext>
      </Dcard>
      <Dtext>Icon2</Dtext>
    </Dview>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // marginTop: SIZES.statusbar,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: COLORS.lightText,
    marginBottom: 20,
  },
});
