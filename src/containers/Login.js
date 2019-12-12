import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import CustomInput from '../components/CustomInput';

const Login = () => {

    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const handleLogin = () => {
        let loginData = {...state}

        if (state.email === ''){
            alert("Please Add Email")
        } else if (state.password === ''){
            alert("Please Add Password")
        }
    }
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>Login</Text>
            <View>
                <CustomInput
                    placeholder="Email"
                    name="Email"
                    onChangeText={(text) => setState({...state, email: text})}
                />
                <CustomInput
                    placeholder="Password"
                    name="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => setState({...state, password: text})}
                />
                <Button title={'Login'} onPress={handleLogin}/>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    button: {

    }
});

export default Login;
