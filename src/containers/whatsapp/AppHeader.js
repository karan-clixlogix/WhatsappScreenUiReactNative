import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FeatherIcon from 'react-native-vector-icons/Feather'

const AppHeader = () => {
    return (
        <View>
            <View>
                <Text>CHATS</Text>
            </View>
            <View>
                <Text>CHATS</Text>
            </View>
            <View>
                <Text>CHATS</Text>
            </View>
        </View>
    );
};

const HeaderTitle = () => {
    return (<Text style={style.headerTitle}>WhatsApp</Text>)
};

const RightHeader = () => {
    return (
        <View style={style.rightHeader}>
            <FeatherIcon
                name='search'
                style={style.headerIcon}
            />
            <EntypoIcon
                name='dots-three-vertical'
                style={[style.headerIcon, {marginRight: 10}]}
            />
        </View>
    )
};

const style = StyleSheet.create({
    rightHeader: {
        flex: 1,
        flexDirection: 'row',
        // marginRight: 10,
    },
    headerIcon: {
        fontSize: 20,
        color: '#fff',
        marginRight: 25,
    },
    headerTitle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 20
    }
})
export { AppHeader, RightHeader, HeaderTitle}
export default RightHeader;
