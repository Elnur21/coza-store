import React, { createContext, useEffect, useState } from 'react';
import { getUser, getUsers } from '../api/requests';
import swal from 'sweetalert';

const UserContext = createContext();


const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({
        role: "unlogged"
    });
    useEffect(() => {
        getUsers()
            .then(data => {
                setUsers(data)
            });
    }, []);
    const getUser = (userEmail) => {
        setUser(users.filter(user => user.email == userEmail)[0])
    }
    const sweetAlert = (title, text, type) => {
        swal({
            title: title,
            text: text,
            icon: type,
        });
    }

    const value = {
        users,
        sweetAlert,
        getUser,
        user
    };


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
