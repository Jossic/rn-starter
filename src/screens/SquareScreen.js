import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
	const pallier = 30;
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);
	return (
		<View>
			<Text style={styles.text}>Square Screen</Text>
			<ColorCounter
				onIncrease={() => setRed(red + pallier)}
				onDecrease={() => setRed(red - pallier)}
				color='Rouge'
			/>
			<ColorCounter
				onIncrease={() => setGreen(green + pallier)}
				onDecrease={() => setGreen(green - pallier)}
				color='Vert'
			/>
			<ColorCounter
				onIncrease={() => setBlue(blue + pallier)}
				onDecrease={() => setBlue(blue - pallier)}
				color='Bleu'
			/>
			<Text style={styles.text2}>{`rgb(${red},${green},${blue})`}</Text>
			<View
				style={{
					height: 100,
					width: 100,
					backgroundColor: `rgb(${red},${green},${blue})`,
				}}></View>
		</View>
	);
};

export default SquareScreen;

const styles = StyleSheet.create({
	text: { fontSize: 25, textAlign: 'center', marginTop: 20 },
	text2: { fontSize: 15, textAlign: 'center', marginTop: 10 },
});
