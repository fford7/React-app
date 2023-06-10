import React from 'react';
import { useState } from 'react';
import AgregarProducto from './AgregarProducto';
import Coleccion from './Coleccion';

const Productos = () => {

    const [categorias, setCategorias] = useState(['Gaseosas', 'Galletitas', 'Arroz', 'Azucar']);
    // eslint-disable-next-line
    /* const handleAgregar = () => {
        setCategorias([...categorias, 'Cervezas'])
        //setCategorias(cat => [...cat,'Cervezas']) otra forma ademas se puede usar .concat
    } */

    return(
        <>
    <h1>Productos</h1>
    <AgregarProducto 
        setCategorias={setCategorias}
    />
    <ol>
        {
            categorias.map(categoria => {
                return <li key={categoria} >{categoria}</li>
            })
        }
    </ol>    
    {/* <button onClick={handleAgregar} 
    type="button" 
    className="btn btn-secondary">
    Agregar producto
    </button> */}

    <Coleccion categorias={categorias}/>
    
    </>
)


}






export default Productos;