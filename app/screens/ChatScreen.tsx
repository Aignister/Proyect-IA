import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// --- Datos de Conversación Personalizados (SIMULACIÓN) ---
const customChatMessages = {
  'Vocales y Sonidos': [
    { id: '1', text: 'Ahora juguemos con las vocales. Repite conmigo: A, E', time: '10:00', isBot: true },
    { id: '2', text: 'A, E, I, O, U.', time: '10:01', isBot: false },
    { id: '3', text: '¡Excelente! ¿Con qué vocal empieza "oso"?', time: '10:01', isBot: true },
    { id: '4', text: '¡Con O!', time: '10:01', isBot: false },
    { id: '5', text: '¡Muy bien! Yo soy un Osito feliz.', time: '10:01', isBot: true },
  ],
  'Identificación de Colores': [
    { id: '1', text: 'Hoy aprenderemos los colores. ¿De qué color es el sol?', time: '11:05', isBot: true },
    { id: '2', text: '¡Amarillo!', time: '11:06', isBot: false },
    { id: '3', text: '¡Correcto! ¿De qué color es el Osito?', time: '11:06', isBot: true },
    { id: '4', text: 'Es morado y lila.', time: '11:07', isBot: false },
    { id: '5', text: '¡Genial! Tienes buen ojo.', time: '11:07', isBot: true },
  ],
  'Nombres de Figuras': [
    { id: '1', text: 'Vamos a dibujar. ¿Cuántos lados tiene un círculo?', time: '13:30', isBot: true },
    { id: '2', text: '¡Cero!', time: '13:31', isBot: false },
    { id: '3', text: '¡Eso es! ¿Y un triángulo? Cuéntalos.', time: '13:31', isBot: true },
    { id: '4', text: 'Tiene 3.', time: '13:32', isBot: false },
  ],
  'Aprendiendo Números': [
    { id: '1', text: 'Contemos hasta 5. ¿Qué número sigue del 2?', time: '14:00', isBot: true },
    { id: '2', text: 'El número 3.', time: '14:01', isBot: false },
    { id: '3', text: 'Muy bien. Si tienes 4 manzanas y comes 1, ¿cuántas quedan?', time: '14:01', isBot: true },
    { id: '4', text: 'Quedan 3 manzanas.', time: '14:02', isBot: false },
  ],
  // Fallback si no encuentra el tema
  'default': [
    { id: '1', text: '¡Bienvenido al chat!', time: '09:00', isBot: true },
    { id: '2', text: 'Esta es una charla de ejemplo.', time: '09:01', isBot: true },
  ],
};

// Componente para mensaje
const MessageBubble = ({ text, time, isBot }) => (
  <View style={[styles.messageContainer, isBot ? styles.botContainer : styles.userContainer]}>
    <View style={[styles.bubble, isBot ? styles.botBubble : styles.userBubble]}>
      <Text style={[styles.messageText]}>{text}</Text>
      <Text style={styles.timeText}>{time}</Text>
    </View>
  </View>
);

export default function ChatScreen() {
  const { topic } = useLocalSearchParams();
  const screenTitle = topic ? `Historial de\n${topic}` : 'Historial de Conversación';
  
  // Selecciona los mensajes basados en el tema
  const chatMessages = customChatMessages[topic] || customChatMessages['default'];

  return (
    <SafeAreaView style={styles.safeArea}>
      
      {/* El color de fondo lila de la imagen final */}
      <View style={styles.colorfulBackground} /> 

      {/* --- Encabezado --- */}
      <View style={styles.header}>
        {/* Botón de inicio (Home) */}
        <TouchableOpacity onPress={() => router.push('/screens/HomeScreen')} style={styles.homeButton}>
          <Ionicons name="home-outline" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>{screenTitle}</Text>
      </View>

      {/* --- Lista de Mensajes --- */}
      <ScrollView contentContainerStyle={styles.messageList}>
        {chatMessages.map(msg => (
          <MessageBubble 
            key={msg.id} 
            text={msg.text} 
            time={msg.time} 
            isBot={msg.isBot} 
          />
        ))}
      </ScrollView>
      
      {/* --- Footer (Entrada de Voz y Texto) --- */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.micButton}>
          <Ionicons name="mic-outline" size={30} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.textInputArea}>
          <Text style={styles.inputPlaceholder}>Escribe o habla...</Text>
          <Ionicons name="arrow-up-circle" size={30} color="#C5A3D3" style={styles.sendIcon}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E0BBE4',
  },
  colorfulBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#E0BBE4', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  homeButton: {
    padding: 10,
    marginRight: 10,
    marginTop: 40, 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    flexShrink: 1,
    lineHeight: 30, 
    marginTop: 40,
  },

  messageList: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  messageContainer: {
    maxWidth: '80%',
    marginVertical: 10,
  },
  botContainer: {
    alignSelf: 'flex-start',
  },
  userContainer: {
    alignSelf: 'flex-end',
  },
  bubble: {
    padding: 12,
    borderRadius: 15,
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingRight: 15,
  },
  botBubble: {
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 5,
  },
  userBubble: {
    backgroundColor: '#A8D8A8',
    borderBottomRightRadius: 5,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
    marginRight: 10,
    flexShrink: 1,
  },
  timeText: {
    fontSize: 10,
    color: '#666',
    alignSelf: 'flex-end', 
  },


  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 55,
  },
  micButton: {
    backgroundColor: '#957DAD',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  textInputArea: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  inputPlaceholder: {
    color: '#999',
    fontSize: 16,
  },
  sendIcon: {
  }
});