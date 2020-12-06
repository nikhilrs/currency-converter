import React, { Component } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class LandingView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    _selectedCategory = (category) => {
        this.props.navigation.navigate('TakeTestOrLearn');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.kidsAdultsButton} onPress={() => this._selectedCategory('kids')}>
                        <Text style={styles.text}>Quiz for Kids</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.kidsAdultsButton} onPress={() => this._selectedCategory('adults')}>
                        <Text style={styles.text}>Quiz for Adults</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.kidsAdultsButton} onPress={() => this._selectedCategory('adults')}>
                        <Text style={styles.text}>Bible Quiz</Text>
                    </TouchableOpacity>
                </View>
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
    buttons: {
        marginTop: 100,
        height: 100,
    },
    kidsAdultsButton: {
        height: 60,
        borderRadius: 5, borderColor: 'white', borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3584d4',
        shadowColor: '#2AC062',
        width: 180,
        marginBottom: 40
    },
    text: {
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FFFFFF'
    }
});