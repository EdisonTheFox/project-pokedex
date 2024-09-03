import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";

export default function Abilities() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.text}>Abilities Page!</Text>
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
