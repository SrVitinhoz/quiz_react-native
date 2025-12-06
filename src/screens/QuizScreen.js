import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import QUESTIONS from '../data/questions';

export default function QuizScreen({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 10);
    setQuestions(selected);
  }, []);

  if (questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 18}}>Carregando perguntas...</Text>
      </View>
    );
  }

  function handleAnswerPress(optionIndex) {
    const updated = [...answers];
    updated[current] = optionIndex;
    setAnswers(updated);

    if (current === questions.length - 1) {
      navigation.navigate('Resultados', { answers: updated, questions });
    } else {
      setCurrent(current + 1);
    }
  }

  const q = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  return (
    <View style={styles.container}>
      {/* Barra de Progresso */}
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>

      <Text style={styles.stageText}>🔥 Fase {current + 1}</Text>

      <View style={styles.questionBox}>
        <Text style={styles.questionTitle}>Pergunta {current + 1}</Text>
        <Text style={styles.questionText}>{q.question}</Text>
      </View>

      <View style={styles.optionsContainer}>
        {q.options.map((opt, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            activeOpacity={0.85}
            onPress={() => handleAnswerPress(index)}
          >
            <Text style={styles.optionText}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4ff',
  },

  // Barra de progresso
  progressBarBackground: {
    height: 14,
    width: '100%',
    backgroundColor: '#d6d6d6',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#4f6cff',
  },

  stageText: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },

  questionBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 20,
  },

  questionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
    color: '#4f6cff',
  },

  questionText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },

  optionsContainer: {
    marginTop: 10,
  },

  optionButton: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#4f6cff',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },

  optionText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
});
