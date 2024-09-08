import { Text, StyleSheet } from "react-native";
export default function PokemonList() {
  return (
    <>
      <Text style={styles.text}>Pokemon Page!</Text>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});
