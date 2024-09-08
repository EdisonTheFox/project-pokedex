import { Text, StyleSheet } from "react-native";

export default function AbilitiesList() {
  return (
    <>
      <Text style={styles.text}>Abilities Page!</Text>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});
