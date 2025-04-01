import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';

const ProfileScreen = () => {
    const { logout } = useContext(AuthContext);  // Lấy hàm logout từ AuthContext

    return (
        <SafeAreaView style={styles.container}>
            {/* Phần Header chứa Avatar */}
            <View style={styles.header}>
                <Image 
                    source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} 
                    style={styles.avatar} 
                />
            </View>

            {/* Phần thông tin người dùng */}
            <View style={styles.infoContainer}>
                <Text style={styles.name}>Hung Nguyen</Text>
                <Text style={styles.role}>Mobile developer</Text>
                <Text style={styles.description}>
                    I have above 5 years of experience in native mobile apps development, 
                    now I am learning React Native.
                </Text>

                {/* Button Sign Out */}
                <TouchableOpacity style={styles.signOutButton} onPress={logout}>
                    <Text style={styles.signOutText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f4f4f4' },

    // Header chứa avatar
    header: {
        backgroundColor: '#0099ff',
        height: 120,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: -40
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 3,
        borderColor: 'white',
        marginTop: 20
    },

    // Phần thông tin
    infoContainer: {
        backgroundColor: 'white',
        margin: 20,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3
    },
    name: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
    role: { fontSize: 16, color: 'blue', marginVertical: 5 },
    description: { fontSize: 14, color: 'gray', textAlign: 'center', marginVertical: 10 },

    // Button Sign Out
    signOutButton: {
        backgroundColor: 'orange',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10
    },
    signOutText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});

export default ProfileScreen;
