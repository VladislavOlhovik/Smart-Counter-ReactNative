import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {ButtonCustom} from "./ButtonCustom";

type InputCustomPropsType = {
    value: number,
    title: string,
    changeValue: (value: string, symbol: string) => void
}

export const InputCustom = (props: InputCustomPropsType) => {
    return (
        <View style={styles.content}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.button}>
                <ButtonCustom size={0.5} title={'-'} onClick={() => props.changeValue(props.title[0], '-')}/>
            </View>
            <Text style={{...styles.title, width: 30}}>{props.value}</Text>
            <View style={styles.button}>
                <ButtonCustom size={0.5} title={'+'} onClick={() => props.changeValue(props.title[0], '+')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    title: {
        fontSize: 25,
        color: '#60D2F5',
        textAlign: 'center'
    },
    button: {
        marginTop: 5
    }
})