import React from 'react';
import {View, Text, Modal, Alert, StyleSheet, TouchableOpacity,
    Image,BackHandler, TouchableHighlight, ScrollView} from 'react-native';
import MessageScreenHeader from './MessageScreenHeader';
import MessageScreenFooter from './MessageScreenFooter';
import {arrayNotNull} from '../../../utilities/utilities';

class MessageScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            imageData: []
        }
    }
    setImageData = (imageData) => {
        let imageDataClone = [...this.state.imageData]
        imageDataClone.push(
            <Image
                style={style.uploadedImage}
                source={{uri: 'data:image/jpeg;base64,' + imageData.fileData}} />
        )
        this.setState({
            imageData: imageDataClone
        });
    }
    sendMessage = (messageText) => {
        console.log("messageText==>", messageText);
        let imageDataClone = [...this.state.imageData]
        let singleMessage = <View style={style.singleMsgContainer}>
            <Text style={style.msgText}>{messageText}</Text>
        </View>

        imageDataClone.push(singleMessage)
        this.setState({
            imageData: imageDataClone
        });
    }

    renderUploadedImage = () => {
        let {imageData} = this.state;
        if (imageData !== null){

            let images = [];

            arrayNotNull(imageData) && imageData.map((obj, index) => {
                images.push(
                    <View key={index}>
                        {obj}
                    </View>
                )
            });
            return images
        }
        return null;
    };
    render(){
        const {messageData, show} = this.props;
        // console.log("messageData==>", messageData);
        // console.log("this.props.navigation==>", this.props.navigation);
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={show}
                // onRequestClose={() => {
                //     Alert.alert("MODAL HAS BEEN CLOSED")
                // }}
            >
                <View style={{flex:1}}>
                    <View style={style.messageContainer}>
                        <View style={style.header}>
                            <MessageScreenHeader {...this.props}/>
                        </View>
                        <View style={style.messageContent}>

                            <ScrollView style={style.imagesContainer}>
                                {this.renderUploadedImage()}
                            </ScrollView>
                        </View>
                    </View>
                    <View style={style.footer}>
                        <MessageScreenFooter
                            {...this.props}
                            setImageData={this.setImageData}
                            sendMessage={this.sendMessage}
                        />
                    </View>
                </View>
            </Modal>
        );
    }
};

const style = StyleSheet.create({
    messageContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1d19f6',
        width: '100%',
        height: '100%'
    },
    header: {

    },
    messageContent: {
        marginTop: 0,
        marginBottom: 65,
    },
    footer: {
        height: 60,
        alignSelf: "flex-end",
        // alignItems: 'baseline',
        backgroundColor: '#121212'
    },

    imagesContainer: {
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    uploadedImage: {
        width: 200,
        height: 200,
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 10,
        borderWidth: 4,
        // borderColor: '#DCF8C6',
        borderColor: '#FFF',
        borderRadius: 5
    },
    singleMsgContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        padding: 2,
        marginRight: 60,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
    },
    msgText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#121212'
    }
})

export default MessageScreen;
