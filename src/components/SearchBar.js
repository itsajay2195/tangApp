import React, {useMemo} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../styles/theme';

const SearchBar = ({placeholder, textValue, onChangeText, resetSearch}) => {
  const themedStyles = useMemo(() => {
    return {
      container: {
        margin:20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        borderRadius: 20,
        paddingHorizontal: 10,
        // borderColor: isDarkThemed ? theme.colors.grey : null,
        // borderWidth: isDarkThemed ? 0.5 : null,
      },
    };
  }, []);
  return (
    <View style={themedStyles.container}>
      <Icon name="search" size={22} color="#666" style={{marginRight: 10}} />
      <TextInput
        style={textInputStyles}
        placeholder={placeholder || 'Search Here'}
        placeholderTextColor={theme.colors.black}
        value={textValue}
        onChangeText={onChangeText}
      />
      {textValue.length > 0 ? (
        <Icon
          name="close"
          size={22}
          color="#666"
          onPress={resetSearch}
          style={{marginRight: 10}}
        />
      ) : null}
    </View>
  );
};

export default SearchBar;

const textInputStyles = {fontSize: 16, padding: 6, width: '80%'};
