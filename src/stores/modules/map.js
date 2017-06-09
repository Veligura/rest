import  {combineEpics} from 'redux-observable';
import {Observable} from 'rxjs';
import {getLocalPlaces} from '../../api/google-api';
import { Constants, Location, Permissions } from 'expo';

Location.getCurrentPositionAsync({}).then(res=>console.log(res, 'location'))
const GET_LOCATION = 'map/GET_LOCATION';
const LOCATION_FULLFILLED = 'map/LOCATION_FULLFILLED';

export const getLocation = () => ({type: GET_LOCATION });
export const getLocationFullfilled = payload => ({type: LOCATION_FULLFILLED, payload});


const initialState = {
    location: '',
    places: []

};


//Epics
const getLocation$ = action$ => action$.ofType(GET_LOCATION).flatMap(() => Observable.fromPromise(Permissions.getAsync(Permissions.LOCATION)))
    .flatMap(()=>Observable.fromPromise(Location.getCurrentPositionAsync({})))

    .do((result) => console.log(result, 'location')).map(result => getLocationFullfilled(result));

export const  mapEpic = combineEpics(
    getLocation$

);

export default (state = initialState, action) => {
    console.log(state,  action);
    switch (action.type) {
        case LOCATION_FULLFILLED:
            return {...state, location: action.type};
        default:
            return state
    }
}

