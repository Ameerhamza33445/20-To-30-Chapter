 // ------- (1 ....) ------

var number = (3.45214)

console.log("number"+" "+number,"<br>");

number = Math.round(3.45214)

console.log("round Off Value :",number,"<br>");

number = Math.floor(3.45214)

console.log("floor value :",number, "<br>");

number = Math.ceil(3.45214)

console.log("ceil value :",number, "<br>");



//   ------- (2 ...) ------

var num = (-2.673)

console.log("number"+" "+num,);

num = Math.round(-2.673)

console.log("round Off Value :",num,);

num = Math.floor(-2.673)

console.log("floor value :",num,);

num = Math.ceil(-2.673)

console.log("ceil value :",num,);



//   -------- (4 ... )---------

var randome = Math.ceil(Math.random()* 6)

console.log(randome);


//   -------- (5 ... )---------

var randome = Math.floor(Math.random() * 2) +1


if(randome === 1){
    console.log(randome);
    console.log("Randome Coin Vaiue Tails : ");
}else{
    console.log(randome);
    console.log("Randome Coin Value Heads : ");
}




//  -------- (6 ... ) -------

var randome =  Math.floor(Math.random() * 100) +1

console.log(randome);



//   ------- (7 . . .) -------

var Secratenum = 3;
var Guessnum   =  Number(prompt("Enter Your Lucky Number between 1 to 10"));

if( Guessnum === Secratenum){
    alert("Congratulate")
}
else{
    alert("Sorry Wrong Number Please try Again Leter!!!")
}



 //   ------- (8 . . .) -------

var age = Number(prompt())
var rock = new Date();
var currentyear = rock.getFullYear()


var birthYear = currentyear - age

document.write("Your Age Is : " + age)
document.write("<br/>")
document.write("Your BirthYear Is : " + birthYear)


//  --------- (9 . . .) --------

var userData = prompt("What is your weight?");

var result = "";

for (var i = 0; i < userData.length; i++) {
    if (!isNaN(userData[i]) || userData[i] === ".") {
        result += userData[i];
    }
}

if (result !== "") {
    document.write("The weight of user is " + result + " kilograms.");
} else {
    alert("Please Enter your valid weight.");
}



//   ------- (10 . . .) ------

var user = new Date()
var date = user.getDate() 

if(date <= 15){
    alert("First fifteen days Of the month")
}else{
    alert("Last days Of tha month")
}



