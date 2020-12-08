import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import LandingView from './components/LandingView';

export default function App() {

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