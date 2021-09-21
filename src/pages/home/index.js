import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import HeaderInformation from '../../components/header-information';
import {ImageBanner} from '../../assets';
const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.headerInformation}>
        <HeaderInformation />
        <View>
          <Image source={ImageBanner} style={styles.banner} />
        </View>
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
  banner: {
    width: '100%',
    height: windowHeight * 0.16,
    marginTop: windowHeight * 0.016,
    // borderRadius: 25,
  },
});
