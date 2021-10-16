import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
	return (
		<View>
			<Text style={styles.text}>Box Screen</Text>
		</View>
	);
};

export default BoxScreen;

const styles = StyleSheet.create({
	text: { fontSize: 25, textAlign: 'center', marginTop: 20 },
});
