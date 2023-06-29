import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext} from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import {SCREENS} from '../../../constants/ScreenConstant';
import {ContactContext} from '../../../context/ContactContext';
import theme from '../../../styles/theme';
import {keyExtractor, numberListRenderItem} from './NumberListItem';

// const renderItem = ({item}) => {
//   const [isSelected, setSelected] = useState(false);
//   useEffect(() => {}, []);
// };

const Alert = ({message}) => {
  const navigation = useNavigation();
  const {data, showAlert, setShowAlert, setData, tempNumber} =
    useContext(ContactContext);
  const onClose = useCallback(() => {
    setShowAlert(prev => !prev);
  }, [setShowAlert]);

  const onProceed = useCallback(() => {
    setData(tempNumber);
    setShowAlert(prev => !prev);
    // setTempNumber(null);
    navigation.navigate(SCREENS.home);
  }, [navigation, setData, setShowAlert, tempNumber]);
  return (
    <Modal visible={showAlert} transparent>
      <View style={styles.container}>
        <View style={styles.alertBox}>
          <View style={styles.messageWrapper}>
            <Text style={styles.message}>{message}</Text>
          </View>
          <View style={styles.bodyWrapper}>
            <FlatList
              data={data.phoneNumbers}
              renderItem={numberListRenderItem}
              keyExtractor={keyExtractor}
            />
          </View>

          <View style={{display: 'flex', flexDirection: 'row-reverse'}}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.closeButton} onPress={onProceed}>
              <Text style={styles.closeButtonText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginHorizontal: 30,
  },
  messageWrapper: {flex: 0.2, justifyContent: 'center'},
  alertBox: {
    flex: 0.3,
    backgroundColor: theme.colors.white,
    padding: 10,
    borderRadius: 5,
  },
  message: {
    fontSize: theme.fontSizes.medium,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
  closeButton: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    margin: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: theme.colors.blueSecondary,
    borderRadius: 10,
  },
  closeButtonText: {
    color: theme.colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bodyWrapper: {flex: 1},
};

export default Alert;
