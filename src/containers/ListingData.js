import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView, SectionList, TouchableOpacity, Modal, Alert, TouchableHighlight} from 'react-native';

import jsonData from './userdata';

const ListingData = () => {

    // console.log("jsonData==>", jsonData);
    const sectionListData = [
        {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
    ];

    const [selectedItem, setSelectedItem] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const modalIsVissible = () => {
        setShowModal(!showModal)
    };

    // console.log("showModal==>", showModal);

    const handleShowPopup = (item) => {
        // console.log("item==>", item);
        setSelectedItem(item)
        setShowModal(true)
    };

    const renderModal = () => {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={showModal}
                onRequestClose={() => {
                    Alert.alert("MODAL HAS BEEN CLOSED")
                }}
            >
                <View style={{marginTop: 22}}>
                    <View>
                        <Text>Hello World</Text>
                        {console.log("==selectedItem==", selectedItem)}
                        {
                            selectedItem !== null && Object.keys(selectedItem).length> 0 ? (
                                <View>
                                    <Text>First Name: {selectedItem.first_name}</Text>
                                    <Text>Last Name: {selectedItem.last_name}</Text>
                                    <Text>Email: {selectedItem.email}</Text>
                                    <Text>Gender: {selectedItem.gender}</Text>

                                </View>
                            ): (
                                <Text/>
                            )
                        }
                        <TouchableHighlight
                            onPress={() => {
                                modalIsVissible(!showModal);
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>

                </View>

            </Modal>
        )
    }
    return (
        <View style={style.container}>
            {renderModal()}
            <FlatList
                data={jsonData}
                renderItem={(data) => {
                    let {item} = data
                    // console.log("item==>", data);
                    return (
                        <View style={style.item} key={data.index} >
                            <Text>{item.first_name}</Text>
                            <Text>{item.last_name}</Text>
                            {/*<Text>{item.email}</Text>*/}
                            <Text>{item.gender}</Text>
                            <TouchableOpacity onPress={() =>  handleShowPopup(item)}>
                                <Text>Show Data</Text>
                            </TouchableOpacity>
                        </View>
                    )

                }}
                keyExtractor={(item, index) => index}
            />


            {/*<SectionList*/}
            {/*    sections={[*/}
            {/*        {title: 'D', data: ['Devin', 'Dan', 'Dominic']},*/}
            {/*        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},*/}
            {/*    ]}*/}
            {/*    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}*/}
            {/*    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}*/}
            {/*    keyExtractor={(item, index) => index}*/}
            {/*/>*/}
            {/*<SectionList*/}
            {/*    sections={sectionListData}*/}
            {/*    renderItem={({item}) => {*/}
            {/*        return <Text style={style.item}>*/}
            {/*            {item}*/}
            {/*        </Text>*/}
            {/*    }}*/}
            {/*    renderSectionHeader={({section}) => {*/}
            {/*        return <Text style={style.sectionHeader}>*/}
            {/*            {section}*/}
            {/*        </Text>*/}
            {/*    }}*/}
            {/*    keyExtractor={(item, index) => index}*/}
            {/*/>*/}

            <View>
                <Text>ListingData</Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
    }
});

export default ListingData;
