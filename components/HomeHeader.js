import { StyleSheet } from "react-native";
import React from "react";
import { Dbutton, Dimage, Dtext, Dview } from "react-native-ui-doj";
import { COLORS, IMAGES, SIZES } from "../constants/Theme";

const HomeHeader = () => {
  return (
    <Dview style={styles.container}>
      <Dview style={styles.innerContainer}>
        <Dview style={styles.left}>
          <Dtext fs={SIZES.h3} fc={COLORS.grey} fw="bold">
            DOJ UI
          </Dtext>
          <Dtext fs={SIZES.h2} fc={"pink"} fw="bold" mt={10}>
            Best {"\n"}
            React Native{"\n"}
            UI Library
          </Dtext>
          <Dbutton bg={COLORS.light} p={10} w="90%" my={10}>
            <Dtext
              fs={18}
              fc={COLORS.blue}
              fw="bold"
              style={{ textAlign: "center" }}
            >
              CHECK NOW
            </Dtext>
          </Dbutton>
        </Dview>
        <Dview style={styles.right}>
          <Dimage src={IMAGES.doj} h={200} w={120} br={10} />
        </Dview>
      </Dview>
    </Dview>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    height: 220,
    marginTop: 50,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    paddingHorizontal: 10,
    borderColor: COLORS.blue,
  },
  innerContainer: {
    backgroundColor: COLORS.darkBlue,
    height: "100%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
