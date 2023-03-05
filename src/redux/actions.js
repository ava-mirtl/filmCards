import { FILMS_LOAD, 
  SORT, 
  ERROR_DISPLAY_OFF, 
  ERROR_DISPLAY_ON, 
  } from "./types";

export function errorOn(text) {
    return dispatch => {
      dispatch({
        type: ERROR_DISPLAY_ON,
        text
      });
  
      setTimeout(() => {
        dispatch(errorOff());
      }, 3000)
    }
  }

  export function sort(boolean) {
    return dispatch => {
      dispatch({
        type: SORT,
        value: boolean
      });
    }
  }

  export function errorOff() {
    return {
      type: ERROR_DISPLAY_OFF,
    }
  }
  

export function filmsLoad(){
    return async dispatch => {
        try{ const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=JANUARY', {
          method: 'GET',
          headers: {
              'X-API-KEY': '39853a01-4b3d-4334-a57b-ec44563ef05a',
              'Content-Type': 'application/json',
          }});
        const jsonData = await response.json();
        setTimeout(() => {
            dispatch({
              type: FILMS_LOAD,
              data: jsonData
            });
          }, 500);
    }
    catch(err) {
        dispatch(errorOn('Ошибка API'));
      }
    }
}