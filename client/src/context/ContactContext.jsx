import React, { createContext, useEffect, useState } from 'react';
import { deleteContactById, getContacts, updateContactById } from '../api/requests';

const ContactContext = createContext();


const ContactContextProvider = ({ children }) => {
    const deleteContact = async (id) => {
        await deleteContactById(id);
    }
    const updateContact = async (contact) => {
        await updateContactById(contact);
    }
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        getContacts()
            .then(data => {
                setContacts(data)
            });
    }, []);


    const value = {
        contacts,
        deleteContact,
        updateContact
    };


    return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;
};

export { ContactContext, ContactContextProvider };
