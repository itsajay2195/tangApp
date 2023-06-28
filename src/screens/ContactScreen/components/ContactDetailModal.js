import React, {useCallback, useContext} from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import {ContactContext} from '../../../context/ContactContext';
import theme from '../../../styles/theme';

const Alert = ({message}) => {
  const {data, showAlert, setShowAlert} = useContext(ContactContext);
  const onClose = useCallback(() => {
    setShowAlert(prev => !prev);
  }, [setShowAlert]);
  return (
    <Modal visible={showAlert} transparent>
      <View style={styles.container}>
        <View style={styles.alertBox}>
          <View style={styles.messageWrapper}>
            <Text style={styles.message}>{message}</Text>
          </View>
          <View style={styles.bodyWrapper}>
            <FlatList
              data={data}
            />
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
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
  messageWrapper: {flex: 0.2, borderWidth: 1, justifyContent: 'center'},
  alertBox: {
    flex: 0.4,
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
    flex: 0.2,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    margin: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: theme.colors.blueSecondary,
    borderRadius: 10,
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
  bodyWrapper: {flex: 0.6, borderWidth: 1},
};

export default Alert;
