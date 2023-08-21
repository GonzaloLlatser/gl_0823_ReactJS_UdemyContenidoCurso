import React, { useEffect, useState } from 'react'

export const Empleados =
    ({ pagina = 1 }) => {

        const [empleados, setEmepleados] = useState([]);

        useEffect(() => {
            conseguirEmpleados(pagina);
        }, []);

        const conseguirEmpleados = async (p) => {
            const url = "https://reqres.in/api/users?page=1" + p;
            const peticion = await fetch(url);
            const { data: empleados } = await peticion.json();

            setEmepleados(empleados);

            console.log("se eejecuto la pet ajax")
        }

        console.log("Se ha vuelto a renderizar Empleados");





        return (
            <div>
                <p>Mostrando la pagina: {pagina}</p>

                <ul className='empleados'>
                    {empleados.length >= 1 && 
                    empleados.map(empleado => {
                        return <li key='empleado.id'>{empleado.first_name + " " + empleado.last_name}</li>
                    })}
                </ul>
            </div>
        );
    };
