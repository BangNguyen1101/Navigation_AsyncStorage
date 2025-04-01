import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const storedLoginState = await AsyncStorage.getItem('LOGIN_KEY');
                if (storedLoginState) {
                    setIsLoggedIn(JSON.parse(storedLoginState));
                }
            } catch (error) {
                console.error('Error loading login status:', error);
            }
            setIsLoading(false);
        };

        checkLoginStatus();
    }, []);

    const login = async () => {
        try {
            await AsyncStorage.setItem('LOGIN_KEY', JSON.stringify(true));
            setIsLoggedIn(true);
        } catch (error) {
            console.error('Error saving login status:', error);
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('LOGIN_KEY');
            setIsLoggedIn(false);
        } catch (error) {
            console.error('Error removing login status:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
