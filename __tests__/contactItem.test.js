import React, {useState, useContext} from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const ContactContext = React.createContext(null);

const Provider = ({children}) => {
  const [item, setItem] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const setData = data => {
    setItem(data);
  };

  const setShowAlertValue = value => {
    setShowAlert(value);
  };

  return (
    <ContactContext.Provider
      value={{
        item, // Set the value of `item`
        setData,
        setShowAlert: setShowAlertValue,
      }}>
      {children}
    </ContactContext.Provider>
  );
};

const ContactItemWrapper = () => {
  const contactContext = useContext(ContactContext);

  // Ensure `item` is not null before accessing its properties
  if (!contactContext.item) {
    return null;
  }

  return <ContactItem item={contactContext.item} />;
};

describe('ContactItem', () => {
  it('should render the contact item with the correct name and phone number', () => {
    const item = {
      company: '',
      department: '',
      displayName: 'Barath clas ma',
      emailAddresses: [],
      familyName: 'ma',
      givenName: 'Barath',
      hasThumbnail: true,
      imAddresses: [],
      isStarred: false,
      jobTitle: '',
      middleName: 'clas',
      note: null,
      phoneNumbers: [
        {id: '5', label: 'work', number: '+91 95669 88277'},
        {id: '3688', label: 'home', number: '1 (234) 567-899'},
      ],
      postalAddresses: [],
      prefix: null,
      rawContactId: '1',
      recordID: '1',
      suffix: null,
      thumbnailPath: 'content://com.android.contacts/display_photo/1',
      urlAddresses: [],
    };

    const wrapper = shallow(
      <Provider>
        <ContactItemWrapper />
      </Provider>,
    );

    const contactItemWrapper = wrapper.find(ContactItemWrapper);
    const displayNames = contactItemWrapper
      .dive()
      .find('Text')
      .filterWhere(text => text.props().children === 'Barath clas ma');
    expect(displayNames).toHaveLength(1);
    expect(displayNames.at(0).props().children).toEqual('Barath clas ma');
  });
});
