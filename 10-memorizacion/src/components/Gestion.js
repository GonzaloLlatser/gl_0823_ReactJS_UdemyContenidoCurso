import React, { useEffect, useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [nombre, setNombre] = useState('');

   

    const asignarGestor = e => {
        setNombre(e.target.value);
    }

    console.log("vista ctualizada");








    return (
        <div>
            <h1>Nombre del gestor: {nombre}</h1>

            <input type='text' onChange={asignarGestor} placeholder='Introduce tu nombre de gestor'></input>

            <h2>Listado de empleados:</h2>

            <p>Los usuarios son gestionados por {nombre}</p>

            <Empleados />
        </div>
    )
}
