import React from 'react';
import { View, Button } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import AuthStackNavigator from './src/router/AuthStackNavigator';

export default function App() {
  return (
    <AuthProvider>
      <View style={{ flex: 1 }}>
        <AuthStackNavigator />
      </View>
    </AuthProvider>
  );
}
