import React from 'react';
import {View, StyleSheet} from 'react-native';

const Separator = () => {

    return (
        <View  style={style.separator}>
            <View style={style.subSeparator}/>
        </View>
    );
};

const style = StyleSheet.create({
    separator: {
         // width: "80%",
        // flex: 1,
        // flexDirection: 'row',
        // alignContent: 'flex-end',
        alignItems: 'flex-end',

    },
    subSeparator: {
        width: '82%',
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,

    }
});

export default Separator;
