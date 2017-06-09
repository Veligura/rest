import {createRouter} from '@expo/ex-navigation';
import Home from './screens/Home';
export default  createRouter(() => ({
    home : () => Home
}))