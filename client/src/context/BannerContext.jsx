import React, { createContext, useEffect, useState } from 'react';
import { deleteCategoryById, getCategories, updateCategoryById } from '../api/requests';

const CategoryContext = createContext();


const CategoryContextProvider = ({ children }) => {
    const deleteCategory = async (id) => {
        await deleteCategoryById(id);
    }
    const updateCategory = async (category) => {
        await updateCategoryById(category);
    }
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
            .then(data => {
                setCategories(data)
            });
    }, []);


    const value = {
        categories,
        deleteCategory,
        updateCategory
    };


    return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};

export { CategoryContext, CategoryContextProvider };
