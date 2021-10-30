function Calc(action, a , b)

if(action === "sum"){
    return a + b
}if(action === "multi"){
    return a * b
}if(action === "diff"){
    return a - b
}if(action === "div"){
    return a / b
}if(action === "RemOfDiv"){
    return a % b
}if(action === "pow"){
    return a ** b
}else{
    return "unknown operation"
}