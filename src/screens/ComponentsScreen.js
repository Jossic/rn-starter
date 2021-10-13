import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const myName = <Text style={{ fontSize: '20' }}>My name is Jossic</Text>;
	return (
		<View>
			<Text style={styles.textStyle}>
				Getting started with React Native
			</Text>
			{myName}
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30,
	},
});

export default ComponentsScreen;
