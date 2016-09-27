import React, { Component } from 'react';
import { Text, Image } from 'react-native';

class FullBg extends Component {
	render() {
		return (
			<Image source={require('../../assets/bg.jpg')}></Image>
		);
	}
}

export default FullBg;