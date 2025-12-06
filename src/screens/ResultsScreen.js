import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import questions from '../data/questions';

export default function ResultsScreen({ route }) {
  const { answers } = route.params;

  const score = answers.filter((item, index) => {
    return item === questions[index].correctAnswer;
  }).length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado</Text>
      <Text style={styles.score}>Você acertou {score} de 10</Text>

      {/* ScrollView CORRIGIDO */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {questions.map((q, index) => (
          <View key={index} style={styles.questionCard}>
            <Text style={styles.questionText}>
              {index + 1}. {q.question}
            </Text>

            <Text style={styles.userAnswer}>
              Sua resposta: {
                answers[index] !== undefined
                  ? q.options[answers[index]]
                  : "—"
              }
            </Text>

            <Text style={styles.correctAnswer}>
              Resposta correta: {q.options[q.answerIndex]}
            </Text>
          </View>
        ))}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scroll: {
    flex: 1,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  score: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
  },
  questionCard: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  questionText: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '600',
  },
  userAnswer: {
    marginBottom: 4,
    color: '#333',
  },
  correctAnswer: {
    fontWeight: '700',
    color: '#000',
  },
});
