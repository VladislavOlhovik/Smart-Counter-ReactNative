import React, {useState} from "react";
import {Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {createCounterAC, StateType} from "../redux/appReducer";
import {RootStateType} from "../redux/store";
import {ButtonCustom} from "./ButtonCustom";


export const HomePage = ({navigation}: any) => {

    const data = useSelector<RootStateType, StateType>(store => store.app)
    const [title, setTitle] = useState<string>('')
    const dispatch = useDispatch()

    const typing = (text: string) => {
        setTitle(text)
    }

    const addNewCounter = () => {
        if (title.trim()) {
            dispatch(createCounterAC(title, 0, 5))
            setTitle('')
        } else {
            Alert.alert('Enter your Title, Please:)')
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Your Smart Counter</Text>
                <View style={styles.block}>
                    <TextInput value={title}
                               style={styles.input}
                               placeholder={'Enter your Title'}
                               placeholderTextColor='#60D2F5'
                               onChangeText={typing}/>
                    <ButtonCustom size={0.8} title={"Add"} onClick={addNewCounter}/>
                </View>
            </View>
            <View style={styles.itemWrapper}>
                <FlatList
                    data={data}
                    renderItem={({item, index}) => (
                        <TouchableOpacity onPress={() => navigation.navigate(item.title + item.id)}>
                            <View style={styles.item}>
                                <Text style={styles.title}>
                                    <Text>{index + 1} - </Text>
                                    {item.title}
                                </Text>
                            </View>
                        </TouchableOpacity>)}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#2A2C36',
    },
    itemWrapper: {
        height: '70%',
        borderStyle: 'solid',
        borderColor: '#60D2F5',
        borderRadius: 15,
        borderWidth: 2,
        padding: 15
    },
    item: {
        width: 300,
        paddingLeft: 20,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#60D2F5',
        marginBottom: 10,
    },
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#60D2F5',
        fontSize: 30,
        marginBottom: 15
    },
    input: {
        width: '60%',
        fontSize: 20,
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        color: '#60D2F5',
    }
});