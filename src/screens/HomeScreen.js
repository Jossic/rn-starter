import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>Home Screen</Text>
			<Button
				title='Go to components demo'
				onPress={() => navigation.navigate('Components')}
			/>
			<TouchableOpacity>
				<Text>Go to list demo</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
