import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {connect} from 'react-redux';
import {
    getCurrentViewPortPlaces,
    setCurrentRegion
} from '../../stores/modules/map';

import {
    Image,
    Linking,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const initRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};
export class MapComponet extends Component {

    constructor(props) {
        super(props);
    }

    currentRegion = (region) => {
        this.props.dispatch(setCurrentRegion(region));
        this.props.dispatch(getCurrentViewPortPlaces(region))
    };

    render() {
        return (<MapView style={styles.map} region={this.props.region} onRegionChange={this.currentRegion}>
        </MapView>)
    }
}

function MapStateToProps({map, dispatch}) {

    return {
        region: map.location.hasOwnProperty('latitude') ? {
            ...map.location,
        }:{
            ...map.currentViewPort
        },
        isState: map.location.hasOwnProperty('latitude')? true : false
        ,

        dispatch
    }
}

export default connect(MapStateToProps)(MapComponet)


const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});




