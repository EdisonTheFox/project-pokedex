import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";

export default function Pokedex() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.text}>Pokemon Page!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 32,
    gap: 16,
    overflow: "hidden",
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});
