import {
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Dtext, Dview } from "react-native-ui-doj";
import { COLORS, SIZES } from "../constants/Theme";

const Loader = ({ visible = false }) => {
  const { width, height } = useWindowDimensions();
  return (
    visible && (
      <Dview h={height + SIZES.statusbar} w={width} style={styles.container}>
        <Dview
          h={70}
          bg={COLORS.white}
          mx={50}
          br={5}
          flex="row"
          items="center"
          px={20}
          style={styles.loader}
        >
          <ActivityIndicator size="large" color={COLORS.blue} />
          <Dtext ml={10} fs={16}>
            Loading...
          </Dtext>
        </Dview>
      </Dview>
    )
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
});
