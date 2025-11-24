import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function QuestionCard({
  question,
  options,
  selected,
  onSelect,
  disabled
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.questionText}>{question}</Text>
      {options.map((opt, idx) => {
        const isSelected = selected === idx;
        return (
          <TouchableOpacity
            key={idx}
            style={[
              styles.optionButton,
              isSelected ? styles.optionSelected : null
            ]}
            onPress={() => onSelect(idx)}
            disabled={disabled}
            activeOpacity={0.7}
          >
            <Text style={styles.optionText}>{opt}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    marginVertical: 12
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12
  },
  optionButton: {
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 8
  },
  optionSelected: {
    borderColor: '#2f95dc',
    backgroundColor: '#e8f0ff'
  },
  optionText: {
    fontSize: 16
  }
});
