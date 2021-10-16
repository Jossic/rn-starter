import React from 'react';
import { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const reducer = (state, action) => {
	switch (action.type) {
		case 'change_red':
			return state.red + action.payload > 255 ||
				state.red + action.payload < 0
				? state
				: { ...state, red: state.red + action.payload };

		case 'change_green':
			return state.green + action.payload > 255 ||
				state.green + action.payload < 0
				? state
				: { ...state, green: state.green + action.payload };

		case 'change_blue':
			return state.blue + action.payload > 255 ||
				state.blue + action.payload < 0
				? state
				: { ...state, blue: state.blue + action.payload };

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
					dispatch({ type: 'change_red', payload: pallier })
				}
				onDecrease={() =>
					dispatch({ type: 'change_red', payload: -1 * pallier })
				}
				color='Rouge'
			/>
			<ColorCounter
				onIncrease={() =>
					dispatch({ type: 'change_green', payload: pallier })
				}
				onDecrease={() =>
					dispatch({ type: 'change_green', payload: -1 * pallier })
				}
				color='Vert'
			/>
			<ColorCounter
				onIncrease={() =>
					dispatch({ type: 'change_blue', payload: pallier })
				}
				onDecrease={() =>
					dispatch({ type: 'change_blue', payload: -1 * pallier })
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
