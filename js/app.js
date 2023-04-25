

const conversionButton = document.getElementById("convert");
const inputList = document.getElementsByClassName("inputField");
console.log(inputList.length);
const labelsList = document.getElementsByClassName("number");
console.log(labelsList.length);

conversionButton.addEventListener('click' , ()=>{
    const dayNumber = inputList[0].value;
    const monthNumber = inputList[1].value;
    const yearNumber =inputList[2].value;

    console.log(dayNumber);
    console.log(monthNumber);
    console.log(yearNumber);
    
    labelsList[0].innerText = yearNumber;
    labelsList[1].innerText = monthNumber;
    labelsList[2].innerText = dayNumber;
});