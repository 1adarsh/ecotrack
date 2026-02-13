import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Eco Tracking Dashboard</Text>
            <View style={styles.statsContainer}>
                <Text style={styles.stat}>Total Emissions: XX tons</Text>
                <Text style={styles.stat}>Trees Planted: YY</Text>
                <Text style={styles.stat}>Water Saved: ZZ liters</Text>
            </View>
            <View style={styles.actionsContainer}>
                <Button title="Track New Action" onPress={() => {}} />
                <Button title="View History" onPress={() => {}} />
                <Button title="Settings" onPress={() => {}} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    statsContainer: {
        marginVertical: 20,
    },
    stat: {
        fontSize: 18,
        marginVertical: 5,
    },
    actionsContainer: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

export default Dashboard;