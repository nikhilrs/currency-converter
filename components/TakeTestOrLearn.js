import React from "react";
import axios from "axios";
import { StyleSheet, Picker, Text, View, TextInput, TouchableOpacity } from 'react-native';

class TakeTestOrLearn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			result: null,
			fromCurrency: "USD",
			toCurrency: "GBP",
			amount: 1,
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
					this.setState({ result: result.toFixed(5) });
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

	render() {
		return (
			<View>
				<View>
					<Text style={styles.textHeaderStyle}>Calculate today's conversion rates here!</Text>
					<TextInput style={styles.textInputStyle}
						onChangeText={text => this.onChangeText(text)} value={this.state.amount.toString()} />
					<Picker style={styles.pickerStyle} name="from" mode="dropdown"
						selectedValue={this.state.fromCurrency}
						onValueChange={event => this.selectFromHandler(event)}> 
							{this.state.currencies.map((item, index) => {
								return (<Picker.Item label={item} value={item} key={index}/>) 
							})}
					</Picker>
					<Picker style={styles.pickerStyle}  name="to" mode="dropdown"
						selectedValue={this.state.toCurrency}
						onValueChange={event => this.selectToHandler(event)}> 
							{this.state.currencies.map((item, index) => {
								return (<Picker.Item label={item} value={item} key={index}/>) 
							})}
					</Picker>
					<TouchableOpacity style={styles.convertButtonStyle} onPress={this.convertHandler}>
                        <Text style={styles.text}>Convert</Text>
                    </TouchableOpacity>
					<Text style={styles.convertedText}> Converted Amount: {this.state.result} </Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	textHeaderStyle: {
		height: 40, 
		// marginLeft: 20, marginRight: 20,
		marginTop: 50,
		paddingLeft: 20,
		fontFamily: 'sans-serif-condensed', fontWeight: 'bold', fontSize: 18
	},
	textInputStyle: {
		height: 40, 
		borderColor: 'gray', borderWidth: 1, 
		marginLeft: 20, marginRight: 20,
		borderRadius: 5, borderWidth: 1,
		marginTop: 20, marginBottom: 20,
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
		marginBottom: 20,
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
		marginTop: 20,
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
        fontSize: 18,
		color: '#000',
		marginLeft: 20, marginRight: 20
	}
});

export default TakeTestOrLearn;