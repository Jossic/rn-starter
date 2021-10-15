import React from 'react';
import { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const reducer = (state, action) => {
	switch (action.colorToChange) {
		case 'red':
			return state.red + action.amount > 255 ||
				state.red + action.amount < 0
				? state
				: { ...state, red: state.red + action.amount };

		case 'green':
			return state.green + action.amount > 255 ||
				state.green + action.amount < 0
				? state
				: { ...state, green: state.green + action.amount };

		case 'blue':
			return state.blue + action.amount > 255 ||
				state.blue + action.amount < 0
				? state
				: { ...state, blue: state.blue + action.amount };

		default:
			return state;
	}
};

const SquareScreen = () => {
	const pallier = 10;

	const [state, dispatch] = useReducer(reducer, {
		red: 0,
		green: 0,
		blue: 0,
	});

	const { red, green, blue } = state;

	return (
		<View>
			<Text style={styles.text}>Square Screen</Text>
			<ColorCounter
				onIncrease={() =>
					dispatch({ colorToChange: 'red', amount: pallier })
				}
				onDecrease={() =>
					dispatch({ colorToChange: 'red', amount: -1 * pallier })
				}
				color='Rouge'
			/>
			<ColorCounter
				onIncrease={() =>
					dispatch({ colorToChange: 'green', amount: pallier })
				}
				onDecrease={() =>
					dispatch({ colorToChange: 'green', amount: -1 * pallier })
				}
				color='Vert'
			/>
			<ColorCounter
				onIncrease={() =>
					dispatch({ colorToChange: 'blue', amount: pallier })
				}
				onDecrease={() =>
					dispatch({ colorToChange: 'blue', amount: -1 * pallier })
				}
				color='Bleu'
			/>
			<Text style={styles.text2}>{`rgb(${red},${green},${blue})`}</Text>
			<View
				style={{
					height: 150,
					width: 150,
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
