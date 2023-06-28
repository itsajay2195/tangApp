import React, {createContext, useState} from 'react';

export const ContactContext = createContext();

export const ContactContextProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [showAlert, setShowAlert] = useState(true);
  // Define any other state variables or functions you want to share

  return (
    <ContactContext.Provider value={{data, setData, showAlert, setShowAlert}}>
      {children}
    </ContactContext.Provider>
  );
};
