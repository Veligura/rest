import  {combineEpics} from 'redux-observable';
import {Observable} from 'rxjs';
import {getLocalPlaces} from '../../api/google-api';
import {Constants, Location, Permissions} from 'expo';

const GET_LOCATION = 'map/GET_LOCATION';
const LOCATION_FULLFILLED = 'map/LOCATION_FULLFILLED';
const GET_CURRENT_VIEW_PORT_PLACES = 'map/GET_CURRENT_VIEW_PORT_PLACES';
const GET_PLACES_FULLFILLED = 'map/GET_PLACES_FULLFILLED';
const SET_CURRENT_REGION = 'map/SET_CURRENT_REGION';

export const getCurrentViewPortPlaces = payload => ({type: GET_CURRENT_VIEW_PORT_PLACES, payload});
export const getLocation = () => ({type: GET_LOCATION});
export const getLocationFullfilled = payload => ({type: LOCATION_FULLFILLED, payload});
export const setCurrentRegion = payload => ({type: SET_CURRENT_REGION, payload});
export const getPlacesFullfilled = payload => ({type: GET_PLACES_FULLFILLED, payload});


const initialState = {
    currentViewPort: {
        latitude: 50.46620065775283,
        latitudeDelta: 0.007931665106035268,
        longitude: 30.51409796041696,
        longitudeDelta: 0.007411582270634653
    },
    location: {},
    places: []

};


const getPlaces$ = action$ => action$.ofType(GET_CURRENT_VIEW_PORT_PLACES)
    .map(({payload}) => payload).sampleTime(1000)
    .flatMap(({longitude, latitude}) => getLocalPlaces(`${latitude},${longitude}`, 1000))
    .do((result) => console.log(result)).map(({response}) => response).map(({results}) => results)
    .map(result => getPlacesFullfilled(result));


//Epics
const getLocation$ = action$ => action$.ofType(GET_LOCATION)
    .flatMap(() => Observable.fromPromise(Permissions.getAsync(Permissions.LOCATION)))
    .flatMap(() => Observable.fromPromise(Location.getCurrentPositionAsync({})))
    .map(({coords}) => coords).map(({longitude, latitude}) => ({longitude, latitude}))
    .map(result => getLocationFullfilled(result));


export const mapEpic = combineEpics(
    getLocation$,
    getPlaces$
);

export default (state = initialState, action) => {
    console.log(action, state)
    switch (action.type) {
        case SET_CURRENT_REGION:
            return {...state, currentViewPort: action.payload};
        case LOCATION_FULLFILLED:
            return {...state, location: action.payload};
        case GET_PLACES_FULLFILLED:
            return {...state, places: state.places.concat(action.payload)};
        default:
            return state
    }

}
