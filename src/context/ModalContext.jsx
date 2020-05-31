import React, {createContext, useState, useEffect} from 'react';

import axios from 'axios';

//CREAR CONTEXT
export const ModalContext = createContext();

const ModalProvider = (props) => {

    //STATE DEL PROVIDER
    const [idreceta, setIdreceta] = useState(null);
    const [informacion, setReceta] = useState({});

    //AL TENER UNA ID, LLAMAR A LA API
    useEffect(() => {
        const obtenerReceta = async () => {
            if(!idreceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const res = await axios.get(url);
            setReceta(res.data.drinks[0]);
        }
        obtenerReceta();
    }, [idreceta])

    return (  
        <ModalContext.Provider
            value={{
                informacion,
                setIdreceta,
                setReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;

