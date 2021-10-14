import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
	return (
		<View>
			<Text>Image Screen</Text>
			<ImageDetail
				title='Forest'
				image={require('../../assets/forest.jpg')}
				score={5}
			/>
			{/* <ImageDetail
				title='Bambou'
				image={require('../../assets/bamboo.jpg')}
			/> */}
			<ImageDetail
				title='Mer'
				image={require('../../assets/beach.jpg')}
				score={8}
			/>
			<ImageDetail
				title='Mountain'
				image={require('../../assets/mountain.jpg')}
				score={9}
			/>
		</View>
	);
};

export default ImageScreen;

const styles = StyleSheet.create({});
