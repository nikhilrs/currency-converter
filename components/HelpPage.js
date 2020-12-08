import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { AdMobBanner } from 'react-native-admob';

class HelpPage extends Component {

    constructor(props) {
        super(props);
    }

    _closeHelpPage = () => {
        this.props.closePage();
    }

    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.bannerView}>
                    <AdMobBanner
                        adSize="largeBanner"
                        adUnitID="ca-app-pub-8628320246149288/6127254062"
                        testDeviceID="0e71ca58363346548bc3205f4b0dda55"
                        didFailToReceiveAdWithError={this.onFailToRecieveAd} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 30,
        height: '100%',
        width: '100%',
        backgroundColor: '#3584d4'
    },
    bannerView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick,
        height: 100
    },
    listItem: {
        marginTop: 3,
    },
    text: {
       color: '#4f603c',
       fontSize: 16,
       color: '#FFFFFF',
       fontFamily: "sans-serif-condensed"
    },
    scrollView: {
        height: Dimensions.get('window').height - 160,
        // marginLeft: 15,
        // marginRight: 15
    },
    headerLabel: {
        width: Dimensions.get('window').width / 2,
        fontFamily: 'sans-serif-condensed',
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15
    },
    adSupportLabel: {
        color: 'white',
        color: '#FFFFFF',
        fontFamily: "sans-serif-condensed",
        fontSize: 17,
        fontStyle: 'italic',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15
    },
    aboutLabel: {
        fontFamily: "sans-serif-condensed",
        fontSize: 17,
        marginBottom: 15,
        color: '#FFFFFF',
        marginLeft: 15,
        marginRight: 15
    }
});

export default HelpPage;