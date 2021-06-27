import React from "react";
import {View, StyleSheet} from "react-native";
import {InputCustom} from "./InputCustom";
import {maxValueHelper, startValueHelper} from "../utils/Utils";
import {useDispatch} from "react-redux";
import {setMaxValueAC, setStartValueAC, setValueAC} from "../redux/appReducer";

type TunerPropsType = {
    maxValue: number,
    startValue: number,
    idCounter: string
}

export const Tuner = ({maxValue, startValue, idCounter}: TunerPropsType) => {

    const dispatch = useDispatch()

    const changeValue = (value: string, symbol: string) => {
        dispatch(setValueAC('Click set', idCounter))
        switch (value) {
            case 'S': {
                dispatch(setStartValueAC(startValueHelper(startValue, symbol, maxValue), idCounter))
                dispatch(setValueAC('Click SET', idCounter))
            }
                break
            case 'M': {
                dispatch(setMaxValueAC(maxValueHelper(maxValue, symbol, startValue), idCounter))
                dispatch(setValueAC('Click SET', idCounter))
            }
                break
        }
    }

    return (
        <View style={styles.wrapper}>
            <InputCustom value={startValue} changeValue={changeValue} title={'Start value:'}/>
            <InputCustom value={maxValue} changeValue={changeValue} title={'Max value: '}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    content: {
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    }
})