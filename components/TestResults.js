import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { AdMobBanner } from 'react-native-admob';

export default class TestResults extends Component {

    constructor(props) {
        super(props);
        this.state = {
            correctAnswersCount: props.route.params.numberOfCorrectAnswers,
            questionsAndAnswers: props.route.params.questionsAndAnswers,
            correctAnswersArray: props.route.params.correctAnswersArray,
            selectedAnswers: props.route.params.selectedAnswers
        }
    }

    _loadHomeScreen = () => {
        this.props.navigation.navigate('TakeTestOrLearn');
    }

    _loadReviewScreen = () => {
        var array = [];
        for(var i = 0; i < this.state.correctAnswersArray.length; i++) {
            if(this.state.correctAnswersArray[i] == this.state.selectedAnswers[i]) {
                array.splice(i, 1, 'C');
            } else {
                array.splice(i, 1, 'W');
            }
        }

        console.log('this.state.questionsAndAnswers : ',this.state.questionsAndAnswers);
        console.log('array correct answers : ',array);
        console.log('this.state.selectedAnswers : ',this.state.selectedAnswers);

        this.props.navigation.navigate('TestReview', {
            questionsAndAnswers: this.state.questionsAndAnswers,
            correctAnswersArray: array, //this just sets an array with 10 records and say each answer is Correct or Wrong
            selectedAnswers: this.state.selectedAnswers,
        });
    }

    render() {
        return (
            <View style={{ alignItems: 'center', marginRight: 15, backgroundColor: '#3584d4', height: '100%', width: '100%' }}>
                <Text style={styles.textLabels}>
                    Here is your results!
                </Text>
                <Text style={styles.textLabels}>
                    You got {this.state.correctAnswersCount} answers correct!
                </Text>
                <TouchableOpacity style={styles.takeTestButton} onPress={this._loadHomeScreen}>
                    <Text style={styles.text}>Go to Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.reviewButton} onPress={this._loadReviewScreen}>
                    <Text style={styles.text}>Review Results</Text>
                </TouchableOpacity>
                <View style={styles.bannerView}>
                    <AdMobBanner
                        adSize="largeBanner"
                        adUnitID="ca-app-pub-8628320246149288/6127254062"
                        testDeviceID="0e71ca58363346548bc3205f4b0dda55"
                        didFailToReceiveAdWithError={this.onFailToRecieveAd} />
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    bannerView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick,
        height: 100
    },
    resultsHeader: {
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000000',
        marginTop: 40,
        marginBottom: 20
    },
    resultstext: {
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000000',
        marginBottom: 25
    },
    text: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 16,
        color: '#FFFFFF'
    },
    takeTestButton: {
        height: 55,
        borderRadius: 45, borderColor: 'white', borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3584d4',
        shadowColor: '#2AC062',
        width: 240,
        marginTop: 60
    },
    reviewButton: {
        height: 55,
        borderRadius: 45, borderColor: 'white', borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3584d4',
        shadowColor: '#2AC062',
        width: 240,
        marginTop: 20
    },
    textLabels: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 22,
        color: '#FFFFFF',
        marginTop: 60
    }
});