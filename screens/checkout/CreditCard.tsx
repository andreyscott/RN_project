import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';

import colors from '../../assets/Constant/colors';
import AppText from '../../components/AppText';
import Input from '../../components/TextInput';
import CustomButton from '../../components/CustomButton';
import CreditCardComponent from '../../components/CreditCardComponent';

const Creditcard = () => {
  const [cardName, setcardName] = React.useState('Alexandra Smith');
  const [cardNmb, setcardNmb] = React.useState('4747  4747  4747  4747');
  const [expiry, setexpiry] = React.useState('07/21');
  const [cvc, setCvc] = React.useState('419');

  return (
    <SafeAreaView style={styles.conatiner}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <AppText
            text={'Credit / Debit card'}
            color={colors.dark}
            fontSize={25}
            fontWeight={'bold'}
          />
          <CreditCardComponent
            cardName={cardName}
            cardNmb={cardNmb}
            expiry={expiry}
          />
        </View>
        <View style={styles.cardDetails}>
          <Input
            value={cardName}
            text="name on Card"
            onChangeText={text => setcardName(text)}
          />
          <Input
            value={cardNmb}
            text="Card number"
            onChangeText={text => setcardNmb(text)}
            icon="logo"
          />
          <View style={styles.inputContainer}>
            <View style={{width: '45%'}}>
              <Input
                value={expiry}
                text="Expiry date"
                onChangeText={text => setexpiry(text)}
              />
            </View>
            <View style={{width: '45%'}}>
              <Input
                value={cvc}
                text="CVC"
                onChangeText={text => setCvc(text)}
                icon="icon"
              />
            </View>
          </View>
          <CustomButton
            onPress={() => {}}
            backgroundColor={colors.secondary}
            title={'Use this card'}
            ButtonStyle={{marginVertical: 30}}
            width={'100%'}
            textColor={colors.white}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Creditcard;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    marginHorizontal: 10,
  },
  cardContainer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 0.5,
  },
  cardDetails: {
    flex: 1,
  },
  inputContainer: {
    
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});
