import React, {Component} from 'react';
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

export default class SideMenuApp extends Component {


    render(){
        <ScrollView style={styles.menu}>
        <View>
            <Text style={styles.item}>Point 1  </Text>
            <Text style={styles.item}>Point 2  </Text>
        </View>
        </ScrollView>

    }
}

const styles= StyleSheet.create({
    menu: {
        flex: 1,
        backgroundColor: 'gray',
        padding: 20,
    },
    item: {
        fontSize: 14,
        fontWeight: '300',
        paddingTop: 5,
    },


})