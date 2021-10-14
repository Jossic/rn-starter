import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CounterScreen = () => {
	const [count, setCount] = useState(0);
	return (
		<View>
			<Text style={styles.text}>Counter Screen</Text>
			<Button title='Ajouter 1' onPress={() => setCount(count + 1)} />
			<Button title='Retirer 1' onPress={() => setCount(count - 1)} />
			<Text style={styles.text}>{count}</Text>
		</View>
	);
};

export default CounterScreen;

const styles = StyleSheet.create({
	text: { fontSize: 25, textAlign: 'center', marginTop: 20 },
});
