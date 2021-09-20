import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  IconHome,
  IconHomeActive,
  IconField,
  IconFieldActive,
  IconUser,
  IconUserActive,
} from '../../assets';
const Icon = props => {
  const {label, isFocused} = props;
  switch (label) {
    case 'Home':
      return isFocused ? <IconHomeActive /> : <IconHome />;
    case 'Field':
      return isFocused ? <IconFieldActive /> : <IconField />;
    case 'Akunt':
      return isFocused ? <IconUserActive /> : <IconUser />;
    default:
      return <IconHome />;
  }
};

export default Icon;

const styles = StyleSheet.create({});
