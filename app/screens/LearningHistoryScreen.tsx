import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Datos simulados para el progreso y resumen
const learningSummary = {
  daysUsed: 7,
  dailyInteraction: '2h 15 min',
  recommendation: 'Practica más las figuras',
};

const progressData = [
  { topic: 'Vocales', value: 80, color: '#A8D8A8' }, // Verde claro
  { topic: 'Colores', value: 70, color: '#C5A3D3' }, // Lila medio
  { topic: 'Figuras', value: 60, color: '#F0D4D9' }, // Rosa muy claro
  { topic: 'Números', value: 75, color: '#D1CCEC' }, // Lila claro
];

// Componente para la barra de progreso
const ProgressBar = ({ topic, value, color }) => (
  <View style={styles.progressItem}>
    <Text style={styles.progressTopic}>{topic}</Text>
    
    <View style={styles.barContainer}>
      <View style={[styles.barBackground, { backgroundColor: color + '40' }]} /> 
      <View style={[
        styles.barFill, 
        { width: `${value}%`, backgroundColor: color }
      ]} />
    </View>
    
    <Text style={styles.progressValue}>{value}%</Text>
  </View>
);


export default function LearningHistoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.colorfulBackground} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.header}>
            {/* Botón de inicio */}
            <TouchableOpacity onPress={() => router.push('/screens/HomeScreen')} style={styles.homeButton}>
              <Ionicons name="home-outline" size={30} color="#333" />
            </TouchableOpacity>
            
            <Text style={styles.title}>Historial de aprendizaje</Text>
        </View>

        {/* --- 1. Resumen General --- */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Resumen general</Text>
          
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Días de uso</Text>
            <Text style={styles.summaryValue}>{learningSummary.daysUsed}</Text>
          </View>
          
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Tiempo de interacción del día</Text>
            <Text style={styles.summaryValueHighlighted}>{learningSummary.dailyInteraction}</Text>
          </View>
        </View>

        {/* --- 2. Progreso --- */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Progreso</Text>
          
          {progressData.map((data, index) => (
            <ProgressBar
              key={index}
              topic={data.topic}
              value={data.value}
              color={data.color}
            />
          ))}
        </View>

        {/* --- 3. Recomendación --- */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Recomendación</Text>
          <Text style={styles.recommendationText}>{learningSummary.recommendation}</Text>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0BBE4',
  },
  colorfulBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

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
  
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  // --- Resumen General Estilos ---
  summaryItem: {
    alignItems: 'center',
    marginBottom: 15,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  summaryValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  summaryValueHighlighted: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#957DAD',
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  // --- Progreso Estilos ---
  progressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  progressTopic: {
    width: '30%',
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  barContainer: {
    flex: 1,
    height: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  barBackground: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  barFill: {
    height: '100%',
    borderRadius: 10,
  },
  progressValue: {
    width: '10%',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'right',
  },
  // --- Recomendación Estilos ---
  recommendationText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    paddingVertical: 5,
  }
});