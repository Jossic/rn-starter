import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
	const pallier = 10;
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	const setColor = (color, change) => {
		if (color === 'red') {
			if (red + change > 255 || red + change < 0) {
				return;
			} else {
				setRed(red + change);
			}
		} else if (color === 'green') {
			if (green + change > 255 || green + change < 0) {
				return;
			} else {
				setGreen(green + change);
			}
		} else if (color === 'blue') {
			if (blue + change > 255 || blue + change < 0) {
				return;
			} else {
				setBlue(blue + change);
			}
		}
	};
	return (
		<View>
			<Text style={styles.text}>Square Screen</Text>
			<ColorCounter
				onIncrease={() => setColor('red', pallier)}
				onDecrease={() => setColor('red', -1 * pallier)}
				color='Rouge'
			/>
			<ColorCounter
				onIncrease={() => setColor('green', pallier)}
				onDecrease={() => setColor('green', -1 * pallier)}
				color='Vert'
			/>
			<ColorCounter
				onIncrease={() => setColor('blue', pallier)}
				onDecrease={() => setColor('blue', -1 * pallier)}
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
