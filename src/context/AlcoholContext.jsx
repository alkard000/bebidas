import React, {createContext, useState, useEffect} from 'react';

import axios from 'axios';

//CREAR CONTEXT
export const AlcoholContext = createContext();

//CREAR EL PROVIDER, DONDE SE ENCUENTRAN LAS FUNCIONES Y EL STATE
const AlcoholProvider = (props) => {

    //CREAR EL STATE DEL CONTEXT
    const [alcoholes, setAlcoholes] = useState([]);

    //EJECUTAR EL LLAMADO A LA API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list';
            const alcoholes = await axios.get(url);

            setAlcoholes(alcoholes.data.drinks);
        }
        obtenerCategorias();
    }, [])

    return (
        <AlcoholContext.Provider
            value={{
                alcoholes
            }}
        >
            {props.children}
        </AlcoholContext.Provider>
    )
}

export default AlcoholProvider;


