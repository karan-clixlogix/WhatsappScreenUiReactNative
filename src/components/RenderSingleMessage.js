import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

const RenderSingleMessage = (props) => {
    // console.log("==props==>", props.data.avatar);
    let {data} = props;
    return (
        <View style={style.container}>
            <View style={style.imageContainer}>
                <Image
                    // source={require('./../../assets/images/tattoo.jpg')}
                    // source={props.data.avatar}
                    source={{
                        uri: props.data.avatar,
                        cache: 'only-if-cached',
                    }}
                    style={style.messageImage}/>
            </View>
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
                            {/*ios-notifications-off*/}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
};

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
        // borderColor: "#121212",
        // borderWidth: 1

    },
    textContainer: {
        width:'80%',
        // marginRight: 20
        // marginVertical: 8,
        // borderBottomColor: '#737373',
        // borderBottomWidth: StyleSheet.hairlineWidth,
        // marginBottom: 20,
        // borderBottomColor: 'rgba(18,18,18,0.2)',
        // borderBottomWidth: 1,
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
        // width: '20%'
    },
    speakerIcon: {
        // marginRight: 10,
        right: 10,
        // top: 0,


    },
    messageDate: {
        marginTop:7,
        marginRight: 5
    },
    messageText:{
        color: '#121212',
        fontSize: 12,
        // width: '80%'
        // wordWrap: '',
        // overflow: 'hidden',
        // ellipsizeMode: 'tail'

    }

});

export default RenderSingleMessage;
