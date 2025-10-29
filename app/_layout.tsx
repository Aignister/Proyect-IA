import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="screens/LoginScreen" options={{ headerShown: false }} />
      <Stack.Screen name="screens/HomeScreen" options={{ headerShown: false }} />
      <Stack.Screen name="screens/ConversationHistoryScreen" options={{ headerShown: false }} />
      <Stack.Screen name="screens/SettingsScreen" options={{ headerShown: false }} />
      <Stack.Screen name="screens/LearningHistoryScreen" options={{ headerShown: false }} />
      <Stack.Screen name="screens/ChatScreen" options={{ headerShown: false }} />
    </Stack>
  );
}