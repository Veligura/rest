import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import {GOOGLE_API_KEY} from '../consts/const';


export const getLocalPlaces = (location, radius,)=>{
   const  params = {
       key: GOOGLE_API_KEY,
       location,
       radius,
       type: 'restauran'
   };

return ajax(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?${Object.keys(params).map(key=>key+"="+ params[key]).join('&')}`);
};




