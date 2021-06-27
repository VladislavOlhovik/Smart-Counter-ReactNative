import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PodView} from "./PodView";
import {PodTuner} from "./PodTuner";
import {Header} from "./Header";
import {CounterType} from "../redux/appReducer";

type CounterPropsType = {
    data: CounterType,
    navigation: any,
    route: any,
    prevCounter: string | undefined,
    nextCounter: string | undefined,
}

export const Counter = ({data, navigation, prevCounter, nextCounter}: CounterPropsType) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} navData={[prevCounter, nextCounter]} title={data.title}/>
            <View style={styles.wrapperPod}>
                <PodView {...data}/>
                <PodTuner {...data}/>
            </View>
            <StatusBar style="auto"/>
        </View>
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
