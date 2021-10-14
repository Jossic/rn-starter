import React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';

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
			{/* {colors.map((color) => {
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
			})} */}
			<FlatList
				keyExtractor={(item) => item}
				data={colors}
				renderItem={({ item }) => {
					return (
						<View
							style={{
								height: 100,
								width: 100,
								backgroundColor: item,
							}}></View>
					);
				}}
			/>
		</View>
	);
};

export default ColorScreen;

const styles = StyleSheet.create({});
