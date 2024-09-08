import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Pokemon",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "ellipse" : "ellipse-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="moves"
        options={{
          title: "Moves",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "ellipse" : "ellipse-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="abilities"
        options={{
          title: "Abilities",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "ellipse" : "ellipse-outline"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
