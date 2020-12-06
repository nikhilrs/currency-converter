import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Alert, Text, Dimensions, ScrollView } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

var db;

class SavedQuestions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultsArray: [],
            isLoading: true,
            selectedItemData: '',
            selectedItemId: ''
        }
    }

    componentDidMount() {
        db = SQLite.openDatabase({ name: 'quiz.db', createFromLocation: "~quiz.db" }, this.connected, this.failed);
        this._loadHistory();
    }

    _loadHistory = () => {
        db.transaction(txn => {
            txn.executeSql(
                'CREATE TABLE IF NOT EXISTS savedQuestions(id INTEGER PRIMARY KEY AUTOINCREMENT, data VARCHAR(5000))',
                [],
                (tx, res) => {
                    
                },
                (error) => {
                    console.log('create table failed : ', error);
                }
            );
        });

        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM savedQuestions order by id DESC',
                [],
                (tx, results) => {
                    for (let index = 0; index < results.rows.length; index++) {
                        this.setState({ resultsArray: [...this.state.resultsArray, results.rows.item(index)] })
                    }
                    this.setState({
                        isLoading: false
                    });
                },
                (error) => {
                    console.log('Error during fetch from history: ', error);
                }
            );
        });
    }

    _showPopUpToViewOrDelete = (item) => {
        this.setState({
            selectedItemData: item,
            selectedItemId: item.id
        })
        Alert.alert(
            'View/Delete',
            'Tap View button to load the text or Delete button to delete from Saved items',
            [
                { text: 'Close', onPress: () => console.log("Cancel Pressed") },
                { text: 'Load', onPress: this._viewQRBarCode },
                { text: 'Delete', onPress: this._deleteQRBarCode },
            ],
            {
                cancelable: true
            }
        );
    }

    _viewQRBarCode = () => {
        this.props.loadSelectedText(this.state.selectedItemData);
    }

    _deleteQRBarCode = () => {
        db.transaction(txn => {
            txn.executeSql(
                "DELETE FROM savedTexts where id = ?",
                [this.state.selectedItemId],
                (tx, res) => {
                    this._reloadHistory();
                },
                (error) => {
                    console.log('DB operation error : ', error);
                }
            );
        });
        
    }

    _reloadHistory = () => {
        this.setState({
            resultsArray: [],
            isLoading: true,
            selectedItemData: '',
            selectedItemId: ''
        });
        this._loadHistory();
    }

    render() {
        if (!this.state.isLoading) {
            return (
                <ScrollView>
                    <Text style={styles.headerLabel}>Saved Texts</Text>
                    <TableView>
                        <Section>
                            {
                                this.state.resultsArray.length > 0 ? 
                                    this.state.resultsArray.map(item => (
                                        <Cell style={styles.cellLabel} key={item.id} cellStyle="Basic" accessory="Detail"
                                            title={item.data} onPress={() => this._showPopUpToViewOrDelete(item)} />
                                    ))
                                    :   
                                    <Text style={styles.noRecordsText}>No records available!</Text>
                            }
                        </Section>
                    </TableView>
                </ScrollView>
            );
        } else {
            return (
                <ActivityIndicator />
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: "#D3D3D3",
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    noRecordsText: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    }
});

export default SavedQuestions;