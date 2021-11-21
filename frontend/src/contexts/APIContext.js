import {createContext, useContext, useEffect, useState} from 'react';

import axios from "../config/axios";

const APIContext = createContext();
const useAPIContext = () => useContext(APIContext);

const APIContextProvider = ({children})=> {
    const[products, setProducts] = useState([]);
    const[product, setProduct] = useState();
    const[idProduit, setidProduit] = useState("1");

    const[codes, setCodes] = useState([]);

    const[client, setClient] = useState();

    // products
    const getProducts = async () => {
        try {
            const {data} = await axios.get('/produits');
            setProducts(data.success[0]);
            console.log(data.success[0]);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=> {
        getProducts();
    }, [])

    const constructUrl = (value) => '/produits/${value}';

    // fiche product
    const getProduct = async(idProduit) => {
        try {
            const {data} = await axios.get('/produits/2');
            setProduct(data.success[0]);
            console.log(data.success[0]);
        } catch (error) {
                console.log(error.message);
            }
        }

    useEffect(()=> {
        getProduct()
    },[idProduit]);

    // listCodePromos
    const getCodePromos = async () => {
        try{
            const {data} = await axios.get('/promoCodes');
            setCodes(data.success[0]);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getCodePromos()
    }, []);

   // client
    const getClient = async () => {
        try{
            const {data} = await axios.get('/clients/1');
            setClient(data.success[0]);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getClient()
    }, [])

    return <APIContext.Provider value={{products, product, codes, client, idProduit, setidProduit }}>{children}</APIContext.Provider>
}

export {APIContextProvider, useAPIContext}