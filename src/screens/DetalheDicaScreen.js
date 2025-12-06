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
        <Text style={styles.loadingText}>Carregando dica...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={[globalStyles.container, styles.container]}>
      <Text style={styles.title}>{dica.titulo}</Text>
      <Text style={styles.content}>{dica.conteudo}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
    marginTop: 10,
  },
});
