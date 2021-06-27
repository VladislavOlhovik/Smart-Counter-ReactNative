
export const maxValueHelper = (maxValue:number, symbol:string, startValue:number) => {
    if (maxValue >= 0 && symbol == '+'){
        return maxValue + 1
    } if(maxValue == 0 && symbol == '-'&&maxValue>=startValue){
        return maxValue
    } if (maxValue != 0 && symbol == '-'&&maxValue>startValue){
        return maxValue-1
    } return maxValue
}

export const startValueHelper = (startValue:number, symbol:string, maxValue:number) => {
    if (startValue >= 0 && symbol == '+'&&startValue<maxValue){
        return startValue + 1
    } if(startValue == 0 && symbol == '-'&&startValue>=maxValue){
        return startValue
    } if (startValue != 0 && symbol == '-'){
        return startValue-1
    } return startValue
}