import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { PRIMAY_COLOR } from '../../utils/constants';

const SmallButton = ({text, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default SmallButton
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMAY_COLOR,
        padding: 3,
        borderRadius: 5,
        height: windowHeight * 0.03
    },
    text: {
        color: "white",
        fontSize: 10,
        fontFamily: "Poppins-Bold"
    }
})
