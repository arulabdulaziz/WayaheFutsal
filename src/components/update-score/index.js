import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  LogoAnnahl,
  LogoArsyil,
  LogoAwang,
  LogoBogor,
  LogoVamos,
  LogoVeFC,
} from '../../assets';
import { PRIMAY_COLOR } from '../../utils/constants';
const UpdateScore = ({club1, club2, score1, score2, date}) => {
  const Logo = ({club}) => {
    switch (club) {
      case 'An Nahl Fa':
        return <Image source={LogoAnnahl} style={styles.logo} />;
      case 'Vamos FC':
        return <Image source={LogoVamos} style={styles.logo} />;
      case 'Awang Long FA':
        return <Image source={LogoAwang} style={styles.logo} />;
      case 'VE FC':
        return <Image source={LogoVeFC} style={styles.logo} />;
      case 'Bogor FC':
        return <Image source={LogoBogor} style={styles.logo} />;
      case 'Arsyil FC':
        return <Image source={LogoArsyil} style={styles.logo} />;
      default:
        return <Image source={LogoAnnahl} style={styles.logo} />;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.match}>
        <View style={styles.box}>
          <Logo club={club1}/>
          <Text style={styles.textClub}>{club1}</Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.textScore}>
            {score1} : {score2}
          </Text>
        </View>
        <View style={styles.box}>
          <Logo club={club2}/>
          <Text style={styles.textClub}>{club2}</Text>
        </View>
      </View>
        <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default UpdateScore;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 10,
  },
  logo: {
    width: 52,
    height: 52,
  },
  match: {
    flexDirection: 'row',
  },
  textClub: {
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: 10,
  },
  textScore: {
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
    color: PRIMAY_COLOR,
  },
  score: {
    height: 21,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 6,
    paddingVertical: 3,
    zIndex: 1,
    marginHorizontal: -15,
  },
  date: {
      fontSize: 10,
      fontFamily: "Poppins-Light"
  }
});
