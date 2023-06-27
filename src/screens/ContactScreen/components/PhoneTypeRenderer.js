import {StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const PhoneTypeRenderer = ({type, size}) => {
  let iconName = 'question-circle';
  let iconColor = 'gray';

  switch (type) {
    case 'work':
      iconName = 'briefcase';
      iconColor = 'blue';
      break;
    case 'home':
      iconName = 'home';
      iconColor = 'green';
      break;
    case 'fax':
      iconName = 'fax';
      iconColor = 'red';
      break;
    case 'mobile':
      iconName = 'mobile';
      iconColor = 'orange';
      break;
    case 'other':
      iconName = 'question-circle';
      iconColor = 'gray';
      break;
    default:
      break;
  }

  return <Icon name={iconName} size={size || 20} color={iconColor} />;
};

export default PhoneTypeRenderer;

const styles = StyleSheet.create({});
