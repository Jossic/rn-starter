import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SquareScreen = () => {
	return (
		<View>
			<Text style={styles.text}>Square Screen</Text>
			<Text></Text>
		</View>
	);
};

export default SquareScreen;

const styles = StyleSheet.create({
	text: { fontSize: 25, textAlign: 'center', marginTop: 20 },
});
