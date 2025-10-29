import { Ionicons } from '@expo/vector-icons'; // Necesitarás instalar esta librería si no la tienes
import { router } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Componente reutilizable
const NavBubble = ({ title, iconName, targetScreen }) => (
  <TouchableOpacity
    style={styles.bubble}
    onPress={() => router.push(targetScreen)}
  >
    <Ionicons name={iconName} size={60} color="#8D86C9" />
    <Text style={styles.bubbleText}>{title}</Text>
  </TouchableOpacity>
);

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Configuraciones</Text>
      
      <View style={styles.bubblesContainer}>
        {/* Navega a SettingsScreen */}
        <NavBubble
          title="Configuración"
          iconName="settings-outline"
          targetScreen="/screens/SettingsScreen"
        />

        {/* Navega a LearningHistoryScreen */}
        <NavBubble
          title="Historial de aprendizaje"
          iconName="book-outline"
          targetScreen="/screens/LearningHistoryScreen"
        />

        {/* Navega a ConversationHistoryScreen */}
        <NavBubble
          title="Historial de conversación"
          iconName="chatbubbles-outline"
          targetScreen="/screens/ConversationHistoryScreen"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0BBE4',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8D86C9',
    marginBottom: 40,
    textAlign: 'center',
  },
  bubblesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  bubble: {
    width: '45%',
    aspectRatio: 1, 
    backgroundColor: '#FFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  bubbleText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});