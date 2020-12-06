import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Switch, Text } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
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

export default class QuestionsAndAnswersLearning extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAnswers: false,
            questionsAndAnswers: [],
            selectedCategory: props.route.params.selectedCategory
        }
    }

    componentDidMount() {
        this.setState({ questionsAndAnswers: [] });
        if(this.state.selectedCategory == 'Characters') {
            this.setState({ questionsAndAnswers: charactersQuestions });
        } else if(this.state.selectedCategory == 'Genesis - Set 1') {
            this.setState({ questionsAndAnswers: genesisSetOneQuestions});        
        } else if(this.state.selectedCategory == 'Genesis - Set 2') {
            this.setState({ questionsAndAnswers: genesisSetTwo }); 
        } else if(this.state.selectedCategory == 'Genesis - Set 3') {
            this.setState({ questionsAndAnswers: genesisSetThree }); 
        } else if(this.state.selectedCategory == 'Exodus - Set 1') {
            this.setState({ questionsAndAnswers: exodusSetOne }); 
        } else if(this.state.selectedCategory == 'Exodus - Set 2') {
            this.setState({ questionsAndAnswers: exodusSetTwo }); 
        } else if(this.state.selectedCategory == 'Exodus - Set 3') {
            this.setState({ questionsAndAnswers: exodusSetThree }); 
        } else if(this.state.selectedCategory == 'Deuteronomy - Set 1') {
            this.setState({ questionsAndAnswers: deuteronomySetOne }); 
        } else if(this.state.selectedCategory == 'Deuteronomy - Set 2') {
            this.setState({ questionsAndAnswers: deuteronomySetTwo }); 
        } else if(this.state.selectedCategory == 'Joshua - Set 1') {
            this.setState({ questionsAndAnswers: joshuaOne }); 
        } else if(this.state.selectedCategory == 'Joshua - Set 2') {
            this.setState({ questionsAndAnswers: joshuaTwo }); 
        } else if(this.state.selectedCategory == 'Joshua - Set 3') {
            this.setState({ questionsAndAnswers: joshuaThree }); 
        } else if(this.state.selectedCategory == 'Judges - Set 1') {
            this.setState({ questionsAndAnswers: judgesOne }); 
        } else if(this.state.selectedCategory == 'Judges - Set 2') {
            this.setState({ questionsAndAnswers: judgesTwo }); 
        } else if(this.state.selectedCategory == 'Judges - Set 3') {
            this.setState({ questionsAndAnswers: judgesThree }); 
        }
    }

    _hideShowAnswersToggle = () => {
        if(this.state.showAnswers) 
            this.setState({ showAnswers: false });
        else    
            this.setState({ showAnswers: true });
    }

    render() {
        return (
            <View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'sans-serif-condensed', color: '#000000', 
                        marginLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        Show Answers
                    </Text>
                    <Switch onValueChange={this._hideShowAnswersToggle}
                        style={{ marginTop: 12, width: 40, marginLeft: 15, marginBottom: 10 }}
                        value={this.state.showAnswers} thumbTintColor="#0000ff" tintColor="#ff0000" />
                </View>
                <ScrollView>
                    <TableView>
                        <Section>
                            {
                                this.state.questionsAndAnswers.map(item => (
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
                                                        Answer : 
                                                        {
                                                            this.state.showAnswers ? 
                                                                item.correctAnswer == 'A. ' ? <Text> {item.optionOne.substring(3)}</Text> : null 
                                                            : <Text> ?</Text>
                                                        }
                                                        {
                                                            this.state.showAnswers ? 
                                                                item.correctAnswer == 'B. ' ? <Text> {item.optionTwo.substring(3)}</Text> : null 
                                                            : <Text> ?</Text>
                                                        }
                                                        {
                                                            this.state.showAnswers ? 
                                                                item.correctAnswer == 'C. ' ? <Text> {item.optionThree.substring(3)}</Text> : null 
                                                            : <Text> ?</Text>
                                                        }
                                                        {
                                                            this.state.showAnswers ? 
                                                                item.correctAnswer == 'D. ' ? <Text> {item.optionFour.substring(3)}</Text> : null 
                                                            : <Text> ?</Text>
                                                        }
                                                </Text>
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
        color: '#FFFFFF'
    }
});