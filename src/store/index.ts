import {configureStore} from "@reduxjs/toolkit";
import { reducerTareas } from "../slicers/tareasSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer:{
        misTareas:reducerTareas
    }
});



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



