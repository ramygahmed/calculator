const calcButtons = Array.from(document.getElementsByClassName('btn'))
const numDisplay = document.getElementById('numDisplay')
const btnAC = document.getElementsByClassName('btnAC')
const btnSign = document.getElementsByClassName('btnSign')
const btnDiv = document.getElementsByClassName('btnDiv')
const btnMul = document.getElementsByClassName('btnMul')
const btnMod = document.getElementsByClassName('btnMod')
const btnMin = document.getElementsByClassName('btnMin')
const btnPlus = document.getElementsByClassName('btnPlus')
const btnZero = document.getElementsByClassName('btnZero')
const btnDec = document.getElementsByClassName('btnDec')
const btnEqual = document.getElementsByClassName('btnEqual')
let arr = [0,0,0]
let count = 0;
const sum = (arr) => arr[0]+arr[2];
const mult = (arr) => arr[0]*arr[2];
const divide = (arr) => arr[0]/arr[2];
const mod = (arr) => arr[0]%arr[2];
const minus = (arr) => arr[0]-arr[2];
let secondValue = false;
let newOp = false;
let opCheck = false;
numDisplay.textContent = 0;
document.addEventListener('keydown',e=>{
    let allowedNumbers = ['1','2','3','4','5','6','7','8','9','0']
    let allowedSymbols = ['+','-','/','%','*','Enter']
    let numberOrSymbol = e.key;
    allowedNumbers.forEach(element => {
        if (numberOrSymbol == element){
            if(secondValue){numDisplay.textContent = ''; secondValue=false;}
            if(numDisplay.textContent == 0){numDisplay.textContent = ''}
            numDisplay.textContent += numberOrSymbol;
        }
    })
    allowedSymbols.forEach(element => {
        if (numberOrSymbol == element){
            switch (element) {
                case '+':
                    if (count == 0){
                        arr[0] = parseInt(numDisplay.textContent)
                        arr[1] = '+'
                        secondValue = true;
                        count = 1;
                        }else{
                            resolve()
                            arr[1] = '+'
                            secondValue=true;
                        }
                    break;
                case '-':
                    if (count == 0){
                        arr[0] = parseInt(numDisplay.textContent)
                        arr[1] = '-'
                        secondValue = true;
                        count = 1;
                        }else{
                            resolve()
                            arr[1] = '-'
                            secondValue=true;
                        }
                    break;
                case '/':
                    if (count == 0){
                        arr[0] = parseInt(numDisplay.textContent)
                        arr[1] = '/'
                        secondValue = true;
                        count = 1;
                        }else{
                            resolve()
                            arr[1] = '/'
                            secondValue=true;
                        }
                    break;
                case '%':
                    if (count == 0){
                        arr[0] = parseInt(numDisplay.textContent)
                        arr[1] = '%'
                        secondValue = true;
                        count = 1;
                        }else{
                            resolve()
                            arr[1] = '%'
                            secondValue=true;
                        }
                    break;
                case '*':
                    if (count == 0){
                        arr[0] = parseInt(numDisplay.textContent)
                        arr[1] = '*'
                        secondValue = true;
                        count = 1;
                    }else{
                        resolve()
                        arr[1] = '*'
                        secondValue=true;
                    }
                    break;
                case 'Enter':
                        resolve()
                break;
                default:
                    break;
            }
        }
    })
    
    ;
    
})
calcButtons.forEach(btn => {    // place numbers clicked to the display
    btn.addEventListener('click',e=>{ 
        if(secondValue){numDisplay.textContent = ''; secondValue=false;}
        if(numDisplay.textContent == 0){numDisplay.textContent = ''}
        numDisplay.textContent += btn.textContent;
        
    })
});

btnAC[0].addEventListener('click',e=>{ //AC Button to clear the data
    numDisplay.textContent = 0;
    arr = [0,0,0]
    secondValue = false
    count = 0
})

btnSign[0].addEventListener('click', e=>{ //+/- sign to change when clicked
    numDisplay.textContent = parseInt(-(numDisplay.textContent))
})


btnPlus[0].addEventListener('click',e=>{
    if (count == 0){
    arr[0] = parseInt(numDisplay.textContent)
    arr[1] = '+'
    secondValue = true;
    count = 1;
    }else{
        resolve()
        arr[1] = '+'
        secondValue=true;
    }
})
btnMin[0].addEventListener('click',e=>{
    if (count == 0){
        arr[0] = parseInt(numDisplay.textContent)
        arr[1] = '-'
        secondValue = true;
        count = 1;
        }else{
            resolve()
            arr[1] = '-'
            secondValue=true;
        }
    })

btnMul[0].addEventListener('click',e=>{
    if (count == 0){
    arr[0] = parseInt(numDisplay.textContent)
    arr[1] = '*'
    secondValue = true;
    count = 1;
}else{
    resolve()
    arr[1] = '*'
    secondValue=true;
}
})
btnDiv[0].addEventListener('click',e=>{
if (count == 0){
    arr[0] = parseInt(numDisplay.textContent)
    arr[1] = '/'
    secondValue = true;
    count = 1;
    }else{
        resolve()
        arr[1] = '/'
        secondValue=true;
    }
})
btnMod[0].addEventListener('click',e=>{
    if (count == 0){
        arr[0] = parseInt(numDisplay.textContent)
        arr[1] = '%'
        secondValue = true;
        count = 1;
        }else{
            resolve()
            arr[1] = '%'
            secondValue=true;
        }
    })

btnEqual[0].addEventListener('click', e=>{
    resolve()
});



function resolve(){
    switch (arr[1]) {
        case '+':
            arr[2] = parseInt(numDisplay.textContent)
            arr[0] = sum(arr)
            arr[1] = 0
            arr[2] = 0
            numDisplay.textContent = arr[0]
            break;
        case '-':
            arr[2] = parseInt(numDisplay.textContent)
            arr[0] = minus(arr)
            arr[1] = 0
            arr[2] = 0
            numDisplay.textContent = arr[0]
            break;
        case '/':
            arr[2] = parseInt(numDisplay.textContent)
            arr[0] = divide(arr)
            arr[1] = 0
            arr[2] = 0
            numDisplay.textContent = arr[0]
            break;
        case '%':
            arr[2] = parseInt(numDisplay.textContent)
            arr[0] = mod(arr)
            arr[1] = 0
            arr[2] = 0
            numDisplay.textContent = arr[0]
            break;
        case '*':
            arr[2] = parseInt(numDisplay.textContent)
            arr[0] = mult(arr)
            arr[1] = 0
            arr[2] = 0
            numDisplay.textContent = arr[0]
            break;
        default:
            break;
    }

}