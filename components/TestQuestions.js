import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import charactersQuestions from '../data/characters';
import genesisSetOneQuestions from '../data/GenesisOne';
import genesisSetTwo from '../data/GenesisTwo';
import genesisSetThree from '../data/GenesisThree';
import exodusSetOne from '../data/exodusOne';
import exodusSetTwo from '../data/exodusTwo';
import exodusSetThree from '../data/exodusThree';
import deuteronomySetOne from '../data/deuteronomyOne';
import deuteronomySetTwo from '../data/deuteronomyTwo';
import joshuaOne from '../data/joshuaOne';
import joshuaTwo from '../data/joshuaTwo';
import joshuaThree from '../data/joshuaThree';
import judgesOne from '../data/judgesOne';
import judgesTwo from '../data/judgesTwo';
import judgesThree from '../data/judgesThree';

const numberOfCharacterQuestions = 36;
const numberOfGenesisSetOneQuestions = 96;
const numberOfGenesisSetTwoQuestions = 51;
const numberOfGenesisSetThreeQuestions = 111;
const numberOfexodusSetOneQuestions = 71;
const numberOfexodusSetTwoQuestions = 91;
const numberOfexodusSetThreeQuestions = 71;
const numberOfDeuteronomySetOneQuestions = 104;
const numberOfDeuteronomySetTwoQuestions = 80;
const numberOfJoshuaSetOneQuestions = 61;
const numberOfJoshuaSetTwoQuestions = 68;
const numberOfJoshuaSetThreeQuestions = 68;
const numberOfJudgesSetOneQuestions = 68;
const numberOfJudgesSetTwoQuestions = 68;
const numberOfJudgesSetThreeQuestions = 62;

// Note - to add more question categories, create the js file with questions
// Import the file here - add a const with number of questions (put the count by 2/3 less here)
// Add condition inside componentDidMount and pass the questions imported by js file and the count

export default class TestQuestions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questionsAndAnswers: [],
            selectedCategory: props.route.params.selectedCategory,
            selectedAnswersArray: ['Not Selected', 'Not Selected', 'Not Selected', 'Not Selected', 'Not Selected', 'Not Selected', 'Not Selected', 'Not Selected', 'Not Selected', 'Not Selected' ],
            arrayToSetSelectedAnswers: ['Not Selected', 'Not Selected', 'Not Selected', 'Not Selected', 'Not Selected', 'Not Selected', 'Not Selected', 'Not Selected', 'Not Selected', 'Not Selected' ],
            correctAnswersArray:[],
            numberOfCorrectAnswers: 0
        }
    }

    componentDidMount() {
        this.setState({ questionsAndAnswers: [] });
        if(this.state.selectedCategory == 'Characters') {
            this._setQuestionsToStateVariable(charactersQuestions, numberOfCharacterQuestions);
        } else if(this.state.selectedCategory == 'Genesis - Set 1') {
            this._setQuestionsToStateVariable(genesisSetOneQuestions, numberOfGenesisSetOneQuestions);
        } else if(this.state.selectedCategory == 'Genesis - Set 2') {
            this._setQuestionsToStateVariable(genesisSetTwo, numberOfGenesisSetTwoQuestions);
        } else if(this.state.selectedCategory == 'Genesis - Set 3') {
            this._setQuestionsToStateVariable(genesisSetThree, numberOfGenesisSetThreeQuestions);
        } else if(this.state.selectedCategory == 'Exodus - Set 1') {
            this._setQuestionsToStateVariable(exodusSetOne, numberOfexodusSetOneQuestions);
        } else if(this.state.selectedCategory == 'Exodus - Set 2') {
            this._setQuestionsToStateVariable(exodusSetTwo, numberOfexodusSetTwoQuestions);
        } else if(this.state.selectedCategory == 'Exodus - Set 3') {
            this._setQuestionsToStateVariable(exodusSetThree, numberOfexodusSetThreeQuestions);
        } else if(this.state.selectedCategory == 'Deuteronomy - Set 1') {
            this._setQuestionsToStateVariable(deuteronomySetOne, numberOfDeuteronomySetOneQuestions);
        } else if(this.state.selectedCategory == 'Deuteronomy - Set 2') {
            this._setQuestionsToStateVariable(deuteronomySetTwo, numberOfDeuteronomySetTwoQuestions);
        }  else if(this.state.selectedCategory == 'Joshua - Set 1') {
            this._setQuestionsToStateVariable(joshuaOne, numberOfJoshuaSetOneQuestions);
        } else if(this.state.selectedCategory == 'Joshua - Set 2') {
            this._setQuestionsToStateVariable(joshuaTwo, numberOfJoshuaSetTwoQuestions);
        } else if(this.state.selectedCategory == 'Joshua - Set 3') {
            this._setQuestionsToStateVariable(joshuaThree, numberOfJoshuaSetThreeQuestions);
        } else if(this.state.selectedCategory == 'Judges - Set 1') {
            this._setQuestionsToStateVariable(judgesOne, numberOfJudgesSetOneQuestions);
        } else if(this.state.selectedCategory == 'Judges - Set 2') {
            this._setQuestionsToStateVariable(judgesTwo, numberOfJudgesSetTwoQuestions);
        } else if(this.state.selectedCategory == 'Judges - Set 3') {
            this._setQuestionsToStateVariable(judgesThree, numberOfJudgesSetThreeQuestions);
        }
    }

    _setQuestionsToStateVariable = (questionArray, count) => {
        var array = [];
        array.length = 0;
        var idPresent = false;

        for(var i = 0; i < (count * 2); i++){
            var randomNumber = Math.floor(Math.random() * (count) + 1);
            for(var j = 0; j < array.length; j++) {
                if(array[j].id == questionArray[randomNumber].id) {
                    idPresent = true;
                }
            }
            if(!idPresent) {
                array.splice(i, 1, questionArray[randomNumber]);
            }
            idPresent = false;
        }
        if(array.length > 10) {
            array.splice(10, array.length);
        }
        this.setState({ questionsAndAnswers: array });

        var cArray = [];
        for(var m = 0; m < array.length; m++) {
            var cAnswer = array[m].correctAnswer;
            if(array[m].optionOne.includes(cAnswer)) 
                cArray.push(array[m].optionOne);   
            else if(array[m].optionTwo.includes(cAnswer)) 
                cArray.push(array[m].optionTwo);
            else if(array[m].optionThree.includes(cAnswer)) 
                cArray.push(array[m].optionThree);
            else if(array[m].optionFour.includes(cAnswer)) 
                cArray.push(array[m].optionFour);
        }
        this.setState({ correctAnswersArray: cArray });
    }

    _optionSelected = (selectedAnswer, item) => {
        for(var n = 0; n < this.state.questionsAndAnswers.length; n++) {
            if(this.state.questionsAndAnswers[n].id == item.id) {
                if(selectedAnswer == '1') { this.state.arrayToSetSelectedAnswers.splice(n, 1, item.optionOne) }
                else if(selectedAnswer == '2') { this.state.arrayToSetSelectedAnswers.splice(n, 1, item.optionTwo) }
                else if(selectedAnswer == '3') { this.state.arrayToSetSelectedAnswers.splice(n, 1, item.optionThree) }
                else if(selectedAnswer == '4') { this.state.arrayToSetSelectedAnswers.splice(n, 1, item.optionFour) }
                break;
            }
        }
        this.setState({ selectedAnswersArray: this.state.arrayToSetSelectedAnswers });
    }

    _submitAnswers = () => {
        var correctAnswers = 0;
        for(var p = 0; p < this.state.correctAnswersArray.length; p++) {
            if (this.state.correctAnswersArray[p] == this.state.selectedAnswersArray[p]) {
                correctAnswers++;
            }
        }
        this.props.navigation.navigate('TestResults', {
            numberOfCorrectAnswers: correctAnswers, 
            questionsAndAnswers: this.state.questionsAndAnswers,
            correctAnswersArray: this.state.correctAnswersArray,
            selectedAnswers: this.state.selectedAnswersArray
        });
    }

    render() {
        return (
            <View style={{ height: '100%' }} >
                <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 10, 
                        borderBottomColor: '#000000', borderBottomWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.submitAnswersButton} onPress={this._submitAnswers}>
                        <Text style={styles.text}>Submit Answers</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {
                        this.state.questionsAndAnswers.map((item, index) => (
                            <View key={item.id} style={styles.cellView} >
                                <Text allowFontScaling numberOfLines={3} style={{ flex: 1, fontSize: 16, 
                                    fontFamily: 'sans-serif-condensed', color: '#000000' }}>
                                    {item.question}
                                </Text>
                                <View style={{ display: 'flex', flexDirection: 'column', marginTop: 15 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <TouchableOpacity style={styles.answerOptions} onPress={() => this._optionSelected('1', item)}>
                                            <Text style={styles.text}>{item.optionOne}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <TouchableOpacity style={styles.answerOptions} onPress={() => this._optionSelected('2', item)}>
                                            <Text style={styles.text}>{item.optionTwo}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <TouchableOpacity style={styles.answerOptions} onPress={() => this._optionSelected('3', item)}>
                                            <Text style={styles.text}>{item.optionThree}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <TouchableOpacity style={styles.answerOptions} onPress={() => this._optionSelected('4', item)}>
                                            <Text style={styles.text}>{item.optionFour}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{ flex: 1, fontSize: 16, fontFamily: 'sans-serif-condensed', fontStyle: 'italic', 
                                            color: 'green', marginBottom: 10 }}>
                                        Selected Answer - {this.state.selectedAnswersArray[index]}
                                    </Text>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cellView: {
        display: 'flex', 
        flexDirection: 'column', 
        flex: 1, 
        marginLeft: 15, 
        marginRight: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginTop: 10
    },
    submitAnswersButton: {
        height: 42,
        borderRadius: 5, borderColor: '#3584d4', borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#2AC062',
        width: 140,
        marginBottom: 15,
        marginRight: 10,
        marginTop: 15
    },
    answerOptions: {
        height: 42,
        borderRadius: 5, borderColor: '#3584d4', borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#2AC062',
        width: 300,
        marginBottom: 15,
        marginRight: 10,
        paddingLeft: 5
    },
    text: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 16,
        color: '#3584d4'
    }
});