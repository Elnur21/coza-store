import React, { createContext, useEffect, useState } from 'react';
import { deleteSlideById, getSlides, updateSlideById } from '../api/requests';

const SlideContext = createContext();


const SlideContextProvider = ({ children }) => {
    const deleteSlide = async (id) => {
        await deleteSlideById(id);
    }
    const updateSlide = async (slide) => {
        await updateSlideById(slide);
    }
    const [slides, setSlides] = useState([]);
    useEffect(() => {
        getSlides()
            .then(data => {
                setSlides(data)
            });
    }, []);


    const value = {
        slides,
        deleteSlide,
        updateSlide
    };


    return <SlideContext.Provider value={value}>{children}</SlideContext.Provider>;
};

export { SlideContext, SlideContextProvider };
