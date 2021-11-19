import {createContext, useContext, useEffect, useState} from 'react';

import axios from "../config/axios";

const APIContext = createContext();
const useAPIContext = () => useContext(APIContext);

const APIContextProvider = ({children})=> {
    const[products, setProducts] = useState();

    const getProducts = async () => {
        try {
            const {data} = await axios('/produits').data;
            console.log( "TEST" +data)
            setProducts(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=> {
        getProducts();
    }, [])

    const value = {products, setProducts}

    return <APIContext.Provider value={value}>{children}</APIContext.Provider>
}

export {APIContextProvider, useAPIContext}