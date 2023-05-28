import React, { createContext, useEffect, useState } from 'react';
import { deleteBannerById, getBanners, updateBannerById } from '../api/requests';

const BannerContext = createContext();


const BannerContextProvider = ({ children }) => {
    const deleteBanner = async (id) => {
        await deleteBannerById(id);
    }
    const updateBanner = async (banner) => {
        await updateBannerById(banner);
    }
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        getBanners()
            .then(data => {
                setBanners(data)
            });
    }, []);


    const value = {
        banners,
        deleteBanner,
        updateBanner
    };


    return <BannerContext.Provider value={value}>{children}</BannerContext.Provider>;
};

export { BannerContext, BannerContextProvider };
