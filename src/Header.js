import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ name }) => {
  return (
    <TouchableOpacity
      hitSlop={{ top: 15, bottom: 15 }}
      style={{ paddingHorizontal: 6 }}
    >
      <Ionicons name={name} size={24} color="black" />
    </TouchableOpacity>
  );
};

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>친구</Text>

      <View style={{ flexDirection: "row" }}>
        <IconButton name="search-outline" />

        <IconButton name="person-add-outline" />
        <IconButton name="musical-notes-outline" size={24} color="black" />
        <Ionicons name="settings-outline" size={24} color="black" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
