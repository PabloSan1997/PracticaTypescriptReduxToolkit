import { HashRouter, Navigate, Route, Routes } from "react-router-dom"
import { Tareas } from "./contenedores/Tareas"
import { Hechas } from "./contenedores/Hechas"

function App(): JSX.Element {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/tareas" />} />
        <Route path="/tareas" element={<Tareas />} />
        <Route path="/hechas" element={<Hechas />} />
        <Route path="*" element={<p>not found 404</p>} />
      </Routes>
    </HashRouter>
  )
}

export default App
