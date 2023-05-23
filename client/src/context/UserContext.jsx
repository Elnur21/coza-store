import React, { createContext, useEffect, useState } from 'react';
import { getUsers } from '../api/requests';
import swal from 'sweetalert';

const UserContext = createContext();


const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers()
            .then(data => {
                setUsers(data)
            });
    }, []);

    const sweetAlert = (title, text, type) => {
        swal({
            title: title,
            text: text,
            icon: type,
        });
    }

    const value = {
        users,
        sweetAlert
    };


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
