import React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	return `rgb(${red},${green},${blue})`;
};

const ColorScreen = () => {
	const [colors, setColors] = useState([]);
	return (
		<View>
			<Button
				title='Add a color'
				onPress={() => setColors([...colors, randomRgb()])}
			/>
			{colors.map((color) => {
				return (
					<View
						keyExtractor={(color) => {
							return color.id;
						}}
						style={{
							height: 100,
							width: 100,
							backgroundColor: color,
						}}></View>
				);
			})}
		</View>
	);
};

export default ColorScreen;

const styles = StyleSheet.create({});
