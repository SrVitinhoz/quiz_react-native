import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ProgressBar({ current, total }) {
  const pct = Math.max(0, Math.min(1, current / total));
  return (
    <View style={styles.container}>
      <View style={[styles.fill, { flex: pct }]} />
      <View style={[styles.empty, { flex: 1 - pct }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 8,
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 8
  },
  fill: {
    backgroundColor: '#2f95dc'
  },
  empty: {
    backgroundColor: 'transparent'
  }
});
