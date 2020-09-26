function calculate() {
    var day = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var gender = null;
    if(document.getElementById("female").checked){
        gender = "Female"
    }
    else if(document.getElementById("male").checked){
        gender = "Male"
    }

    else if(gender === null){
        alert("Please choose gender")
    }

    // var CC = Math.floor(year / 100)
    // var YY = Math.round(((year / 100) - CC) * 100)
    // var DD = parseInt(day);
    // var MM = parseInt(month);
 
    var date = new Date(year + "/" + month +"/"+ day);
    var d = date.getDay();//get day of the week
    var femaleNames = ['Akosua','Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    var maleNames = ['Kwasi','Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var dayOfTheWeek =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
}