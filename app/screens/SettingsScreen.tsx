import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

// Componente reutilizable
const SettingCard = ({ title, subtitle, iconName, value, onValueChange }) => (
  <View style={styles.settingCard}>
    <View style={styles.cardContent}>
      <Ionicons name={iconName} size={24} color="#333" style={styles.cardIcon} />
      
      <View style={styles.textGroup}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
    </View>
    
    <Switch
      trackColor={{ false: "#767577", true: "#957DAD" }} 
      thumbColor={value ? "#FFF" : "#f4f3f4"}
      onValueChange={onValueChange}
      value={value}
      style={styles.switch}
    />
  </View>
);


export default function SettingsScreen() {
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [micEnabled, setMicEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.colorfulBackground} />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Encabezado */}
        <View style={styles.header}>
            {/* Botón de inicio */}
            <TouchableOpacity onPress={() => router.push('/screens/HomeScreen')} style={styles.homeButton}>
              <Ionicons name="home-outline" size={30} color="#333" />
            </TouchableOpacity>
            
            <Text style={styles.title}>Configuración</Text>
        </View>

        {/* Tarjeta de Cámara */}
        <SettingCard
          title="Cámara"
          subtitle="Desactivar | Activar"
          iconName="videocam-outline"
          value={cameraEnabled}
          onValueChange={setCameraEnabled}
        />

        {/* Tarjeta de Voz */}
        <SettingCard
          title="Voz"
          subtitle="Desactivar | Activar"
          iconName="volume-medium-outline"
          value={voiceEnabled}
          onValueChange={setVoiceEnabled}
        />

        {/* Tarjeta de Micrófono */}
        <SettingCard
          title="Micrófono"
          subtitle="Desactivar | Activar"
          iconName="mic-outline"
          value={micEnabled}
          onValueChange={setMicEnabled}
        />
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0BBE4', // Fondo lila principal
  },
  // SIMULACIÓN DE FONDO DE BURBUJAS
  colorfulBackground: {
    ...StyleSheet.absoluteFillObject,
    // Puedes usar una imagen aquí, o simular con colores de fondo y opacidades
    backgroundColor: '#E0BBE4', // Base
    // Las tarjetas blancas flotan sobre este color base
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  // ESTILOS DE CABECERA (Consistentes con LearningHistoryScreen)
  header: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
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
  // --- Estilos de Tarjetas de Configuración ---
  settingCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)', // Fondo casi blanco
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Permite que el contenido tome el espacio restante
  },
  cardIcon: {
    marginRight: 15,
  },
  textGroup: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  switch: {
    // Estilos por defecto del Switch
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], // Para hacerlo un poco más grande
  },
});