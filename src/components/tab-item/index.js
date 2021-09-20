import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from '../icon';
import {PRIMAY_COLOR, SECONDARY_COLOR} from '../../utils/constants';
const TabItem = props => {
  const {label, onPress, onLongPress, isFocused} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={isFocused ? styles.containerIsFocused : styles.container}>
      <Icon label={label} isFocused={isFocused} />
      {isFocused && <Text style={styles.text}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5,
  },
  containerIsFocused: {
    alignContent: 'center',
    padding: 5,
    backgroundColor: SECONDARY_COLOR,
    flexDirection: 'row',
    borderRadius: 10,
  },
  text: {
    color: PRIMAY_COLOR,
    fontSize: 18,
    marginLeft: 8,
    fontFamily: 'Poppins-Bold',
  },
});
