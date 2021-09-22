import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import HeaderInformation from '../../components/header-information';
import {ImageBanner} from '../../assets';
import Service from '../../components/service';
const Home = () => {
  const [service, setService] = useState("Booking")
  return (
    <View style={styles.page}>
      <View style={styles.headerInformation}>
        <HeaderInformation />
      </View>
      <View style={styles.bannerContainer}>
        <Image source={ImageBanner} style={styles.banner} />
      </View>
      <View style={styles.wrapperLabel}>
        <Text style={styles.label}>
          Ayo <Text style={styles.textBold}>Wayahe Futsal</Text>
        </Text>
      </View>
      <View style={styles.service}>
        <Service
          title="Subscribe"
          onPress={() => setService('Subscribe')}
          active={service === 'Subscribe'}
        />
        <Service
          title="Booking"
          onPress={() => setService('Booking')}
          active={service === 'Booking'}
        />
        <Service
          title="Join Team"
          onPress={() => setService('Join Team')}
          active={service === 'Join Team'}
        />
      </View>
    </View>
  );
};

export default Home;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerInformation: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  bannerContainer: {
    paddingHorizontal: 30,
  },
  banner: {
    width: '100%',
    height: windowHeight * 0.16,
    marginTop: windowHeight * 0.016,
    // borderRadius: 25,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
  },
  textBold: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  wrapperLabel: {
    paddingHorizontal: 30,
    marginTop: 14,
  },
  service: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: windowHeight * 0.05,
  },
});
