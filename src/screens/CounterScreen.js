import React from 'react';
import { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const reducer = (state, action) => {
	switch (action.type) {
		case 'increase':
			return { ...state, count: state.count + action.payload };

		case 'decrease':
			return { ...state, count: state.count - action.payload };

		default:
			return state;
	}
};

const CounterScreen = () => {
	const [state, dispatch] = useReducer(reducer, {
		count: 0,
	});

	const { count } = state;
	return (
		<View>
			<Text style={styles.text}>Counter Screen</Text>
			<Button
				title='Ajouter 1'
				onPress={() => dispatch({ type: 'increase', payload: 1 })}
			/>
			<Button
				title='Retirer 1'
				onPress={() => dispatch({ type: 'decrease', payload: 1 })}
			/>
			<Text style={styles.text}>{count}</Text>
		</View>
	);
};

export default CounterScreen;

const styles = StyleSheet.create({
	text: { fontSize: 25, textAlign: 'center', marginTop: 20 },
});
