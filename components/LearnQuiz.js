import React, { Component } from 'react'
import { StyleSheet, ScrollView, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

export default class LearnQuiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultsArray: [
                { "id": 2, "data": "Genesis - Set 1" },
                { "id": 3, "data": "Genesis - Set 2" },
                { "id": 4, "data": "Genesis - Set 3" },
                { "id": 5, "data": "Exodus - Set 1" },
                { "id": 6, "data": "Exodus - Set 2" },
                { "id": 7, "data": "Exodus - Set 3" },
                { "id": 8, "data": "Deuteronomy - Set 1" },
                { "id": 9, "data": "Deuteronomy - Set 2" },
                { "id": 10, "data": "Joshua - Set 1" },
                { "id": 11, "data": "Joshua - Set 2" },
                { "id": 12, "data": "Joshua - Set 1" },
                { "id": 13, "data": "Judges - Set 2" },
                { "id": 14, "data": "Judges - Set 1" },
                { "id": 15, "data": "Judges - Set 2" }
            ]
        };
    }

    _loadLearningMaterial = (item) => {
        this.props.navigation.navigate('Questions', {selectedCategory: item.data});
    }

    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 18, fontFamily: 'sans-serif-condensed', color: '#000000', 
                        marginLeft: 15, marginTop: 10,}}>
                    Choose a Category
                </Text>
                <TableView>
                    <Section>
                        {
                            this.state.resultsArray.map(item => (
                                <Cell style={styles.cellLabel} key={item.id} cellStyle="Basic" accessory="DisclosureIndicator"
                                    title={item.data} onPress={() => this._loadLearningMaterial(item)} 
                                    cellContentView={
                                        <Text allowFontScaling numberOfLines={3} style={{ flex: 1, fontSize: 16, 
                                            fontFamily: 'sans-serif-condensed', color: '#000000' }}>
                                            {item.data}
                                        </Text>
                                    }/>
                            ))
                        }
                    </Section>
                </TableView>
                <Text style={{ fontSize: 14, fontFamily: 'sans-serif-condensed', color: 'red', marginLeft: 15, marginTop: 10, marginBottom: 15}}>
                    * More questions and Categories will be added in future releases. If there are any questions you want to share with us, please provide a comment in Google store and we will respond.
                </Text>
            </ScrollView>
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