import React, {Component} from 'react';
import {connect} from 'react-redux';
import MapComponent from '../components/Map/Map';
import {getLocation} from '../stores/modules/map';


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
export class Home extends Component {

    constructor(props) {
        super(props);
        props.dispatch(getLocation());
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusBar}/>
                <MapComponent props={this.props}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    statusBar: {
        height: 30
    },
    listView: {
        height: 90
    },


    map: {
        flex: 8
    },
});

const mapPropsToState = ({map, dispatch}) => ({map, dispatch});


export default connect(mapPropsToState,)(Home);

