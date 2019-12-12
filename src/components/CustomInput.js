import React from 'react';
import {TextInput} from 'react-native'

const CustomInput = (props) => {

    const inputStyle = {
        height: 40,
        borderColor: '#121212',
        borderWidth: 1,
        width: '100%',
        marginBottom: 30
    };
    return (
        <TextInput
            {...props}
            style={inputStyle}

        />
    );
};

export default CustomInput;
