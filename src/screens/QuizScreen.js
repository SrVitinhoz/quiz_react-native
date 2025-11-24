import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import questions from '../data/questions';

export default function QuizScreen({ navigation }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  function handleAnswerPress(optionIndex) {
    // salva resposta
    const updated = [...answers];
    updated[current] = optionIndex;
    setAnswers(updated);

    // se for a última pergunta, vai para resultado
    if (current === questions.length - 1) {
      navigation.navigate('Resultados', { answers: updated });
    } else {
      // senão avança automaticamente
      setCurrent(current + 1);
    }
  }

  const q = questions[current];

  return (
    <View style={styles.container}>
      <Text style={styles.questionNumber}>Pergunta {current + 1} de {questions.length}</Text>
      <Text style={styles.questionText}>{q.question}</Text>

      {q.options.map((opt, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionButton}
          onPress={() => handleAnswerPress(index)}
        >
          <Text style={styles.optionText}>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  questionNumber: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
