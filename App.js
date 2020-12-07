import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import LandingView from './components/LandingView';

export default function App() {

	_selectedMenu = (menuItem) => {
		alert(menuItem);
		if(menuItem == 'Home') {
			navigation.navigate('TakeTestOrLearn');
		}
	}

	return (
		<View style={styles.container}>
			<LandingView />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	}
});