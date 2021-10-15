import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
	return (
		<View>
			<Text style={styles.text}>Square Screen</Text>
			<ColorCounter color='Rouge' />
			<ColorCounter color='Vert' />
			<ColorCounter color='Bleu' />
		</View>
	);
};

export default SquareScreen;

const styles = StyleSheet.create({
	text: { fontSize: 25, textAlign: 'center', marginTop: 20 },
});
