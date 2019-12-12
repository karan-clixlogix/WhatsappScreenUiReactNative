import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SplashScreen = (props) => {

    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.navigate('Signup')
        }, 1500)
    });
    return (
        <View style={style.container}>
            <View >
                <Text>SplashScreen</Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainText: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    subText: {

    }
})

export default SplashScreen;
