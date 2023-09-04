import React from 'react'

export default function Persona({ }) {
    return (
        <tr>
            <td>{persona.id}</td>
            <td>{persona.documento}</td>
            <td>{persona.nombre}</td>
            <td>{persona.edad}</td>
        </tr>
    )
}
