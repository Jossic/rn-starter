import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	return `rgb(${red},${green},${blue})`;
};

const ColorScreen = () => {
	return (
		<View>
			<Button title='Add a color' />
			<View
				style={{
					height: 100,
					width: 100,
					backgroundColor: randomRgb(),
				}}></View>
		</View>
	);
};

export default ColorScreen;

const styles = StyleSheet.create({});
