import React, { createContext, useEffect, useState } from 'react';
import { getCategories } from '../api/requests';

const CategoryContext = createContext();


const CategoryContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
            .then(data => {
                setCategories(data)
            });
    }, []);



    const value = {
        categories
    };


    return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};

export { CategoryContext, CategoryContextProvider };
