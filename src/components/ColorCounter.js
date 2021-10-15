import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
	return (
		<View>
			<Text style={styles.text}>{color}</Text>
			<Button
				onPress={() => onIncrease()}
				title={`Plus de ${color}`}></Button>
			<Button
				onPress={() => onDecrease()}
				title={`Moins de ${color}`}></Button>
		</View>
	);
};

export default ColorCounter;

const styles = StyleSheet.create({
	text: { fontSize: 20, textAlign: 'center', marginTop: 10 },
});
