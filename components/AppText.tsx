import React from 'react';
import {View, Text, StyleSheet, TextStyle} from 'react-native';

type Props = {
  text: string;
  fontWeight:   'number';
  color: string;
  textStyle?: TextStyle;
};

const AppText = ({text, color, fontSize,textStyle}: Props) => {
  return (
    <View>
      <Text style={[styles(color, fontSize).textStyle, textStyle]}>
        {text}
      </Text>
    </View>
  );
};

const styles = (
  color: string,
  fontSize: number,
  fontWeight: 'normal' | 'bold',
) =>
  StyleSheet.create({
    textStyle: {
      color: color,
      fontWeight: fontWeight,
      fontSize: fontSize,
    },
  });

export default AppText;
