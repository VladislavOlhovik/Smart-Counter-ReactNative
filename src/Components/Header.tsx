import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {ButtonCustom} from "./ButtonCustom";

type HeaderPropsType = {
    title: string,
    nav: (num: number) => void
}

export const Header = ({title, nav}: HeaderPropsType) => {

    return (
        <View style={styles.container}>
            <ButtonCustom size={0.5} title={'<-'} onClick={() => nav(0)}/>
            <Text style={styles.text}>{title}</Text>
            <ButtonCustom size={0.5} title={'->'} onClick={() => nav(1)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2A2C33',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        height: 70,
    },
    text: {
        color: '#60D2F5',
        fontSize: 30
    }
});