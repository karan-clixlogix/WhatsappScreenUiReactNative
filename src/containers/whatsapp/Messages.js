import React from 'react';
import {View, Text, StyleSheet, Image, Button, ScrollView, BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import Separator from '../../components/Separator';


import messageData from './messageData'
import RenderSingleMessage from '../../components/RenderSingleMessage';
import RightHeader from './AppHeader';

class Messages extends React.Component {

    render() {
        // console.log('this.props 12==>', this.props);
        // console.log('this.props==>', this.props.navigation);
        // console.log('this.props==>', this.props.navigation.state);
        return (
            <ScrollView style={style.messageContainer}>
                {
                    messageData.map((data, index) => {
                        return <View key={index}>
                            <RenderSingleMessage data={data} {...this.props}/>
                            <Separator/>
                        </View>
                    })
                }
            </ScrollView>
        );
    }
};

const style = StyleSheet.create({
    messageContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    headerStyle: {
        backgroundColor: '#195e53'
    },
    headerTitleStyle: {
        fontWeight: 'bold'
    }

});


export default Messages;
