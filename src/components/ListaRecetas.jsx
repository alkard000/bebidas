import React, {useContext, Fragment} from 'react';
import {RecetasContext} from '../context/RecetasContext';

import Receta from './Receta';
import Error from './Error';


const ListaRecetas = () => {

    //EXTRAER LAS RECETAS
    const {recetas, error} = useContext(RecetasContext);


    return ( 
        <Fragment> 
            {error ? <Error mensaje="Tragos no encontrados"/> :
                <div className="row mt-5">
                    {recetas.map(receta => (
                        <Receta
                            key={receta.idDrink}
                            receta={receta}
                        />
                    ))}
                </div>
            }
        </Fragment>
    );
}
 
export default ListaRecetas;