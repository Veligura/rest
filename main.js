import Expo from 'expo';
import React from 'react';
import {Platform, StatusBar, StyleSheet, View, Text} from 'react-native';
import {NavigationProvider, StackNavigation} from '@expo/ex-navigation';
import {Provider} from 'react-redux';
import  routes from './src/routes';
import configureStore from './src/stores/createStore';


let  store = configureStore();

class App extends React.Component {

    render() {

        return (

            <Provider store={store} >
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar animated={true} barStyle={'light-content'} />}
                {Platform.OS === 'android' &&
                <View style={styles.statusBarUnderlay}/>}
                <NavigationProvider router={routes}>
                    <StackNavigation initialRoute={routes.getRoute('home')}/>
                </NavigationProvider>
            </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBarUnderlay: {
        height: 20,
        backgroundColor: 'rgba(0,0,0, 1)',
    },
});

Expo.registerRootComponent(App);
