import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';


const MessageScreenFooter = (props) => {
    const openCamera = () => {
        console.log('openCamera');
        launchCamera();
    };

    const attachFile = () => {
        console.log('attachFile');
        addImagePicker()
    };

    const [image, setImage] = useState({
        filePath: null,
        fileData: null,
        fileUri: null
    })

    const addImagePicker = () => {
        // More info on all the options is below in the API Reference... just some common use cases shown here
        const options = {
            title: 'Select Avatar',
            // customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info in the API Reference)
         */
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = {uri: response.uri};

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                // console.log("source::==>", source);
                setImage(source)

                // setImage({
                //     filePath: response,
                //     fileData: response.data,
                //     fileUri: response.uri
                // });
                props.setImageData({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri,
                    type: 'image'
                });
                setImage({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri
                });

            }
        });
    }

    const launchCamera = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchCamera(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };
                // console.log('response', JSON.stringify(response));
                // this.setState({
                //     filePath: response,
                //     fileData: response.data,
                //     fileUri: response.uri
                // });
                props.setImageData({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri,
                    type: 'image'

                });
                setImage({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri
                });
            }
        });
    };

    const openImageLibrary = () => {
// Open Image Library:
        ImagePicker.launchImageLibrary(options, (response) => {
            // Same code as in above section!
        });
    };

    const [messageText, setMessageText] = useState('')

    const handleChangeText = (value) => {
        // console.log("value==>", value);
        setMessageText(value);
    };

    const recordAudio = () => {
        console.log('recordAudio');
    };

    const sendMessage = () => {
        // console.log("this.textmsg==>", this.textmsg);
        // this.textmsg.onBlur();
        // console.log('sendMessage');
        props.sendMessage(messageText)
        setMessageText('')
    };

    return (
        <>
            <View style={style.footerContainer}>
                <View style={style.chatInputContainer}>

                    {/*<Text>MessageScreenFooter</Text>*/}
                    <View style={style.emogiSelector}>
                        <FontAwesomeIcon
                            name='smile-o'
                            size={20}
                            color="#121212"
                            style={style.attachmentIcons}
                        />
                    </View>
                    <View style={style.textInputCont} style={messageText === '' ? {width: '65%'}: {width: '75%'}}>
                        <TextInput
                            // ref={textmsg => this.textmsg = textmsg}
                            // keyboardType='numeric'
                            placeholder='Type a message'
                            onChangeText={handleChangeText}
                            value={messageText}
                            // multiline
                            // numberOfLines={6}
                        />
                    </View>
                    <View style={[style.mediaIcons, {width: `${ messageText === ''  ? "20%": "10%"}`}]}>
                        <TouchableOpacity onPress={attachFile}>
                            <EntypoIcon
                                name='attachment'
                                size={20}
                                color="#121212"
                                style={style.attachmentIcons}
                            />
                        </TouchableOpacity>
                        {
                            messageText === '' ?
                                <TouchableOpacity onPress={openCamera}>
                                    <FontAwesomeIcon
                                        name='camera'
                                        size={20}
                                        color="#121212"
                                        style={style.attachmentIcons}
                                    />
                                </TouchableOpacity> :
                                <></>
                        }
                    </View>
                </View>
                {
                    messageText === '' ?
                        <View style={style.micContainer}>
                            {/*<FontAwesomeIcon.Button*/}
                            {/*    name="microphone"*/}
                            {/*    backgroundColor="#195e53"*/}
                            {/*    onPress={recordAudio}*/}
                            {/*    size={20}*/}
                            {/*    borderRadius={20}*/}
                            {/*    iconStyle={{marginRight: 0}}*/}
                            {/*>*/}
                            {/*</FontAwesomeIcon.Button>*/}

                            <TouchableOpacity onPress={recordAudio}>
                                <View style={style.micBg}>
                                    <FontAwesomeIcon
                                        name='microphone'
                                        size={20}
                                        color="#fff"
                                        style={style.micButton}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View> :
                        <View style={style.micContainer}>
                            {/*<MaterialIcon.Button*/}
                            {/*    name="play-arrow"*/}
                            {/*    backgroundColor="#195e53"*/}
                            {/*    onPress={sendMessage}*/}
                            {/*    size={20}*/}
                            {/*    borderRadius={20}*/}
                            {/*    iconStyle={{marginRight: 0}}*/}
                            {/*>*/}
                            {/*</MaterialIcon.Button>*/}
                            <TouchableOpacity onPress={sendMessage}>
                                <View style={style.micBg}>
                                    <MaterialIcon
                                        name='play-arrow'
                                        size={20}
                                        color="#fff"
                                        style={style.micButton}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                }
            </View>
        </>
    );
};

const style = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: 10
        // height: 80,
    },
    chatInputContainer: {
        flexDirection: 'row',
        width: '90%',
        // height: 40,
        backgroundColor: '#fbfbfb',
        borderRadius: 20,
        // margin: 5
    },

    emogiSelector: {
        width: '10%',
        // margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    textInputCont :{
        width: '65%',
    },
    mediaIcons: {
        flexDirection: 'row',
        // alignSelf: 'flex-end',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    attachmentIcons: {
        marginRight: 10,

    },



    micContainer :{
        width: '11%',
        // height: 50,
        // backgroundColor: '#195e53',
        // borderRadius: 20,
        // marginLeft: 5,
        padding: 5

    },
    micBg: {
        width: 35,
        height: 35,
        backgroundColor: '#195e53',
        borderRadius: 50,
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        // marginLeft: 5,
        // padding: 12
    },
    micButton: {
        alignItems: 'center',
        justifyContent: 'center',

    }
})

export default MessageScreenFooter;
