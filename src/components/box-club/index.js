import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  LogoAnnahl,
  LogoArsyil,
  LogoAwang,
  LogoBogor,
  LogoVamos,
  LogoVeFC,
} from '../../assets';
import SmallButton from '../small-button';
const BoxClub = ({club, statistic}) => {
  const Logo = () => {
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
    <TouchableOpacity style={styles.container}>
      <Logo />
      <Text>{club}</Text>
      <View style={styles.statistic}>
        <SmallButton text={statistic} />
      </View>
    </TouchableOpacity>
  );
};

export default BoxClub;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginRight: 10,
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
  logo: {
    width: 52,
    height: 52,
  },
  statistic: {
    position: 'absolute',
    bottom: -10,
  },
});
