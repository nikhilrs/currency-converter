import React, { Component } from 'react'
import { StyleSheet, ScrollView, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

export default class TakeTest extends Component {
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

    _loadTest = (item) => {
        this.props.navigation.navigate('TestQuestions', {selectedCategory: item.data});
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
                                    title={item.data} onPress={() => this._loadTest(item)} 
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
            </ScrollView>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3584d4',
        height: '100%',
        width: '100%',
    },
    headerLabel: {
        width: 300,
        fontFamily: 'sans-serif-condensed',
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold'
    },
    cellLabel: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 16,
        color: '#000000'    
    }
});