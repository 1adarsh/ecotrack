import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const ReportBin = () => {
    const [issueDescription, setIssueDescription] = useState('');

    const handleReport = () => {
        // Handle reporting logic
        console.log('Reporting issue:', issueDescription);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Report Recycling Bin Issue</Text>
            <TextInput
                style={styles.input}
                placeholder="Describe the issue..."
                value={issueDescription}
                onChangeText={setIssueDescription}
            />
            <Button title="Report Issue" onPress={handleReport} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
});

export default ReportBin;