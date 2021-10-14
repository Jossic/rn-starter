import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
	const friends = [
		{
			name: 'friend #1',
			age: 10,
		},
		{
			name: 'friend #2',
			age: 15,
		},
		{
			name: 'friend #3',
			age: 25,
		},
		{
			name: 'friend #4',
			age: 32,
		},
		{
			name: 'friend #5',
			age: 42,
		},
		{
			name: 'friend #6',
			age: 78,
		},
		{
			name: 'friend #7',
			age: 22,
		},
	];
	return (
		<FlatList
			data={friends}
			keyExtractor={(friend) => {
				return friend.name;
			}}
			renderItem={({ item }) => {
				return (
					<Text style={styles.textStyle}>
						{item.name} - Age: {item.age}
					</Text>
				);
			}}></FlatList>
	);
};

const styles = StyleSheet.create({
	textStyle: { marginVertical: 50 },
});

export default ListScreen;
