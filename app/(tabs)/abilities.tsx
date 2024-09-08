import AbilitiesList from "@/components/pages/abilities/AbilitiesList";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function Abilities() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <AbilitiesList />
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
});
