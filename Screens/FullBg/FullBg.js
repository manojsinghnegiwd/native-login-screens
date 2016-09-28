import React, { Component } from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';
import Colors from '../../Style/colors';

class FullBg extends Component {
	render() {
		return (
			<Image source={require('../../assets/bg.jpg')} style={styles.bg}>
				<View style={styles.cover}>
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
	}
});



export default FullBg;