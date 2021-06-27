import React from "react";
import {StyleSheet, View} from 'react-native';
import {ButtonPod} from "./ButtonPod";
import {Tuner} from "./Tuner";
import {useDispatch} from "react-redux";
import {CounterType, setValueAC} from "../redux/appReducer";


export const PodTuner = ({id, value, maxValue, startValue}: CounterType) => {

    const dispatch = useDispatch()

    const setData = () => {
        dispatch(setValueAC(startValue, id))
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.view}>
                <Tuner idCounter={id} maxValue={maxValue} startValue={startValue}/>
            </View>
            <View style={{...styles.view, marginBottom: 10}}>
                <ButtonPod info={[{title: 'Set', function: setData, disabled: typeof value == 'number'}]}/>
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
        justifyContent: 'center'
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