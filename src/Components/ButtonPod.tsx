import React from "react";
import {StyleSheet, View} from 'react-native';
import {ButtonCustom} from "./ButtonCustom";

type ButtonPodPropsType = {
    info: Array<{
        title: string,
        function: () => void,
        disabled: boolean
    }>
}

export const ButtonPod = ({info}: ButtonPodPropsType) => {
    return (
        <View style={styles.wrapper}>
            {info.map((el, i) => {
                return <ButtonCustom disabled={el.disabled} size={1} key={i} title={el.title} onClick={el.function}/>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%'
    }
})