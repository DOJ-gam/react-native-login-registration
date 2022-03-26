import { StyleSheet } from "react-native";
import React from "react";
import { Dbutton, Dtext, Dview } from "react-native-ui-doj";
import { COLORS, SIZES } from "../constants/Theme";

const HomeHeader = () => {
  return (
    <Dview style={styles.container}>
      <Dview style={styles.innerContainer}>
        <Dview style={styles.left}>
          <Dtext fs={SIZES.h2} fc={COLORS.white} fw="bold">
            Nduga
          </Dtext>
          <Dtext fs={SIZES.h1} fc={COLORS.white} fw="bold" mt={10}>
            FREE LETTUCE {"\n"}
            ON EVERY {"\n"}
            PURCHASE
          </Dtext>
          <Dbutton bg={COLORS.purple} p={10} w="90%" my={10}>
            <Dtext
              fs={18}
              fc={"white"}
              fw="bold"
              style={{ textAlign: "center" }}
            >
              CHECK NOW
            </Dtext>
          </Dbutton>
        </Dview>
        <Dview style={styles.right}>
          <Dtext>Lettce Image</Dtext>
        </Dview>
      </Dview>
    </Dview>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    height: 220,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    paddingHorizontal: 10,
    borderColor: COLORS.green,
  },
  innerContainer: {
    backgroundColor: COLORS.orange,
    height: "100%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
