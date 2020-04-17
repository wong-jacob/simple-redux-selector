import {UPDATE_ITEMS, UPDATE_SELECTIONS} from './actionTypes';

// This is an action creator. Creates a dispatcher action that will be process in the future
// by the dispatcher, then will invoke the reducer to update the state.
export const fetchState = dispatch => {
    return fetch('https://my-json-server.typicode.com/wong-jacob/json/fruitMarket')
        .then(res => res.json())
        .then(state => {
                dispatch({
                    type: UPDATE_ITEMS,
                    payload: state
                });
                dispatch({
                    type: UPDATE_SELECTIONS,
                    payload: state
                });
            }
        )
}