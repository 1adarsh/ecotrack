import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Leaderboard = () => {
  const topEcoWarriors = [
    { id: '1', name: 'EcoWarrior1', points: 1200 },
    { id: '2', name: 'EcoWarrior2', points: 1150 },
    { id: '3', name: 'EcoWarrior3', points: 1100 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>  
      <Text style={styles.rank}>#{item.id}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.points}>{item.points} points</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={topEcoWarriors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    width: '100%',
    alignItems: 'center',
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
  },
  points: {
    fontSize: 14,
    color: '#888888',
  },
});

export default Leaderboard;