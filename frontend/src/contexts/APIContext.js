import {createContext, useContext, useEffect, useState} from 'react';

import axios from "../config/axios";

const APIContext = createContext();
const useAPIContext = () => useContext(APIContext);

const APIContextProvider = ({children})=> {
    const[products, setProducts] = useState();
    const[client, setClient] = useState();

    // products
    const getProducts = async () => {
        try {
            const {data} = await axios.get('/produits');
            console.log(data.success[0]);
            setProducts(data.success[0]);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=> {
        getProducts();
    }, [])

    const value = {products, setProducts};

    // connexion
    const connect = async() => {
        try {
            const {data} = await axios.post('/clients/connexion', {});
            console.log(data.success[0]);
            if(data.success[0] != null) {
                setClient(data.success[0])
            } else {
                // => connexion impossible textContainer
            }
        } catch(error) {
            console.log(error.message);
        }
    }

    const connexion = {client, setClient};


    return <APIContext.Provider value={value}>{children}</APIContext.Provider>
}

export {APIContextProvider, useAPIContext}