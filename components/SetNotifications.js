import React, { Component } from 'react';
import { StyleSheet, Picker, View, Text, Dimensions, TouchableOpacity, ScrollView, DeviceEventEmitter } from 'react-native';
import axios from "axios";
import { AdMobBanner } from 'react-native-admob';
import Notification from 'react-native-android-local-notification';

class SetNotifications extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currencies: [],
            fromCurrency: "USD",
			toCurrency: "GBP",
        };
    }

    componentDidMount() {
		axios
			.get("http://api.openrates.io/latest")
			.then(response => {
				const currencyAr = ["EUR"];
				for (const key in response.data.rates) {
					currencyAr.push(key);
				}
				this.setState({ currencies: currencyAr });
			})
			.catch(err => {
				console.log("oppps", err);
			});
    }
    
    selectFromHandler = event => {
		this.setState({ fromCurrency: event });
	};

	selectToHandler = event => {
		this.setState({ toCurrency: event });
    };
    
    convertHandler = () => {
        // Notification.create({
        //     subject: 'Delayed Notification',
        //     message: 'This notification will show after 10 seconds, even the app has been stoped.',
        //     delay: 1
        // });
        Notification.create({
            subject: 'Scheduled Notification',
            message: 'This notification will show on every Friday morning at 8:30 AM, starts at 2015/9/9 and end after 10 times.',
            sendAt: new Date(2020, 12, 7, 19, 19),
            repeatEvery: 'day',
            repeatCount: 10
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerLabel}>Enable Notification</Text>
                
                <Text style={styles.textHeaderStyle}>You can enable notifications here and you will receive notifications daily so that you can check the rates every day!</Text>
                
                <View style={{ borderWidth: 1, borderColor: '#000', borderRadius: 4, marginLeft: 20, marginRight: 20, height: 42, marginBottom: 20 }}>
                    <Picker style={styles.pickerStyle}  name="from" mode="dropdown"
                        selectedValue={this.state.fromCurrency}
                        onValueChange={event => this.selectFromHandler(event)} > 
                            {this.state.currencies.map((item, index) => {
                                return (<Picker.Item label={item} value={item} key={index}/>) 
                            })}
                    </Picker>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                    <Text style={{ fontFamily: 'sans-serif-condensed', 
                        fontWeight: 'bold', fontSize: 18, color: '#000' }}>
                            TO
                    </Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: '#000', borderRadius: 4, 
                    marginLeft: 20, marginRight: 20, height: 42, marginBottom: 20 }}>
                    <Picker style={styles.pickerStyle}  name="to" mode="dropdown"
                        selectedValue={this.state.toCurrency}
                        onValueChange={event => this.selectToHandler(event)}> 
                            {this.state.currencies.map((item, index) => {
                                return (<Picker.Item label={item} value={item} key={index}/>) 
                            })}
                    </Picker>
                </View>
                <TouchableOpacity style={styles.convertButtonStyle} onPress={this.convertHandler}>
                    <Text style={styles.text}>Set Notification</Text>
                </TouchableOpacity>
                
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
        // backgroundColor: '#3584d4'
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
        color: '#000',
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 15
    },
    adSupportLabel: {
        color: 'white',
        fontFamily: "sans-serif-condensed",
        fontSize: 17,
        fontStyle: 'italic',
        marginTop: 15
    },
    bannerView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        position: 'relative', //Here is the trick
        bottom: 0, //Here is the trick,
		height: 100,
		backgroundColor: 'red'
    },
    textHeaderStyle: {
		height: 70, 
		marginTop: 20,
		paddingLeft: 20,
        fontFamily: 'sans-serif-condensed', 
        fontSize: 16,
		color: '#000',
        marginBottom: 20,
        marginRight: 15
	},
	textInputStyle: {
		height: 60, 
		borderColor: 'gray', borderWidth: 1, 
		marginLeft: 20, marginRight: 20,
		borderRadius: 5, borderWidth: 1,
		marginBottom: 20,
		paddingLeft: 20,
		fontFamily: 'sans-serif-condensed', fontWeight: 'bold',
        fontSize: 18, color: '#000', paddingTop: 7
	},
	pickerStyle: {
		height: 40, 
		borderColor: 'gray', 
		borderWidth: 1, 
		marginLeft: 20, 
		marginRight: 20,
		borderRadius: 5,
		borderWidth: 1,
		fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        fontSize: 18,
		color: '#000',
	},
	convertButtonStyle: {
		height: 50, 
		marginLeft: 20, 
		marginRight: 20,
		borderRadius: 5,
		borderWidth: 1,
		marginBottom: 20,
		backgroundColor: "#841584",
		justifyContent: 'center',
        alignItems: 'center'
	},
    text: {
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        fontSize: 16,
		color: '#FFFFFF'
	}
});

export default SetNotifications;