import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Dữ liệu mẫu
const CATEGORIES = [
    { id: '1', name: 'Pizza', image: require('../assets/pizza.png') },
    { id: '2', name: 'Burgers', image: require('../assets/burger.png') },
    { id: '3', name: 'Steak', image: require('../assets/steak.png') }
];

const POPULAR_ITEMS = [
    { id: '1', name: 'Food 1', price: '$1', image: require('../assets/food1.png') },
    { id: '2', name: 'Food 2', price: '$3', image: require('../assets/food2.png') }
];

const SALE_OFF_ITEMS = [
    { id: '1', name: 'Food 3', price: '$2', discount: '10%', image: require('../assets/food3.png') },
    { id: '2', name: 'Food 4', price: '$4', discount: '15%', image: require('../assets/food4.png') },
];

const SectionHeader = ({ title, onViewAll }) => (
    <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity onPress={onViewAll}>
            <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
    </View>
);

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Explorer</Text>
                <Ionicons name="filter-outline" size={24} color="black" />
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={20} color="gray" />
                <TextInput style={styles.searchInput} placeholder="Search for meals or area" />
            </View>

            {/* Top Categories */}
            <SectionHeader title="Top Categories" onViewAll={() => {}} />
            <FlatList
                data={CATEGORIES}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.categoryItem}>
                        <Image source={item.image} style={styles.categoryImage} />
                        <Text>{item.name}</Text>
                    </View>
                )}
            />

            {/* Popular Items */}
            <SectionHeader title="Popular Items" onViewAll={() => {}} />
            <FlatList
                data={POPULAR_ITEMS}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.popularItem}>
                        <Image source={item.image} style={styles.largeImage} />
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                    </View>
                )}
            />

            {/* Sale-off Items */}
            <SectionHeader title="Sale-off Items" onViewAll={() => {}} />
            <FlatList
                data={SALE_OFF_ITEMS}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.saleOffItem}>
                        <Image source={item.image} style={styles.largeImage} />
                        <View style={styles.discountBadge}>
                            <Text style={styles.discountText}>{item.discount} OFF</Text>
                        </View>
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white', padding: 16 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
    title: { fontSize: 24, fontWeight: 'bold' },
    searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', padding: 10, borderRadius: 10 },
    searchInput: { marginLeft: 10, flex: 1 },
    sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold' },
    viewAllText: { color: 'orange', fontWeight: 'bold' },
    categoryItem: { alignItems: 'center', marginRight: 15 },
    categoryImage: { width: 80, height: 80, borderRadius: 40 },
    popularItem: { backgroundColor: '#fff', padding: 10, borderRadius: 10, marginRight: 15 },
    largeImage: { width: 150, height: 150, borderRadius: 10 }, // Hình ảnh to hơn
    saleOffItem: { backgroundColor: '#fff', padding: 10, borderRadius: 10, marginRight: 15, position: 'relative' },
    discountBadge: { 
        position: 'absolute', 
        top: 5, 
        left: 5, 
        backgroundColor: 'red', 
        paddingVertical: 2, 
        paddingHorizontal: 5, 
        borderRadius: 5 
    },
    discountText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
});

export default HomeScreen;
