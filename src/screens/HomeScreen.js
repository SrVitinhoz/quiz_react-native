import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text style={styles.title}>Bem-vindo ao RNQuizLearn</Text>
      <Text style={styles.subtitle}>
        Um quiz de 10 perguntas para aprender conceitos básicos de React Native.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Quiz')}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Iniciar Quiz</Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        Duração estimada: 5–10 minutos. Boa sorte!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#2f95dc',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  note: {
    marginTop: 16,
    textAlign: 'center',
    color: '#666'
  }
});
