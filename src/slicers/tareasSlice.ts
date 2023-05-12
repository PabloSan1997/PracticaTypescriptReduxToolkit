import {createSlice} from "@reduxjs/toolkit";
import { guardar, leerDatos } from "../storage";

export interface Tareas{
    id:string,
    hora:string,
    estado:boolean,
    nombre:string
}
export interface Estado{
    tareas:Tareas[]
}
const initialState:Estado = {
    tareas:leerDatos()
}

const tareasSlice = createSlice({
    name:"tareas",
    initialState,
    reducers:{
        agregar:(state, action)=>{
            let cadena = state.tareas;
            const {nombre, hora} = action.payload;
            const generarId =():string=> Math.random().toString(36).substring(2,5);
            const nuevoObjeto:Tareas = {
                nombre,
                id:generarId(),
                hora,
                estado:false
            }
            cadena = [...cadena, nuevoObjeto];
            const response = {...state, tareas:cadena};
            guardar(response.tareas);
            return response;
        },
        borrar:(state, action)=>{
            const {num} = action.payload;
            const cadena = [...state.tareas];
            const indice = cadena.findIndex(elemento => elemento.id==num);
            if(indice>-1){
                cadena.splice(indice, 1);
            }
            guardar(cadena);
            return {...state, tareas:cadena}
        },
        cambiarEstado:(state, action)=>{
            const {num} = action.payload;
            const cadena = [...state.tareas];
            const indice = cadena.findIndex(elemento=>elemento.id==num);
            if(indice>-1){
                cadena[indice].estado=!cadena[indice].estado;
            }
            guardar(cadena);
        }
    }
});

const {agregar, borrar, cambiarEstado} = tareasSlice.actions;
const reducerTareas = tareasSlice.reducer;

export {reducerTareas, agregar, borrar, cambiarEstado}