export type StateType = CounterType[]
export type CounterType = {
    id: string,
    title: string,
    startValue: number,
    maxValue: number,
    value: number | string
}
type ActionsAppReducer = ReturnType<typeof setValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof createCounterAC>

const SET_VALUE = 'SET_VALUE'
const CREATE_COUNTER = 'CREATE_COUNTER'

let initState: StateType = [{
    title:'first',
    id:'2131234324',
    value:'Click SET',
    maxValue:5,
    startValue:0
},{
    title:'second',
    id:'213154684524',
    value:'Click SET',
    maxValue:5,
    startValue:0
}]


export const appReducer = (state = initState, action: ActionsAppReducer) => {
    switch (action.type) {
        case SET_VALUE: {
            return state.map(el=>el.id===action.payload.id?{...el, ...action.payload}:el)
        }
        case CREATE_COUNTER: {
            return [
                ...state,
                {
                    id: Date.now().toString(),
                    value:'Click SET',
                    ...action.payload
                }
            ]
        }
    }
    return state
}

export const setValueAC = (value: number | string, id:string) => ({type: SET_VALUE, payload: {value, id}} as const)
export const setStartValueAC = (startValue: number | string, id:string) => ({type: SET_VALUE, payload: {startValue, id}} as const)
export const setMaxValueAC = (maxValue: number | string, id:string) => ({type: SET_VALUE, payload: {maxValue, id}} as const)
export const createCounterAC = (
    title: string, startValue: number, maxValue: number
) => ({type: CREATE_COUNTER, payload: {title, startValue, maxValue}} as const)