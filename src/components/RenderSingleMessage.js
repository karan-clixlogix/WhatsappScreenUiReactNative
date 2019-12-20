import React, {Component, useEffect} from 'react';
import {BackHandler, Image, StyleSheet, Text, TouchableHighlight, View, } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MessageScreen from '../containers/whatsapp/MessageScreen';

class RenderSingleMessage extends Component {
    constructor(props) {
        super(props);
        this.state= {
            showChatModal: false,
        }
    }

    // componentDidMount() {
    //     this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    // }
    //
    // componentWillUnmount() {
    //     this.backHandler.remove()
    // }
    //
    // handleBackPress = () => {
    //     console.log('handleBackPress');
    //     // this.goBack(); // works best when the goBack is async
    //     // return true;
    // }


     closeMessage = () => {
         this.setState({
             showChatModal: !this.state.showChatModal
         });
    };
    render() {
        let {data} = this.props;
        let {showChatModal} = this.state;
        return (
            <View style={style.container}>
                <View style={style.imageContainer}>
                    <Image
                        source={{
                            uri: data.avatar,
                            cache: 'only-if-cached',
                        }}
                        style={style.messageImage}/>
                </View>
                <TouchableHighlight
                    onPress={() => this.closeMessage()}>
                    <View style={style.textContainer }>
                        <View style={style.titleContainer}>
                            <View>
                                <Text style={style.messageName}>
                                    {data.first_name}{" "}{data.last_name}
                                </Text>
                            </View>
                            <View>
                                <Text style={style.messageDate}>
                                    {data.date}
                                </Text>
                            </View>
                        </View>
                        <View style={style.titleContainer}>
                            <View style={{width:'90%'}}>
                                <Text style={style.messageText}
                                      numberOfLines={1}
                                      ellipsizeMode="tail"
                                >
                                    {data.message}
                                </Text>
                            </View>
                            <View style={ [style.dateContainer]}>
                                <View style={style.speakerIcon}>
                                    {
                                        data.notification ?
                                            <Text/>:
                                            <IoniconsIcon
                                                size={25}
                                                name='ios-notifications-off'
                                            />
                                    }
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
                {
                    showChatModal ?
                        <MessageScreen show={showChatModal} messageData={data} {...this.props} closeMessage={this.closeMessage}/>:
                        <></>
                }
            </View>
        )
    }
}

const style = StyleSheet.create({
    messageContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    container: {
        height: 50,
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        margin: 10
    },
    imageContainer: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    messageImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    textContainer: {
        width:'80%',
    },
    titleContainer: {
        flexDirection: 'row',
        width:'100%',
        justifyContent :'space-between'
    },
    messageName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#121212'
    },
    dateContainer: {
    },
    speakerIcon: {
        right: 10,
    },
    messageDate: {
        marginTop:7,
        marginRight: 5
    },
    messageText:{
        color: '#121212',
        fontSize: 12,
    }

});

export default RenderSingleMessage;
