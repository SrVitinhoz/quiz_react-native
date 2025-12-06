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
  { id: 'estado', title: 'Gerenciamento de Estado' },
  { id: 'listas', title: 'Renderização de Listas' },
  { id: 'animacoes', title: 'Animações' },
  { id: 'performance', title: 'Performance' },
  { id: 'armazenamento', title: 'Armazenamento Local' },
  { id: 'expo_ou_cli', title: 'Expo vs React Native CLI' },
  { id: 'debug', title: 'Debug e Ferramentas' },
  { id: 'acessibilidade', title: 'Acessibilidade' },
  { id: 'variaveis_de_ambiente', title: 'Variáveis de Ambiente' },
  { id: 'apis_http', title: 'Requisições HTTP' },
];

export default function DicasScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={[globalStyles.container, styles.container]}>
      <Text style={styles.title}>📚 Área de Treinamento</Text>
      <Text style={styles.subtitle}>
        Escolha um módulo para se preparar antes dos desafios!
      </Text>

      <View style={styles.list}>
        {tips.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('DetalheDica', { dicaId: item.id })}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>Toque para iniciar o estudo</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    color: '#444',
  },

  list: {
    gap: 18,
  },

  card: {
    backgroundColor: '#2f95dc',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 14,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,

    alignItems: 'center',
  },

  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
  },

  cardSubtitle: {
    color: '#e6e6e6',
    fontSize: 13,
    opacity: 0.9,
  },
});
