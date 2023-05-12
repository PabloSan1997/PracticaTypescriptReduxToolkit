import {Tareas} from "../slicers/tareasSlice";
export function leerDatos():Tareas[]{
    if(!localStorage.tareas){
        guardar([]);
    }
    return JSON.parse(localStorage.tareas);
}

export function guardar(datos:Tareas[]):void{
    localStorage.tareas=JSON.stringify(datos);
}