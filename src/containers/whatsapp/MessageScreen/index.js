import React from 'react';
import {View, Text, Modal, Alert, StyleSheet, TouchableOpacity, Image, TouchableHighlight} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const renderMessageHeader = (props) => {
    const {messageData} = props;
    const handleGoBack = () => {
        console.log("props nav==>", props.navigation.navigate);
        props.navigation.goBack()
        props.closeMessage()
    }
    console.log("messageData11==>", messageData);
    return (
        <View style={style.headerContainer}>
            <View style={style.arrowIcon}>
                <TouchableOpacity onPress={handleGoBack}>
                    <AntDesignIcon
                        name="arrowleft"
                        size={30}
                        color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={style.imageContainer}>
                <Image
                    source={{
                        uri: messageData.avatar,
                        cache: 'only-if-cached',
                    }}
                    style={style.messageImage}/>
            </View>
            <View style={style.chatName}>
                <Text style={style.chatNameText}>
                    {messageData.first_name}{" "}{messageData.last_name}
                </Text>
            </View>
            <View style={style.leftOptions}>
                <View style={style.leftIcons}>
                    <FontAwesomeIcon
                        style={{marginRight: 20}}
                        size={20}
                        name='video-camera'
                        color="#fff" />
                    <IoniconsIcon
                        style={{marginRight: 20}}
                        size={20}
                        name='md-call'
                        color="#fff" />
                    <EntypoIcon
                        size={20}
                        name='dots-three-vertical'
                        color="#fff"  />
                </View>
            </View>
        </View>
    )
}
class MessageScreen extends React.Component{

    render(){
        const {messageData, show} = this.props;
        console.log("messageData==>", messageData);
        console.log("this.props.navigation==>", this.props.navigation);
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={show}
                // onRequestClose={() => {
                //     Alert.alert("MODAL HAS BEEN CLOSED")
                // }}
            >
                <View>
                    {renderMessageHeader(this.props)}
                    <Text>MessageScreen</Text>
                </View>
            </Modal>
        );
    }
};

const style = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 60,
        // backgroundColor: '#05110f',
        backgroundColor: '#195e53',
        flexDirection: "row",
        // flexDirection: 'column',
        justifyContent: 'flex-start'
    },

    arrowIcon : {
        padding: 10,
        justifyContent: 'center'
    },

    imageContainer: {
        width: 50,
        height: 50,
        marginTop: 10
    },
    messageImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },



    titleContainer: {
        flexDirection: 'row',
        // width:'100%',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    chatName: {
        justifyContent: 'center'
    },
    chatNameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        justifyContent: 'center'

    },

    leftOptions: {
        // width: '10%',
        // justifyContent: 'center',
        // alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        right: 0
    },
    leftIcons: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
})

export default MessageScreen;
