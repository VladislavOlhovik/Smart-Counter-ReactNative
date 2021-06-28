import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PodView} from "./PodView";
import {PodTuner} from "./PodTuner";
import {Header} from "./Header";
import {CounterType} from "../redux/appReducer";
import GestureRecognizer from 'react-native-swipe-gestures'

type CounterPropsType = {
    data: CounterType,
    navigation: any,
    route: any,
    prevCounter: string | undefined,
    nextCounter: string | undefined,
}

export const Counter = ({data, navigation, prevCounter, nextCounter}: CounterPropsType) => {

    const navData = [prevCounter, nextCounter]
    const nav = (num: number) => {
        navigation.navigate(navData[num] ? navData[num] : 'Home')
    }

    return (
        <GestureRecognizer onSwipeLeft={() => nav(1)}
                           onSwipeRight={() => nav(0)}
                           style={{flex: 1}}>
            <View style={styles.container}>
                <Header nav={nav} title={data.title}/>
                <View style={styles.wrapperPod}>
                    <PodView {...data}/>
                    <PodTuner {...data}/>
                </View>
                <StatusBar style="auto"/>
            </View>
        </GestureRecognizer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A2C36',
    },
    wrapperPod: {
        marginVertical: 10
    }
});
