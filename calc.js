function calc(action, a , b){
    const isNotValid = (!a || !b || (typeof a != 'number') ||(typeof a != 'number'))
    if (isNotValid){
        return "Error"
    }else if(action === "sum"){
        return a + b
    }else if(action === "multi"){
        return a * b
    }else if(action === "diff"){
        return a - b
    }else if(action === "div"){
        return a / b
    }else if(action === "RemOfDiv"){
        return a % b
    }else if(action === "pow"){
        return a ** b
    }else{
        return "unknown operation"}
    }
    console.log(calc("multi",2,3)) // Пример умножения
    console.log(calc("multi",2)) // Пример ошибки
    console.log(calc("mult",2,3)) // Пример неизвестного оператора
