


const date = new Date();
const conversionButton = document.getElementById("convert");
const inputList = document.getElementsByClassName("inputText");
const validList = document.getElementsByClassName("validity");
console.log("valid number : " + validList.length);
console.log(inputList.length);
const labelsList = document.getElementsByClassName("age");
console.log(labelsList.length);

let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let finalDay = 0;
let finalMonth = 0 ; 
let finalYear =0;

let valid1 = false;
let valid2 = false;
let valid3 = false;


    let dayNumber =0 ;
    let monthNumber = inputList[1].value;
    let yearNumber =inputList[2].value;

conversionButton.addEventListener('click' , ()=>{
    
    if(inputList[0].value > 31 || inputList[0].value < 1){
        validList[0].classList.add("Invalid");
        valid1 = false;
    }else{
         dayNumber = inputList[0].value;
         validList[0].classList.remove("Invalid");
         valid1= true;
    }


    if(inputList[1].value < 1 || inputList[1].value > 12){
        validList[1].classList.add("Invalid");
        valid2 =false;
    }else{
        valid2 =true;
        monthNumber = inputList[1].value;
        validList[1].classList.remove("Invalid");
    }

    if(inputList[2].value < 1 || inputList[2].value >year){
        validList[2].classList.add("Invalid");
        valid3 =false;
    }else{
        valid3 = true;
        yearNumber =inputList[2].value;
        validList[2].classList.remove("Invalid");
    }

  



    if ( valid1== true && valid2 == true && valid3 == true){

    if(month < monthNumber){
        finalYear = year - yearNumber -1;
        finalMonth = 12-(monthNumber-month)-1;
        finalDay = (30 * (finalMonth))+(30-day);
    }
    else if (month == monthNumber && day < dayNumber){
        finalYear = year - yearNumber -1;
        finalMonth = 11;
        finalDay = 365-(dayNumber-day);
    }
    else if (month == monthNumber && day > dayNumber ){
        finalYear = year - yearNumber ;
        finalMonth = 0;
        finalDay = day-dayNumber;
    }
    else if (month > monthNumber){
        finalYear = year - yearNumber ;
        finalMonth = month-monthNumber;
        finalDay = (finalMonth*30) + day;
    }
    
    labelsList[0].innerText = finalYear;
    labelsList[1].innerText = finalMonth;
    labelsList[2].innerText = finalDay;
   }
});