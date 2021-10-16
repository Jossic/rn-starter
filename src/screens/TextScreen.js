import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TextScreen = () => {
	return (
		<View>
			<Text style={styles.text}>Text Screen</Text>
		</View>
	);
};

export default TextScreen;

const styles = StyleSheet.create({
	text: { fontSize: 25, textAlign: 'center', marginTop: 20 },
});
