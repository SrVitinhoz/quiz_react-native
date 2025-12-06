import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text style={styles.title}>Bem-vindo ao RNQuizLearn</Text>
      <Text style={styles.subtitle}>
        Escolha uma das opções abaixo para continuar.
      </Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Quiz')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Iniciar Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate('Dicas')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Dicas antes do Quiz</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.note}>Escolha o que deseja fazer.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonGroup: {
    gap: 14,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#2f95dc',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#4a4a4a',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  note: {
    marginTop: 16,
    textAlign: 'center',
    color: '#666',
  },
});
