import React from "react";
import axios from "axios";
import { StyleSheet, Picker, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { AdMobBanner } from 'react-native-admob';
import DropDownPicker from 'react-native-dropdown-picker';

class TakeTestOrLearn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			result: null,
			fromCurrency: "USD",
			toCurrency: "GBP",
			amount: '1',
			currencies: []
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

	convertHandler = () => {
		if (this.state.fromCurrency !== this.state.toCurrency) {
			axios
				.get(
					`http://api.openrates.io/latest?base=${this.state.fromCurrency
					}&symbols=${this.state.toCurrency}`
				)
				.then(response => {
					const result =
						this.state.amount * response.data.rates[this.state.toCurrency];
					this.setState({ result: result.toFixed(2) });
				})
				.catch(error => {
					console.log("Opps", error.message);
				});
		} else {
			this.setState({ result: "You cant convert the same currency!" });
		}
	};

	selectFromHandler = event => {
		this.setState({ fromCurrency: event });
	};

	selectToHandler = event => {
		this.setState({ toCurrency: event });
	};

	onChangeText = (text) => {
		this.setState({ amount: text });
	}

	onFailToRecieveAd = (error) => {
		console.log(error);
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.textHeaderStyle}>Calculate TODAY's conversion rates here!</Text>
					<TextInput style={styles.textInputStyle}
						onChangeText={text => this.onChangeText(text)} 
						value={this.state.amount.toString()} placeholder="Please enter amount to convert"/>
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
                        <Text style={styles.text}>Convert</Text>
                    </TouchableOpacity>
					<Text style={styles.convertedText}> Converted Amount: {this.state.result} </Text>
					<View style={styles.bannerView}>
						<AdMobBanner
							adSize="largeBanner"
							adUnitID="ca-app-pub-8628320246149288/6127254062"
							testDeviceID="0e71ca58363346548bc3205f4b0dda55"
							didFailToReceiveAdWithError={this.onFailToRecieveAd} />
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get('window').width - 30,
		height: '100%',
        width: '100%'
    },
	textHeaderStyle: {
		height: 40, 
		marginTop: 20,
		paddingLeft: 20,
		fontFamily: 'sans-serif-condensed', fontWeight: 'bold', fontSize: 18,
		color: '#000',
		marginBottom: 20,
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
	},
	convertedText: {
		fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        fontSize: 22,
		color: '#000',
		marginLeft: 20, marginRight: 20,
		height: 30,
		marginBottom: 20
	},
    bannerView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', //Here is the trick
        bottom: 0, //Here is the trick,
		height: 100,
		// backgroundColor: 'red'
    }
});

export default TakeTestOrLearn;