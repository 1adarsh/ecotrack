import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const BinMap = () => {
    const [bins, setBins] = useState([]);

    useEffect(() => {
        // Fetch nearby recycling bins from an API or local data
        fetchBins();
    }, []);

    const fetchBins = async () => {
        // Placeholder for fetching bins data
        const data = await getNearbyBins();  // Implement this function as needed
        setBins(data);
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map}>
                {bins.map((bin, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: bin.latitude, longitude: bin.longitude }}
                        title={'Recycling Bin'}
                        description={bin.description}
                    />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default BinMap;