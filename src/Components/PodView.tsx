import React from "react";
import {StyleSheet, View} from 'react-native';
import {Display} from "./Display";
import {ButtonPod} from "./ButtonPod";
import {useDispatch} from "react-redux";
import {CounterType, setValueAC} from "../redux/appReducer";


export const PodView = ({maxValue, startValue, value, id, title}: CounterType) => {

    const dispatch = useDispatch()

    const inc = () => {
        if (value < maxValue && typeof value == 'number') {
            dispatch(setValueAC(value + 1, id))
        }
    }

    const reset = () => {
        if (typeof value == 'number') {
            dispatch(setValueAC(startValue, id))
        }
    }

    const buttonInfo = [
        {title: 'Reset', function: reset, disabled: false},
        {title: 'Inc', function: inc, disabled: value == maxValue}
    ]

    return (
        <View style={styles.wrapper}>
            <View style={styles.view}>
                <Display error={value == maxValue} title={value}/>
            </View>
            <View style={{...styles.view, marginBottom: 10}}>
                <ButtonPod info={buttonInfo}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        height: 300,
        borderColor: '#60D2F5',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 15,
        marginHorizontal: 10,
        justifyContent: 'center',
    },
    view: {
        borderColor: '#60D2F5',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 15,
        marginTop: 10,
        marginHorizontal: 10,
        height: '45%',
    }
});