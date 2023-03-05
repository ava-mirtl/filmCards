import {  FILMS_LOAD, 
        SORT,
        ERROR_DISPLAY_ON,
        ERROR_DISPLAY_OFF } from "./types";


const initialState = {
    films: [],
    favorites: [],
    error: null,
    sort: false
}

export const Reducer = (state = initialState, action) => {

    switch (action.type) {
        
        case FILMS_LOAD:
            const filmsNew =  action.data.items.map((res, i)=>{
                return{...res,
                    id: res.kinopoiskId,
                    like: false
                };})
            return{
                ...state,
                films: filmsNew,
            }  

        case SORT:
            return{
                ...state,
                sort: action.value,
            }  

        case ERROR_DISPLAY_ON:
            return {
            ...state,
            error: action.text
            }

        case ERROR_DISPLAY_OFF:
            return {
            ...state,
            error: null
            }
            
    default: return state
    }
}