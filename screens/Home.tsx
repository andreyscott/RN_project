import React from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Image,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import AppText from '../Components/AppText';
import CustomButton from '../Components/CustomButton';
import colors from '../assets/Constant/colors';

import {RootStackParamList} from '../navigation/Routes/HomeNavigator';

type ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: ScreenNavigationProp;
};

const HomeScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.logoContainer}
        source={require('../assets/images/stacked-waves-haikei.png')}>
        <View>
          <Image style={styles.logo} source={require('../assets/images/LOGO.png')} />
        </View>
      </ImageBackground>
      <View style={styles.textContainer}>
        <View style={styles.iconBox}>
          <Image source={require('../assets/images/box.jpg')} />
        </View>
        <View>
          <AppText
            color={colors.dark}
            fontWeight={'bold'}
            fontSize={40}
            text={'Non-Contact \n Deliveries'}
            textStyle={styles.title}
          />
          <AppText
            color={colors.grey}
            fontWeight={'normal'}
            fontSize={21}
            text={
              'When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door'
            }
            textStyle={styles.subtitle}
          />
        </View>
        <CustomButton
          onPress={() => navigation.navigate('AppNavigation')}
          backgroundColor={colors.secondary}
          title={'order now'}
          ButtonStyle={styles.btn}
          width={'90%'}
          textColor={colors.white}
        />
        <CustomButton
          onPress={() => {}}
          backgroundColor={colors.primary}
          title={'dismiss'}
          ButtonStyle={styles.btn}
          width={'90%'}
          textColor={colors.grey}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  logoContainer: {
    flex: 1,
    backgroundColor: colors.purple,
   paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
   paddingTop: 45,
    paddingLeft: 15,
  },
  logo: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1.8,
    top: -30,
    backgroundColor: colors.primary,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  iconBox: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    elevation: 0.5,
    marginTop: 20,
    borderRadius: 100,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    padding: 18,
    textAlign: 'center',
    marginTop: 7,
    lineHeight: 30,
  },
  btn: {
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
});
