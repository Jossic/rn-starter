import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ImageDetail = ({ title }) => {
	return (
		<View>
			<Image source={require('../../assets/beach.jpg')} />
			<Text>{title}</Text>
		</View>
	);
};

export default ImageDetail;

const styles = StyleSheet.create({});
