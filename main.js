function a(x){   //funcion alert
    alert(x);
}
function aCall(){
a("you!")   // cube 
}
function cube(x){
    alert(x*x*x)
}
function cubeCall(){
cube(2)
}
function avg2(x,y){  //average of two numbers
    alert((x+y)/2);
}
function avg2Call(){
avg2(4,2);
}

function sum3(x=0,y=0,z=0){  //sum of 3 numbers
    alert(x+y+z)
}
function sumCall(){
sum3(3,5)
}

function intRandom( max, min=0) {   //rundom numbers

    alert( Math.round(Math.random() * (max - min + 1)) + min); 
  }
  function intRandomCall(){
  intRandom(93)
  }
function greetAll(...arr){
let sum = "";
  
    for (let arg of arr) {
        sum += "," + arg;
    }
   alert( result = "Hello " + sum +"! ! !");

}
function greetAllCall(){
    greetAll("Serg","Dimon","Pakemon","Luntik","VinniPooh")
}
function sum(...arr){
    let sum = 0;
      
        for (let arg of arr) {
            sum += arg;
        }
       alert(sum);
    
    }
    function sumCall(){
        sum(4,5,5,5,5,5,5,6)
    } 
        
        let switchTask = prompt("Введите название задания")
switch (switchTask){
    case "a": aCall()
              break
    case "cube": cubeCall()
              break
    case "avg2": avg2Call()
              breakc
    case "sum3": sum3Call()
              break
    case "intRandom": intRandomCall()
              break
    case "greetAll": greetAllCall()
              break
    case "sum": sumCall()
              break
}