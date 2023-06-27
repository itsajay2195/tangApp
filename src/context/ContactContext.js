import React, {createContext, useState} from 'react';

export const ContactContext = createContext();

export const ContactContextProvider = ({children}) => {
  const [data, setData] = useState([]);

  // Define any other state variables or functions you want to share

  return (
    <ContactContext.Provider value={{data, setData}}>
      {children}
    </ContactContext.Provider>
  );
};
