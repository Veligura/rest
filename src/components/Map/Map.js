import React, {Component} from 'react';
import MapView from 'react-native-maps';
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

export default class MapComponet extends Component {

    render() {
        return (<MapView style={styles.map} region={this.props.region}>
        </MapView>)
    }
}
const styles = StyleSheet.create({
    map:{
        flex: 1
    }
});


