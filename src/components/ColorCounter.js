import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ColorCounter = ({ color }) => {
	return (
		<View>
			<Text style={styles.text}>{color}</Text>
			<Button title={`Plus de ${color}`}></Button>
			<Button title={`Moins de ${color}`}></Button>
		</View>
	);
};

export default ColorCounter;

const styles = StyleSheet.create({
	text: { fontSize: 20, textAlign: 'center', marginTop: 10 },
});
