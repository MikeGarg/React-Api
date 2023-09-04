import React from 'react'
import { getAllPersonas } from '../services/personaService';
import Persona from './Persona';

export default function ListaPersonas() {

    // const [personas, setpersonas] = useState([]);

    // useEffect(() => {
    //     getAllPersonas().then(data => setpersonas(data))
    // }, [])


    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Documento</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody>

                {/* {personas.length > 0 && personas.map(elemento => <Persona persona={elemento} />)} */}

                <tr>
                    <td>Id.Ejemplo</td>
                    <td>Documento.Ejemplo</td>
                    <td>Nombre.Ejemplo</td>
                    <td>Edad.Ejemplo</td>
                </tr>
            </tbody>
        </table>
    )
}
