import React, {useContext} from 'react';
import {RecetasContext} from '../context/RecetasContext';


import Spinner from './Spinner';

const Header = () => {

    const {cargando} = useContext(RecetasContext);

    return (  
        <header className="bg-alert">
            <h1>Busca recetas de bebida</h1>
            {(cargando) ? <Spinner/> : null}
        </header>
    );
}
 
export default Header;