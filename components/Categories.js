import { StyleSheet, FlatList } from "react-native";
import React from "react";
import { Dbutton, Dcard, Dtext, Dview } from "react-native-ui-doj";
import { COLORS } from "../constants/Theme";
import { CATEGORIES } from "../data";

const Categories = () => {
  const Item = ({ id, name, icon }) => (
    <Dview w={"21%"} mx="2%" my={15}>
      <Dbutton bw={1} bc={COLORS.lightText} br={13} p={10}>
        <Dtext>Icon</Dtext>
      </Dbutton>
      <Dtext style={{ textAlign: "center" }}>{name}</Dtext>
    </Dview>
  );
  const renderItem = ({ item }) => (
    <Item id={item.id} name={item.name} icon={item.icon} />
  );
  return (
    <Dview style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={4}
      />
    </Dview>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 10,
    borderTopWidth: 1,
    borderColor: COLORS.lightText,
    marginBottom: 20,
  },
});
