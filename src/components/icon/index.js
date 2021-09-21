import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  IconHome,
  IconHomeActive,
  IconField,
  IconFieldActive,
  IconUser,
  IconUserActive,
  IconDefaultUser,
  IconStadion,
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
    case 'Default User':
      return <IconDefaultUser />;
    case 'Stadion':
      return <IconStadion />;
    default:
      return <IconHome />;
  }
};

export default Icon;

const styles = StyleSheet.create({});
