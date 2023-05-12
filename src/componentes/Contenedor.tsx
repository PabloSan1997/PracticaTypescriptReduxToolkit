
import "../estilos/contenedor.css";
import { borrar, cambiarEstado } from "../slicers/tareasSlice";
import { useAppDispatch } from "../store";
interface Propiedades {
  num: number,
  nombre: string,
  estado: boolean,
  id: string,
  hora: string
}
export function Contenedor({ num, nombre, estado, id, hora }:Propiedades) {
  const dispatch = useAppDispatch();
  const borrarUno = () => {
    dispatch(borrar({ num: id }));
  }
  const cambiarSolucion = ():void => {
    dispatch(cambiarEstado({ num: id }));
  }
  return (
    <div className={estado ? "caja hecho" : "caja"}>
      <button className="quitar" onClick={borrarUno}>X</button>
      <p className="num">{num}</p>
      <p className="nombre">{nombre}</p>
      <p className="hora">{hora}</p>
      <button className="bien" onClick={cambiarSolucion}>✓</button>
    </div>
  );
}