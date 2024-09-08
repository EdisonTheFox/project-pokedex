import { Text, StyleSheet } from "react-native";

export default function MovesList() {
  return (
    <>
      <Text style={styles.text}>Moves Page!</Text>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});
