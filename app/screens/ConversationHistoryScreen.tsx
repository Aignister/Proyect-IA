import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Datos de ejemplo simulando sesiones de conversación por tema
const conversationTopics = [
  { id: '1', title: 'Vocales y Sonidos', date: '25/08/2025', icon: 'volume-high-outline' },
  { id: '2', title: 'Identificación de Colores', date: '24/08/2025', icon: 'color-palette-outline' },
  { id: '3', title: 'Nombres de Figuras', date: '23/08/2025', icon: 'shapes-outline' },
  { id: '4', title: 'Aprendiendo Números', date: '22/08/2025', icon: 'calculator-outline' },
  { id: '5', title: 'Animales', date: '21/08/2025', icon: 'paw-outline' },
];

const TopicItem = ({ title, date, icon }) => (
  <TouchableOpacity 
    style={styles.topicItem}
    // Pantalla de chat simulado
    onPress={() => router.push({ pathname: '/screens/ChatScreen', params: { topic: title } })}
  >
    <Ionicons name={icon} size={24} color="#957DAD" style={styles.icon} />
    <View style={styles.textContainer}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemDate}>Última vez: {date}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#999" />
  </TouchableOpacity>
);

export default function ConversationHistoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Botón de inicio */}
        <TouchableOpacity onPress={() => router.push('/screens/HomeScreen')} style={styles.homeButton}>
          <Ionicons name="home-outline" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Historial de Charlas</Text>
      </View>
      
      <FlatList
        data={conversationTopics}
        renderItem={({ item }) => (
          <TopicItem title={item.title} date={item.date} icon={item.icon} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0BBE4',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 30,
    position: 'relative',
  },
  homeButton: {
    padding: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    flexShrink: 1,
  },
  listContent: {
    paddingHorizontal: 15,
  },
  topicItem: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  itemDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
});