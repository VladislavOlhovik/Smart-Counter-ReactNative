import React from "react";
import {StyleSheet, Text, View} from 'react-native';

export type displayPropsType = {
    title: string | number,
    error: boolean
}

export const Display = (props: displayPropsType) => {
    return (
        <View style={styles.wrapper}>
            <Text style={{...styles.text, color: props.error ? 'red' : '#60D2F5'}}>
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',

    },
    text: {
        color: '#60D2F5',
        fontSize: 55,
        fontWeight: 'bold'
    }
})