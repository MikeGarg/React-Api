import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import ListaPersonas from "./components/ListaPersonas"
import CrearPersonaForm from "./components/CrearPersonaForm"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ListaPersonas />} />
        <Route path='/crear' element={<CrearPersonaForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
