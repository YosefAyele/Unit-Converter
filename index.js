/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputVal=document.getElementById("in-el")
const convertBtn=document.getElementById("convert-el")
let val1=document.getElementById("group1")
let val2=document.getElementById("group2")
let val3=document.getElementById("group3")

convertBtn.addEventListener("click", function(){
   let number=Number(inputVal.value)
   convertedLength=`${number} meters =${(number*3.281).toFixed(3)} feet | ${number} feet=${(number/3.281).toFixed(3)} meters`
  
   convertedVolume=`${number} liters =${(number*0.264).toFixed(3)} gallons | ${number} gallons=${(number/0.264).toFixed(3)} liters`
  
   convertedMass=`${number} kilograms =${(number*2.204).toFixed(3)} pounds | ${number} pounds=${(number/2.204).toFixed(3)} kilograms`
   
   val1.innerHTML=convertedLength
   val2.innerHTML=convertedVolume
   val3.innerHTML=convertedMass
})