import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo, useState, useContext, useCallback} from 'react';
import {ContactContext} from '../../../context/ContactContext';
import theme from '../../../styles/theme';

const NumberListItem = ({item}) => {
  const {tempNumber, setTempNumber} = useContext(ContactContext);

  const onItemClick = useCallback(() => {
    setTempNumber(item);
  }, [item, setTempNumber]);

  const containerStyle = useMemo(() => {
    return {
      height: 50,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:
        tempNumber?.number === item.number ? theme.colors.blue : null,
    };
  }, [item.number, tempNumber?.number]);
  return (
    <TouchableOpacity onPress={onItemClick} style={containerStyle}>
      <Text style={{color: theme.colors.black}}>{item.number}</Text>
    </TouchableOpacity>
  );
};

export const keyExtractor = (item, index) => {
  return `contact${item.displayName}-${index}`;
};

export const numberListRenderItem = ({item}) => {
  return <NumberListItem item={item} />;
};

export default NumberListItem;

const styles = StyleSheet.create({});
