import React, { Component } from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';
import Colors from '../../Style/colors';

class FullBg extends Component {
	render() {
		return (
			<Image source={require('../../assets/FullBg.jpeg')} style={styles.bg}>
				<View style={styles.cover}>
					<Text style={styles.h1}> Login </Text>
				</View>
			</Image>
		);
	}
}

const styles = StyleSheet.create({
	bg: {
		flex: 1,
	},
	cover: {
		flex: 1,
		backgroundColor: Colors.red,
		opacity: 0.8
	},
	h1: {
		fontSize: 30,
		color: Colors.white
	}
});



export default FullBg;