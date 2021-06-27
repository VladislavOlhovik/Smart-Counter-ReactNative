import React from 'react';
import {Provider, useSelector} from "react-redux";
import {RootStateType, store} from "./src/redux/store";
import {Counter} from "./src/Components/Counter";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import 'react-native-gesture-handler';
import {HomePage} from "./src/Components/HomePage";
import {StateType} from "./src/redux/appReducer";

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <Provider store={store}>
            <MyApp/>
        </Provider>
    );
}

const MyApp = () => {

    const data = useSelector<RootStateType, StateType>(state => state.app)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' options={{headerShown: false}} component={HomePage}/>
                {data?.map((el, i) => {
                    return (
                        <Stack.Screen options={{headerShown: false}} key={i} name={el.title + el.id}>
                            {props => <Counter prevCounter={data[i - 1] && data[i - 1].title + data[i - 1].id}
                                               nextCounter={data[i + 1] && data[i + 1].title + data[i + 1].id}
                                               data={el} {...props}
                            />}
                        </Stack.Screen>
                    )
                })}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
