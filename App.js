import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import AboutPage from './components/AboutPage';
import LandingView from './components/LandingView';
import HelpPage from './components/HelpPage';
import SavedQuestions from './components/SavedQuestions';
import TakeTestOrLearn from './components/TakeTestOrLearn';
import TakeTest from './components/TakeTest';
import LearnQuiz from './components/LearnQuiz';
import TestQuestions from './components/TestQuestions';
import TestResults from './components/TestResults';
import QuestionsAndAnswersLearning from './components/QuestionsAndAnswersLearning';
import TestReview from './components/TestReview';
const RootStack = createStackNavigator();

export default function App() {

	_selectedMenu = (menuItem) => {
		alert(menuItem);
		if(menuItem == 'Home') {
			navigation.navigate('TakeTestOrLearn');
		}
	}

	return (
		<View style={styles.container}>
			<Header />
			<TakeTestOrLearn />
			{/* <NavigationContainer>
				<RootStack.Navigator initialRouteName="TakeTestOrLearn">
					<RootStack.Screen name="Landing" component={LandingView} options={{ headerShown: false }} />
					<RootStack.Screen name="About" component={AboutPage} options={{ headerShown: false }} />
					<RootStack.Screen name="Help" component={HelpPage} options={{ headerShown: false }} />
					<RootStack.Screen name="Saved" component={SavedQuestions} options={{ headerShown: false }} />
					<RootStack.Screen name="TakeTestOrLearn" component={TakeTestOrLearn} options={{ headerShown: false }} />
					<RootStack.Screen name="TakeTest" component={TakeTest} options={{ headerShown: false }} />
					<RootStack.Screen name="LearnQuiz" component={LearnQuiz} options={{ headerShown: false }} />
					<RootStack.Screen name="Questions" component={QuestionsAndAnswersLearning} options={{ headerShown: false }} />
					<RootStack.Screen name="TestQuestions" component={TestQuestions} options={{ headerShown: false }} />
					<RootStack.Screen name="TestResults" component={TestResults} options={{ headerShown: false }} />
					<RootStack.Screen name="TestReview" component={TestReview} options={{ headerShown: false }} />
				</RootStack.Navigator>
			</NavigationContainer> */}
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