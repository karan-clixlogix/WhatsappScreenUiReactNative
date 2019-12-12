import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';
import CustomInput from '../components/CustomInput';

const Signup = (props) => {

    let {navigate} = props.navigation;

    const [state, setState] = useState({
        fName: '',
        lName: '',
        userName: '',
        email: '',
        password: '',
    });

    const handleSubmit = () => {
        let signupData = {...state}

        if (state.fName === ''){
            alert("Please Add First Name")
        } else if (state.lName === ''){
            alert("Please Add Last Name")
        } else if (state.userName === ''){
            alert("Please Add User Name")
        } else if (state.email === ''){
            alert("Please Add Email")
        } else if (state.password === ''){
            alert("Please Add Password")
        } else {
            navigate('Login', {name: 'karan'})
        }
    };

    return (
        <SafeAreaView style={style.container}>

            <Text style={style.title}>Signup</Text>
            <View>
                <CustomInput
                    placeholder={'First Name'}
                    onChangeText={(name) => setState({...state, fName: name})}
                />
                <CustomInput
                    placeholder={'Last Name'}
                    onChangeText={(name) => setState({...state, lName: name})}
                />
                <CustomInput
                    placeholder={'User Name'}
                    onChangeText={(name) => setState({...state, userName: name})}
                />
                <CustomInput
                    placeholder={'Email'}
                    onChangeText={(name) => setState({...state, email: name})}
                />
                <CustomInput
                    placeholder={'Password'}
                    secureTextEntry={true}
                    onChangeText={(name) => setState({...state, password: name})}
                />

                <Button
                    title='Sign Up'
                    onPress={handleSubmit}/>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: Contains.statusBarHeignt,
        marginVertical: 16,
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
});

export default Signup;
