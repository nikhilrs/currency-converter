import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { AdMobBanner } from 'react-native-admob';

class HelpPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            helpStatements: [
                {
                    id: 0,
                    statement: '1. The quiz app is designed for everyone.'
                },
                {
                    id: 1,
                    statement: '2. You can click your device Back button (the hardware button in your device) to go back to previous screen at any time.',
                },
                {
                    id: 2,
                    statement: '3. Click on Take Test from landing page to attend a test. On the next screen, you can select the category you want to attend the test.',
                },
                {
                    id: 3,
                    statement: '4. Click on Learn from landing page to learn the quiz questions/answers. On the next screen, you can select the category you want to learn.',
                },
                {
                    id: 4,
                    statement: '5. Enjoy and Happy learning. There are more features on the way based on usage and requests - so let us know your feedback and ratings in Play Store and stay tuned!',
                }
            ]
        };
    }

    _closeHelpPage = () => {
        this.props.closePage();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerLabel}>Help Page</Text>
                <ScrollView style={styles.scrollView} scrollEnabled={true}>
                    {
                        this.state.helpStatements.map((item, index) => (
                            <TouchableOpacity key={item.id} style={styles.listItem} >
                                <Text style={styles.text}>
                                    {item.statement}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                    <Text style={styles.adSupportLabel}>
                        We need your support! Please check the ad links in the app if it interests you, it helps us maintain the application and the development cost. Thanks in advance for your support!
                    </Text>
                </ScrollView>
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
        marginTop: 5,
    },
    text: {
       color: '#4f603c',
       fontSize: 16,
       color: '#FFFFFF',
       fontFamily: "sans-serif-condensed"
    },
    scrollView: {
        height: Dimensions.get('window').height - 160,
        marginLeft: 15,
        marginRight: 15
    },
    headerLabel: {
        width: Dimensions.get('window').width / 2,
        fontFamily: 'sans-serif-condensed',
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 15
    },
    adSupportLabel: {
        color: 'white',
        fontFamily: "sans-serif-condensed",
        fontSize: 17,
        fontStyle: 'italic',
        marginTop: 15
    }
});

export default HelpPage;