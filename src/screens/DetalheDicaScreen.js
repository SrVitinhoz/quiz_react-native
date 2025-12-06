import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import globalStyles from '../styles/globalStyles';
import dicas from '../data/dicas.json';

export default function DetalheDicaScreen({ route }) {
  const { dicaId } = route.params;
  const [dica, setDica] = useState(null);

  useEffect(() => {
    const encontrada = dicas.find((item) => item.id === dicaId);
    setDica(encontrada || null);
  }, [dicaId]);

  if (!dica) {
    return (
      <View style={[globalStyles.container, styles.center]}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Carregando conteúdo...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={[globalStyles.container, styles.container]}>
      <Text style={styles.title}>📘 {dica.titulo}</Text>

      <View style={styles.card}>
        <Text style={styles.content}>{dica.conteudo}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#444',
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
    fontStyle: 'italic',
  },

  card: {
    backgroundColor: '#ffffffee',
    padding: 18,
    borderRadius: 16,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 7,
    elevation: 6,
  },

  content: {
    fontSize: 17,
    lineHeight: 25,
    color: '#333',
  },

  footerNote: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 15,
    opacity: 0.7,
    fontStyle: 'italic',
  },
});
