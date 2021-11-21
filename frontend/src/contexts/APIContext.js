import {createContext, useContext, useEffect, useState} from 'react';

import axios from "../config/axios";

const APIContext = createContext();
const useAPIContext = () => useContext(APIContext);

const APIContextProvider = ({children})=> {
    const[products, setProducts] = useState([]);
    const[product, setProduct] = useState();
    const[client, setClient] = useState();

    // products
    const getProducts = async () => {
        try {
            const {data} = await axios.get('/produits');
            setProducts(data.success[0]);
            console.log(data.success[0])
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=> {
        getProducts();
        //console.log("getproducts")
    }, [])


    const getProduct = async () => {
        try {
                const {data} = await axios.get('/produits/2');
                setProduct(data.success[0]);
                console.log(data.success[0])
            } catch (error) {
                console.log(error.message);
            }
        }

    useEffect(()=> {
        getProduct()
        console.log("getProduct")
    },[]);



/*
    // pageConnexion
    const connect = async() => {
        try {
            const {data} = await axios.post('/clients/connexion', {}); // recup login/mdp
            if(data.success[0] != null) {
                setClient(data.success[0])
            } else {
                // => pageConnexion impossible textContainer
            }
        } catch(error) {
            console.log(error.message);
        }
    }
*/
    const connexion = {client, setClient};


    return <APIContext.Provider value={{products, product, connexion}}>{children}</APIContext.Provider>
}

export {APIContextProvider, useAPIContext}