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
        // console.log("imageData==>", "imageData");
        let imageDataClone = [...this.state.imageData]
        imageDataClone.push(imageData)
        this.setState({
            imageData: imageDataClone
        });
    }

    renderUploadedImage = () => {
        let {imageData} = this.state;
        if (imageData !== null){
            // console.log("==image Path==",  imageData.filePath)
            // console.log("==image data==",  imageData.fileData)
            // console.log("==image uri==",  imageData.fileUri)
            let images = []
            if ( arrayNotNull(imageData) ) {
                arrayNotNull(imageData) && imageData.map((obj, index) => {
                    images.push(<Image style={style.uploadedImage} source={{uri: 'data:image/jpeg;base64,' + obj.fileData}} />)
                });

                return <View style={style.imagesContainer}>
                    {images}
                </View>
            }
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

                            <ScrollView>
                                {this.renderUploadedImage()}
                            </ScrollView>
                            {/*<Text>MessageScreen</Text>*/}
                        </View>
                        {/*<View style={style.footer}>*/}
                        {/*    <MessageScreenFooter {...this.props}/>*/}
                        {/*</View>*/}
                    </View>
                    <View style={style.footer}>
                        <MessageScreenFooter {...this.props} setImageData={this.setImageData}/>
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

    },
    footer: {
        height: 60,
        alignSelf: "flex-end",
        // alignItems: 'baseline',
        backgroundColor: '#121212'
    },

    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    uploadedImage: {
        width: 100,
        height: 100,
        marginLeft: 10,
        marginTop: 10,

    }
})

export default MessageScreen;
