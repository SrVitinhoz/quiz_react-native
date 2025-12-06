import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import globalStyles from '../styles/globalStyles';

const tips = [
  { id: 'componentes', title: 'Componentes' },
  { id: 'jsx', title: 'JSX' },
  { id: 'hooks', title: 'Hooks' },
  { id: 'navegacao', title: 'Navegação' },
  { id: 'apis', title: 'APIs Nativas' },
  { id: 'estilos', title: 'Estilos' },
];

export default function DicasScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={[globalStyles.container, styles.container]}>      
      <Text style={styles.title}>Dicas de Estudo</Text>
      <Text style={styles.subtitle}>Escolha um tema para aprender antes de fazer o quiz.</Text>

      <View style={styles.list}>
        {tips.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('DetalheDica', { dicaId: item.id })}
          >
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  list: {
    gap: 14,
  },
  card: {
    backgroundColor: '#2f95dc',
    padding: 16,
    borderRadius: 10,
  },
  cardText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
});
