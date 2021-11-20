import {createContext, useContext, useEffect, useState} from 'react';

import axios from "../config/axios";

const APIContext = createContext();
const useAPIContext = () => useContext(APIContext);

const APIContextProvider = ({children})=> {
    const[products, setProducts] = useState();
    const[login, setLogin] = useState();

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
            const {data} = await axios.post('', {});
            // if else => setLogin
        } catch(error) {
            console.log(error.message);
        }
    }

    const connexion = {login, setLogin};
    

    return <APIContext.Provider value={value}>{children}</APIContext.Provider>
}

export {APIContextProvider, useAPIContext}