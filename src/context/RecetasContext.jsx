import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([]);
    const [busqueda, buscarReceta] = useState({
        nombre : '',
        categoria : '',
        alcohol : ''
    });
    const [consultar, setConsultar] = useState(false);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(false);

    const {nombre, categoria, alcohol} = busqueda;

    useEffect(() => {
        if(consultar){
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}&a=${alcohol}`;
                
                await axios.get(url)
                    .then((res) => {
                        setCargando(true);
                        setTimeout(() => {
                            //CAMBIAR ESTADO
                            setRecetas(res.data.drinks);
                            setError(false);
                            setCargando(false);

                        }, 3000);
                    }).catch((err) => {
                        setError(true);
                        console.log(err);
                        return;
                    });
            } 
            obtenerRecetas();         
        }

    }, [busqueda])

    return (  
        <RecetasContext.Provider
            value={{
                recetas,
                cargando,
                error,
                buscarReceta,
                setConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}
 
export default RecetasProvider;