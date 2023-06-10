
import React, { useState } from 'react';
import { PropTypes } from "prop-types";

function AgregarProducto({ setCategorias }) {

    const [input, setInput] = useState('Ingrese un nuevo producto')

    const handleChange = (e) => {
        setInput(e.target.value);
        //console.log(input);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.length >= 2) {
            setCategorias(cat => [...cat, input]);
            setInput('');
            console.log(input);
        }
    }

    return (
        <div>
            <hr></hr>
            <h1>Agregar productos</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={input}
                    onChange={handleChange}
                />
            </form>

            <hr></hr>
            <div className='row justify-content-center'>
            <button onClick={handleSubmit}
                type="button"
                className="btn btn-success w-50">
                Agregar producto
            </button>
            </div>
        </div>
    )
}
AgregarProducto.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
export default AgregarProducto