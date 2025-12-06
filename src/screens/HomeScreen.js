import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text style={styles.title}>🎮 RNQuizLearn</Text>
      <Text style={styles.subtitle}>
        Prepare-se para evoluir suas habilidades! Escolha sua próxima missão:
      </Text>

      <View style={styles.card}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={() => navigation.navigate('Quiz')}
            activeOpacity={0.85}
          >
            <Text style={styles.buttonText}>▶ Iniciar Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => navigation.navigate('Dicas')}
            activeOpacity={0.85}
          >
            <Text style={styles.buttonText}>📘 Dicas</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.note}>💡 Complete desafios e avance seu nível!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    color: '#444',
  },

  card: {
    backgroundColor: '#ffffffdd',
    padding: 20,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },

  buttonGroup: {
    gap: 16,
  },

  button: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },

  primaryButton: {
    backgroundColor: '#2f95dc',
  },

  secondaryButton: {
    backgroundColor: '#444',
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },

  note: {
    marginTop: 20,
    textAlign: 'center',
    color: '#555',
    fontStyle: 'italic',
  },
});
