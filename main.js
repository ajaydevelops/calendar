let form = document.querySelector("form"); 

let currentDate = document.getElementById("currentDate");

let currentDay = document.getElementById("currentDay");

let userDate = document.getElementById("userDate");

let getDate = () => {
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDay();
    
    let getMonth = () => {

        switch(month) {
                case 0:
                month = "January";
                    break;
                case 1:
                month = "February";
                    break;
                case 2:
                month = "March";
                    break;
                case 3:
                month = "April";
                    break;
                case 4:
                month = "May";
                    break;
                case 5:
                month = "June";
                    break;
                case 6:
                month = "July";
                    break;
                case 7:
                month = "August";
                    break;
                case 8:
                month = "September";
                    break; 
                case 9:
                month = "October";
                    break;
                case 10:
                month = "November";
                    break;
                case 11:
                month = "December";
                    break;
        }
        
    currentDate.value = `${date.getDate()} ${month} ${date.getFullYear()}`;
    }

    let getDay = () => {

        switch(day) {
                case 0: 
                day = "Sunday";
                    break;
                case 1:
                day = "Monday";
                    break;
                case 2:
                day = "Tuesday"
                    break;
                case 3:
                day = "Wednesday";
                    break;
                case 4:
                day = "Thursday";
                    break;
                case 5:
                day = "Friday";
                    break;
                case 6:
                day = "Saturday";
                    break;
        }

    currentDay.value = day;    
    }
    
    getMonth();
    getDay();

}

getDate();

let getMonthCode = (arr) => {
    let monthCodeArr = [];
    let monthCode;

    for(let i=0; i<arr.length; i++) {

        switch(arr[i]) {
            case "January":
                monthCode = 0;
                break;
            case "February":
                monthCode = 1;
                break;
            case "March":
                monthCode = 2;
                break;
            case "April":
                monthCode = 3;
                break;
            case "May":
                monthCode = 4;
                break;
            case "June":
                monthCode = 5;
                break;
            case "July":
                monthCode = 6;
                break;
            case "August":
                monthCode = 7;
                break;
            case "Setember":
                monthCode = 8;
                break;
            case "October":
                monthCode = 9;
                break;
            case "November":
                monthCode = 10;
                break;
            case "December":
                monthCode = 11;
                break;
        }
    monthCodeArr.push(monthCode);    
    }
    return  monthCodeArr;
}


form.addEventListener("submit", e => {
    e.preventDefault();
    let currentDdV = currentDate.value.split(" ");
    let userDdV = userDate.value.split(" ");
    
    if(currentDdV[2] < userDdV[2]) {
        console.log("user date is big")

    } else if(currentDdV[2] ===userDdV[2]) {
        console.log("current date and user date is equal");
        let arr = [currentDdV[1], userDdV[1]];
        
        let monthCodeArr = getMonthCode(arr);
    
        if(monthCodeArr[0] < monthCodeArr[1]) {
            console.log("user month code is big");

        } else {
             console.log("current month code is big");
        }
        
    } else {
        console.log("current date is big");
    }

});