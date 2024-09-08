import MovesList from "@/components/pages/moves/MovesList";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";

export default function Moves() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <MovesList />
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
