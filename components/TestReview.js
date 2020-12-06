import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

export default class TestReview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questionsAndAnswers: props.route.params.questionsAndAnswers,
            correctAnswersArray: props.route.params.correctAnswersArray,
            selectedAnswers: props.route.params.selectedAnswers
        }
    }

    _loadHomeScreen = () => {
        this.props.navigation.navigate('TakeTestOrLearn');
    }

    render() {
        return (
            <View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'sans-serif-condensed', color: '#000000', 
                        marginLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        Review your result here!
                    </Text>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: '#3584d4', borderRadius: 2, marginLeft: 20, 
                        width: 100, height: 30, alignItems: 'center', justifyContent: 'center' }} onPress={this._loadHomeScreen}>
                        <Text style={styles.text}>Go to Home</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ height: '100%' }}>
                    <TableView>
                        <Section>
                            {
                                this.state.questionsAndAnswers.map((item, index) => (
                                    <Cell style={styles.cellLabel} key={item.id} cellStyle="Basic"
                                        title={item.question} 
                                        cellContentView={
                                            <View style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingVertical: 10 }} >
                                                <Text allowFontScaling numberOfLines={3} style={{ flex: 1, fontSize: 16, 
                                                    fontFamily: 'sans-serif-condensed', color: '#000000', fontWeight: 'bold' }}>
                                                    {item.question}
                                                </Text>
                                                <Text allowFontScaling numberOfLines={3} style={{ flex: 1, fontSize: 16, 
                                                    fontFamily: 'sans-serif-condensed', color: '#000000', paddingTop: 10 }}>
                                                        Correct Answer : 
                                                        {
                                                            item.optionOne.includes(item.correctAnswer) ? <Text> {item.optionOne}</Text> : null
                                                        }
                                                        {
                                                            item.optionTwo.includes(item.correctAnswer) ? <Text> {item.optionTwo}</Text> : null
                                                        }
                                                        {
                                                            item.optionThree.includes(item.correctAnswer) ? <Text> {item.optionThree}</Text> : null
                                                        }
                                                        {
                                                            item.optionFour.includes(item.correctAnswer) ? <Text> {item.optionFour}</Text> : null
                                                        }
                                                </Text>
                                                <Text allowFontScaling numberOfLines={3} style={{ flex: 1, fontSize: 16, 
                                                    fontFamily: 'sans-serif-condensed', color: '#000000', paddingTop: 10 }}>
                                                        You Selected : 
                                                        {
                                                            <Text> {this.state.selectedAnswers[index]}</Text>
                                                        }
                                                </Text>
                                                {
                                                    this.state.correctAnswersArray[index] == 'C' ?
                                                    <Text style={{fontFamily: 'sans-serif-condensed', fontSize: 16, marginTop: 10, color: 'green'}}>
                                                        You selected CORRECT ANSWER!
                                                    </Text>
                                                    :
                                                    <Text style={{fontFamily: 'sans-serif-condensed', fontSize: 16, marginTop: 10, color: 'red'}}>
                                                        Your answer is INCORRECT!
                                                    </Text>
                                                }   
                                            </View>
                                        }/>
                                ))
                            }
                        </Section>
                    </TableView>
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
    text: {
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000000'
    }
});