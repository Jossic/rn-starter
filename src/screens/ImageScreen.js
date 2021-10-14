import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
	return (
		<View>
			<Text>Image Screen</Text>
			<ImageDetail title='Forest' />
			<ImageDetail title='Bambou' />
			<ImageDetail title='Mer' />
			<ImageDetail title='Mountain' />
		</View>
	);
};

export default ImageScreen;

const styles = StyleSheet.create({});
