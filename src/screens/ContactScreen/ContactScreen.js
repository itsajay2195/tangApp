import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Platform,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect, useContext, useCallback} from 'react';
import Contact from 'react-native-contacts';
import {useIsFocused} from '@react-navigation/native';
import renderItem from './components/renderItem';
import Alert from './components/MultipleNumberAlert';
import {ContactContext} from '../../context/ContactContext';
import SearchBar from '../../components/SearchBar';
import {keyExtractor} from './components/renderItem';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import theme from '../../styles/theme';

const ContactScreen = () => {
  const {showAlert} = useContext(ContactContext);
  const [contacts, setContacts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(null);
  const isFocused = useIsFocused();

  const handleSearch = useCallback(
    query => {
      setSearchQuery(query);

      if (query === '') {
        setFilteredContacts(null);
      } else {
        const filtered = contacts.filter(contact => {
          return contact.displayName
            .toLowerCase()
            .includes(query.toLowerCase());
        });
        setFilteredContacts(filtered);
      }
    },
    [contacts],
  );

  const resetSearch = useCallback(() => {
    setSearchQuery('');
    setFilteredContacts(null);
  }, []);

  useEffect(() => {
    getPermission();
  }, [getPermission, isFocused]);

  const getPermission = useCallback(async () => {
    const permission = Platform.select({
      android: PERMISSIONS.ANDROID.READ_CONTACTS,
      ios: PERMISSIONS.IOS.CONTACTS,
    });

    let isGranted = await check(permission);
    console.log(isGranted);

    if (isGranted === RESULTS.DENIED) {
      try {
        const res = await request(permission);
        if (res === RESULTS.GRANTED) {
          const contacts = await Contact.getAll();
          // work with contacts
          setContacts(contacts);
          setLoading(false);
        }
      } catch (e) {
        // console.log(error);
        setLoading(false);
        setError(true);
      }
    }

    if (isGranted === RESULTS.GRANTED) {
      try {
        const contacts = await Contact.getAll();
        // work with contacts
        setContacts(contacts);
        setLoading(false);
      } catch (e) {
        // console.log(error);
        setLoading(false);
        setError(true);
      }
    }
  }, []);
  return (
    <View style={styles.cotainer}>
      {showAlert ? (
        <Alert message={'Choose a number:'} />
      ) : (
        <>
          <SearchBar
            placeholder={'search here'}
            textValue={searchQuery}
            onChangeText={handleSearch}
            resetSearch={resetSearch}
          />
          {error ? (
            <Text style={styles.errorTextStyle}> Something went wrong.</Text>
          ) : null}
          {loading ? (
            <ActivityIndicator size={'large'} color={theme.colors.blue} />
          ) : (
            <FlatList
              data={filteredContacts !== null ? filteredContacts : contacts}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              initialNumToRender={20} //prop tells FlatList how many items to render initially.
              maxToRenderPerBatch={30} // prop controls how many items are rendered at a time when the user scrolls
              windowSize={20} //prop controls how many items are rendered around the current scroll position
              legacyImplementation={true}
              // getItemLayout={getItemLayout}
            />
          )}
        </>
      )}
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  cotainer: {flex: 1, backgroundColor: '#000'},
  errorTextStyle: {fontSize: theme.fontSizes.large, color: theme.colors.red},
});
