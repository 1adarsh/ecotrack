import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Scan = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Scan QR Code</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
    },
});

export default Scan;