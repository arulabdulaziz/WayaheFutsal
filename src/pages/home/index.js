import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import HeaderInformation from '../../components/header-information';
import {ImageBanner} from '../../assets';
import Service from '../../components/service';
import SmallButton from '../../components/small-button';
import BoxClub from '../../components/box-club';
import UpdateScore from '../../components/update-score';
const Home = () => {
  const [service, setService] = useState('Booking');
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
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
        <View style={styles.labelSparring}>
          <Text style={styles.label}>
            Pilih Team <Text style={styles.textBold}>Sparring</Text> Kamu
          </Text>
          <SmallButton text="Lihat Semua" />
        </View>
        <View style={styles.club}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            style={styles.logos}
            horizontal>
            <BoxClub club="Vamos FC" statistic="WWDDDL" />
            <BoxClub club="VE FC" statistic="WWDDDL" />
            <BoxClub club="An Nahl Fa" statistic="WWDDDL" />
            <BoxClub club="Arsyil FC" statistic="WWDDDL" />
            <BoxClub club="Awang Long FA" statistic="WWDDDL" />
            <BoxClub club="Bogor FC" statistic="WWDDDL" />
          </ScrollView>
        </View>
        <View style={styles.labelSparring}>
          <Text style={styles.label}>Update Score</Text>
          <SmallButton text="Lihat Semua" />
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={styles.logos}
          horizontal>
          <View style={styles.score}>
            <UpdateScore
              club1="An Nahl Fa"
              club2="Vamos FC"
              score1={5}
              score2={2}
              date={'Rabu, 22 September 2021'}
            />
            <UpdateScore
              club1="Awang Long FA"
              club2="Bogor FC"
              score1={5}
              score2={2}
              date={'Kamis, 23 September 2021'}
            />
            <UpdateScore
              club1="Arsyil FC"
              club2="VE FC"
              score1={5}
              score2={2}
              date={'Jumat, 24 September 2021'}
            />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
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
  labelSparring: {
    paddingHorizontal: 30,
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  club: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  logos: {
    marginHorizontal: 30,
  },
  score: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
