const textbox=document.getElementById("textbox")
const toF=document.getElementById("toFahrenheit")
const toC=document.getElementById("toCelsius")
const result=document.getElementById("result")
let temp;
console.log("hi")
function convert(){
    if(toF.checked){
        console.log("to F conversion")
        temp=Number(textbox.value)
        temp=(9/5)*temp+32
        result.textContent=temp.toFixed(2)+"°F"
    }
    else if(toC.checked){
        console.log("to C conversion")
        temp=Number(textbox.value)
        temp=(5/9)*(temp-32)
        result.textContent=temp.toFixed(2)+"°F"

    }
    else{
        result.textContent="NO unit selected bruv"
    }
}