import React from "react";
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export type ButtonPropsType = {
    title: string,
    onClick: () => void,
    size: number
    disabled?: boolean
}

export const ButtonCustom = (props: ButtonPropsType) => {
    return (
        <TouchableOpacity disabled={props.disabled}
                          style={{
                              ...styles.wrapper,
                              width: styles.wrapper.width * props.size,
                              height: styles.wrapper.height * props.size,
                              opacity: props.disabled ? 0.3 : 1
                          }}
                          onPress={props.onClick}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 100,
        height: 50,
        backgroundColor: '#60D2F5',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30
    }
})

