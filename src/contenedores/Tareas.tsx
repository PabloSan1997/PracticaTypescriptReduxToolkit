import { Header } from "../componentes/Header";
import { Menu } from "../componentes/Menu";
import { Contenedor } from "../componentes/Contenedor";
import { useAppSelector } from "../store";


export function Tareas() {
    const misTarea = useAppSelector(state => state.misTareas);
    console.log(misTarea);
    const tareas = misTarea.tareas.filter(element => { return !element.estado });
    let numero = 1;
    return (
        <>
            <Header />
            <Menu />
            <div className="contenedor">
                {tareas.map(elemento => (
                    <Contenedor
                        key={elemento.id}
                        num={numero++}
                        nombre={elemento.nombre}
                        estado={elemento.estado}
                        id={elemento.id}
                        hora={elemento.hora}
                    />
                ))}
            </div>
        </>
    )
}