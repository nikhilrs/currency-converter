import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

function Square(props) {
  return (
    <TouchableOpacity onPress={props.onClick} style={styles.square}>
      <Text style={styles.char}>{props.value}</Text>
    </TouchableOpacity>
  );
}

export default Square;

const styles = StyleSheet.create({
  square: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderWidth: 1, //solid
    borderColor: 'transparent',
    margin: 10,
    borderRadius: 5,

    lineHeight: 34,
    marginRight: -1,
    marginTop: -1,
    padding: 0,
    width: 100,
    height: 100,
  },
  char: {
    flexDirection: 'row',
    fontSize: 55,
    fontWeight: '700',
    color: '#3584d4',
  },
});
