import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import ResultsScreen from '../screens/ResultsScreen';
import DicasScreen from '../screens/DicasScreen';
import DetalheDicaScreen from '../screens/DetalheDicaScreen';

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

      <Stack.Screen
        name="Resultados"
        component={ResultsScreen}
        options={{ title: 'Resultados' }}
      />

      <Stack.Screen
        name="Dicas"
        component={DicasScreen}
        options={{ title: 'Dicas' }}
      />

      <Stack.Screen
        name="DetalheDica"
        component={DetalheDicaScreen}
        options={{ title: 'Dica' }}
      />
    </Stack.Navigator>
  );
}
