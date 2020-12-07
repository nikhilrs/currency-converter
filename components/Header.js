import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

export default class Header extends Component {

    _showHelpPage = () => {
        this._menu.hide();
        this.props.selectedMenu('Help');
    }

    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = (menuSelected) => {
        this._menu.hide();
        this.props.selectedMenu(menuSelected);
    };

    showMenu = () => {
        this._menu.show();
    };

    render() {
        const styles = StyleSheet.create({
            container: {
                height: 55,
                backgroundColor: "#3584d4",
                flexDirection: 'row',
                width: Dimensions.get('window').width,
                alignItems: 'center'
            },
            infoIconHelp: {
                width: 27,
                height: 27,
                marginTop: 3
            },
            headerLabel: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: Dimensions.get('window').width / 2,
            },
            headerButtons: {
                width: '20%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingRight: 15
            },
            headerText: {
                fontSize: 22,
                color: '#FFFFFF',
                fontFamily: "sans-serif-condensed",
                fontWeight: "bold"
            },
            menuItem: {
                fontSize: 16,
                color: 'black',
                fontFamily: "sans-serif-condensed"
            }
        });

        return (
            <View style={styles.container}>
                <View style={{ width: '20%', paddingLeft: 15 }}>
                    <Menu ref={this.setMenuRef}
                        button={ 
                            <TouchableOpacity onPress={this.showMenu} >
                                <Image style={styles.infoIconHelp} source={require('../assets/menu.png')} />
                            </TouchableOpacity>
                        } >
                        <MenuItem onPress={() => this.hideMenu('Home')}><Text style={styles.menuItem}>Home</Text></MenuItem><MenuDivider />
                        {/* <MenuItem onPress={() => this.hideMenu('Notifications')}><Text style={styles.menuItem}>Saved</Text></MenuItem><MenuDivider /> */}
                        {/* <MenuItem onPress={() => this.hideMenu('Help')}><Text style={styles.menuItem}>Help</Text></MenuItem><MenuDivider /> */}
                        <MenuItem onPress={() => this.hideMenu('About')}><Text style={styles.menuItem}>About</Text></MenuItem>
                    </Menu>
                </View>
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.headerLabel}>
                        <Text style={styles.headerText}>Currency Converter</Text>
                    </View>
                </View>
                <View style={styles.headerButtons}>
                    <TouchableOpacity onPress={this._showHelpPage}>
                        <Image style={styles.infoIconHelp} source={require('../assets/information.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}