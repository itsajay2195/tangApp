import React, {createContext, useState} from 'react';

export const ContactContext = createContext();

export const ContactContextProvider = ({children}) => {
  const [data, setData] = useState(null);
  const [tempNumber, setTempNumber] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  // Define any other state variables or functions you want to share

  return (
    <ContactContext.Provider
      value={{
        data,
        setData,
        showAlert,
        setShowAlert,
        tempNumber,
        setTempNumber,
      }}>
      {children}
    </ContactContext.Provider>
  );
};
