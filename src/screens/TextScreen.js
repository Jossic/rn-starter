import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TextScreen = () => {
	const [name, setName] = useState('');
	return (
		<View>
			<Text style={styles.text}>Text Screen</Text>
			<TextInput
				style={styles.input}
				autoCapitalize='none'
				autoCorrect={false}
				value={name}
				onChangeText={(newText) => setName(newText)}
			/>

			<Text style={styles.text}>My name is {name}</Text>
		</View>
	);
};

export default TextScreen;

const styles = StyleSheet.create({
	text: { fontSize: 25, textAlign: 'center', marginTop: 20 },
	input: {
		fontSize: 20,
		textAlign: 'center',
		margin: 15,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 10,
	},
});
