import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import IconButton from '../../components/IconButton';
import { AuthContext } from '../../context/AuthContext';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSignIn = () => {
    login(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <CustomTextInput label="Email ID" placeholder="Enter your email here!" value={email} onChangeText={setEmail} />
      <CustomTextInput label="Password" placeholder="Enter your password here!" secureTextEntry value={password} onChangeText={setPassword} />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orSignInText}>Or sign in with</Text>

      <View style={styles.socialButtons}>
        <IconButton title="Google" icon={require('../../assets/google.png')} backgroundColor="#DD4B39" />
        <IconButton title="Facebook" icon={require('../../assets/facebook.png')} backgroundColor="#3B5998" />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpText}>Not yet a member? <Text style={styles.signUpLink}>Sign Up</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  forgotPassword: { textAlign: 'right', color: 'orange', marginBottom: 20 },
  signInButton: { backgroundColor: 'orange', padding: 15, borderRadius: 5, alignItems: 'center' },
  signInText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  orSignInText: { textAlign: 'center', marginVertical: 20, fontSize: 14 },
  socialButtons: { flexDirection: 'row', justifyContent: 'center' },
  signUpText: { textAlign: 'center', marginTop: 20, fontSize: 14 },
  signUpLink: { color: 'orange', fontWeight: 'bold' },
});

export default SignInScreen;