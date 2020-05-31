import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext';
import {AlcoholContext} from '../context/AlcoholContext';

import Error from './Error';

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre : '',
        categoria : '',
        alcohol : ''
    });
    const [error, setError] = useState(false)

    const {categorias} = useContext(CategoriasContext);
    const {buscarReceta, setConsultar} = useContext(RecetasContext);
    const {alcoholes} = useContext(AlcoholContext);

    //FUNCION PARA LEER LOS CONTENIDOS
    const obtenerDatos = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const buscarInfo = () => {
        if(busqueda.nombre.trim() === '' || busqueda.categoria.trim() === '' || busqueda.alcohol.trim() === ''){
            setError(true);
            return;
        }

        //"TODO" BIEN, PASAR AL COMPONENTE PRINCIPAL
        setError(false);
        buscarReceta(busqueda)
    }

    return (  
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault()
                buscarInfo()
                setConsultar(true)
            }}
        >
        {error ? <Error busqueda={busqueda} mensaje="Los Campos son abligatorios"/> : null}
            <fieldset className="text-center">
                <legend>Busca Bebida por Categoria o Ingredientes</legend>
            </fieldset>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div className="col">
                        <input 
                            type="text" 
                            name="nombre" 
                            className="form-control"
                            placeholder="Busca por Ingrediente"
                            onChange={obtenerDatos}
                        />
                    </div>
                    <div className="col">
                        <select 
                            name="categoria" 
                            className="form-control"
                            onChange={obtenerDatos}
                        >
                            <option value="">-- Selecciona Categoria --</option>
                            {categorias.map(categoria=> (
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >{categoria.strCategory}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col">
                        <select 
                            name="alcohol" 
                            className="form-control"
                            onChange={obtenerDatos}
                        >
                            <option value="">-- Selecciona si tiene Alcohol --</option>
                            {alcoholes.map(alcohol=> (
                                <option
                                    key={alcohol.strAlcoholic}
                                    value={alcohol.strAlcoholic}
                                >{alcohol.strAlcoholic}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col">
                        <input 
                            type="submit" 
                            name="nombre" 
                            className="btn btn-primary col-md-auto"
                            placeholder="Buscar"
                        />
                    </div>
                </div>
        </form>
    );
}
 
export default Formulario;