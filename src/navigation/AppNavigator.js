import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import ResultsScreen from '../screens/ResultsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Quiz' }}
      />

      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ title: 'Quiz - Conceitos Básicos' }}
      />

      {/* AQUI ESTÁ O AJUSTE PRINCIPAL */}
      <Stack.Screen
        name="Resultados"   // <-- nome precisa ser este
        component={ResultsScreen}
        options={{ title: 'Resultados' }}
      />
    </Stack.Navigator>
  );
}
