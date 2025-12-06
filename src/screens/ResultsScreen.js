import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ResultsScreen({ route }) {
  const { answers, questions } = route.params;

  const score = answers.filter((item, index) => 
    item === questions[index].answerIndex
  ).length;

  // Mensagem personalizada
  const getFeedback = () => {
    if (score === questions.length) return "💥 Você é simplesmente um gênio!";
    if (score >= 8) return "🔥 Excelente! Você conhece muito!";
    if (score >= 6) return "😎 Bom trabalho! Continue evoluindo!";
    if (score >= 4) return "🙂 Você está no caminho!";
    return "📘 Não desista! Treine mais e volte mais forte!";
  };

  // Cor dinâmica baseada no desempenho
  const getColor = () => {
    if (score === questions.length) return "#4caf50";
    if (score >= 7) return "#2196f3";
    if (score >= 4) return "#ff9800";
    return "#f44336";
  };

  return (
    <View style={styles.container}>
      
      {/* HEADER GAMIFICADO */}
      <View style={[styles.resultCard, { borderColor: getColor() }]}>
        <Text style={[styles.scoreText, { color: getColor() }]}>
          {score}/{questions.length}
        </Text>
        <Text style={styles.feedback}>{getFeedback()}</Text>
      </View>

      {/* LISTA DETALHADA */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {questions.map((q, index) => {
          const acerto = answers[index] === q.answerIndex;

          return (
            <View key={index} style={styles.questionCard}>
              <Text style={styles.questionText}>
                {index + 1}. {q.question}
              </Text>

              <Text style={[
                styles.userAnswer,
                { color: acerto ? "#4caf50" : "#f44336" }
              ]}>
                Sua resposta: {
                  answers[index] !== undefined
                    ? q.options[answers[index]]
                    : "—"
                }
              </Text>

              {!acerto && (
                <Text style={styles.correctAnswer}>
                  Resposta correta: {q.options[q.answerIndex]}
                </Text>
              )}
            </View>
          );
        })}
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
    marginTop: 20,
  },

  resultCard: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 3,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    marginBottom: 25,
    elevation: 4,
  },

  scoreText: {
    fontSize: 48,
    fontWeight: '900',
  },

  feedback: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },

  questionCard: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
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
    fontSize: 15,
  },

  correctAnswer: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
});
