import "../estilos/menu.css";
import { NavLink } from 'react-router-dom';


export function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <NavLink to="/tareas" className={accion=>accion.isActive?"activado":""}>Tareas</NavLink>
                </li>
                <li>
                    <NavLink  to="/hechas" className={accion=>accion.isActive?"activado":""}>Hechas</NavLink>
                </li>
            </ul>
        </nav>
    );
}