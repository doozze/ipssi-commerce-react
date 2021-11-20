import {createContext, useContext, useEffect, useState} from 'react';

import axios from "../config/axios";

const APIContext = createContext();
const useAPIContext = () => useContext(APIContext);

const APIContextProvider = ({children})=> {
    const[products, setProducts] = useState();
    const[product, setProduct] = useState();
    const[client, setClient] = useState();

    // products
    const getProducts = async () => {
        try {
            const {data} = await axios.get('/produits');
            setProducts(data.success[0]);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=> {
        getProducts();
    }, [])

    const value = {products, setProducts};

    // 1 produit
    const getProduct = async () => {
        try {
            const {data} = await axios.get('/produits/1');
            setProduct(data.success[0]);
            console.log(data.success[0])
        } catch (error) {
            console.log(error.message);
        }
    }

    // connexion
    const connect = async() => {
        try {
            const {data} = await axios.post('/clients/connexion', {}); // recup login/mdp
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


    return <APIContext.Provider value={{value, connexion}}>{children}</APIContext.Provider>
}

export {APIContextProvider, useAPIContext}