import React, { Component } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Header from './Header';
import HelpPage from './HelpPage';
import AboutPage from './AboutPage';
import SetNotifications from './SetNotifications';
import TakeTestOrLearn from './TakeTestOrLearn';

export default class LandingView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLandingView: true,
            showNotificationsPage: false,
            showHelpPage: false,
            showAboutPage: false,
        };
    }

    _selectedMenu = (menuItem) => {
        switch (menuItem) {
            case 'Home':
                this._showLandingView(); break;
            case 'Notifications':
                this._showNotificationsPage();
                break;
            case 'Help':
                this._showHelpPage();
                break;
            case 'About':
                this._showAboutPage();
                break;
            default:
                break;
        }
    }

    _showLandingView = () => { 
        this.setState({ showLandingView: true, showNotificationsPage: false, showHelpPage: false, showAboutPage: false });
    }

    _showNotificationsPage = () => {
        this.setState({ showLandingView: false, showNotificationsPage: true, showHelpPage: false, showAboutPage: false });
    }

    _showHelpPage = () => {
        this.setState({ showLandingView: false, showNotificationsPage: false, showHelpPage: true, showAboutPage: false });
    }

    _showAboutPage = () => {
        this.setState({ showLandingView: false, showNotificationsPage: false, showHelpPage: false, showAboutPage: true });
    }

    render() {
        return (
            <View style={styles.container}>
                <Header selectedMenu = {this._selectedMenu}/>
                {
                    this.state.showLandingView ? <TakeTestOrLearn text={this.state.textToLoad} /> : null
                }
                {
                    this.state.showNotificationsPage ? <SetNotifications /> : null
                }
                {
                    this.state.showHelpPage ? <HelpPage /> : null
                }
                {
                    this.state.showAboutPage ? <AboutPage /> : null
                }
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        // alignItems: 'center',
        // marginTop: 25
    }
});