import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from '../icon';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../../utils/constants';
const Service = props => {
  const {title, active, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(active)}>
      <View style={styles.icon}>
        <Icon label={title} />
        <Text style={styles.text(active)}>Paket{'\n'}Langganan</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Service;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: active => ({
    alignItems: 'center',
    backgroundColor: active ? '#6C77EB' : '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    borderColor: SECONDARY_COLOR,
    borderWidth: active ? 0 : 2,
  }),
  text: active => ({
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: active ? 'white' : SECONDARY_COLOR,
    textAlign: 'center',
  }),
  icon: {
    marginTop: -30,
  },
});
