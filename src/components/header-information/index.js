import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from '../icon';
const HeaderInformation = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.infoUser}>
          <View>
            <Icon label="Default User" />
          </View>
          <View style={styles.textInfoUser}>
            <Text style={styles.userGreet}>Hello Bro,</Text>
            <Text style={styles.userName}>Arul</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.schedule}>
          <View style={{marginTop: 5}}>
            <Text style={styles.scheduleClock}>19:00 WIB</Text>
            <Text style={styles.date}>Sabtu, 01-08-2020</Text>
          </View>
          <View style={styles.iconSchedule}>
            <Icon label="Stadion" />
            <Text style={styles.scheduleText}>Next Jadwal</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
}

export default HeaderInformation

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoUser: {
    flexDirection: 'row',
  },
  textInfoUser: {
    marginLeft: 10,
  },
  userGreet: {
    fontFamily: 'Poppins',
    fontSize: 13,
  },
  userName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
  },
  schedule: {
    flexDirection: 'row',
  },
  iconSchedule: {
    alignItems: 'center',
  },
  scheduleText: {
    fontSize: 11,
    fontFamily: 'Poppins-Light',
  },
  scheduleClock: {
    fontFamily: 'Poppins-Bold',
    fontSize: 11,
    textAlign: 'right',
  },
  date: {
    textAlign: 'right',
    fontSize: 11,
    fontFamily: 'Poppins-Light',
  },
});
