
import logo from "../../public/logo.svg";
import "../estilos/header.css";
import React from 'react';
import { agregar } from "../slicers/tareasSlice";
import { useAppDispatch } from "../store";

export function Header() {
  const dispatch = useAppDispatch();
  const [entrada, setEntrada] = React.useState("");
  const agregarTarea = () => {
    if(!entrada){
      alert("Escriba alguna tarea");
    }else{
      const hora:Date = new Date();
      const texto:string = hora ? `${hora.getDay()}/${hora.getMonth()}/${hora.getFullYear()} ${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}` : "";
      dispatch(agregar({nombre:entrada, hora:texto}));
      setEntrada("");
    }
  }
  return (
    <header >
      <img src={logo} alt="logo" />
      <h1 >Tareas</h1>
      <input
        type="text"
        className="entrada"
        placeholder="Nueva Tarea"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)} />
      <button className="boton" onClick={agregarTarea}>Agregar</button>
    </header>
  )
}