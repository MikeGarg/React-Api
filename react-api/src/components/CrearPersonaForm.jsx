import React from 'react'
import { savePersona } from '../services/personaService';
import { useNavigate } from 'react-router-dom';

export default function () {

    const [documento, setDocumento] = useState(0);
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState(0);
    const [error, setError] = useState(0);

    const navigate = useNavigate();

    async function crearPersona(evento) {
        evento.preventDefault();

        if (documento === 0 || nombre === "" || edad === 0) {
            setError(true)
            return
        }
        setError(false)
        const newPersona = {
            documento,
            nombre,
            edad
        }
        await savePersona(newPersona);

        navigate("/")
    }

    return (
        <form onSubmit={crearPersona}>
            <input type="number" name="documento" value={documento} onChange={(evento) => setDocumento(evento.target.value)} placeholder='DNI' />
            <input type="text" name="nombre" value={nombre} onChange={(evento) => setNombre(evento.target.value)} placeholder='Nombre' />
            <input type="number" name="edad" value={edad} onChange={(evento) => setEdad(evento.target.value)} placeholder='Edad' />
            <br />
            <button>Crear Persona</button>
            {error && <p style={{ color: red }}> Hubo un error al crear persona</p>}
        </form>
    )
}
