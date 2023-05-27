// A
// var num1=Number(prompt("eded daxil edin"))
// var num2=Number(prompt("eded daxil edin")) 
// var opr=prompt("operator daxil edin")

// function sortOfNumber(num1,num2){
//     switch (opr) {
//         case "+":
//             alert(num1+num2);
//             break;
//         case "-":
//             alert(num1-num2);
//             break;
//         case "/":
//             alert(num1/num2);
//             break;
//         case "*":
//             alert(num1*num2);
//             break;
//         default:
//             alert("yalnish operator")
//             break;
//     }
//     return result
// }
// var result = sortOfNumber(num1,num2);




// B
// function getInfo(name,surname,father) {
//     if(name){
//         return name;
//     }
//     else if(name && surname){
//         return name + " " + surname;
//     }
//     else if(name && surname && father){
//         return name + " " + surname + " " + father    
//     }
//     else{
//         return duzgun deyer daxil edin
//     }
// }
// alert(getInfo(prompt("daxil ediniz")));




// C
var count = 0
function sortOfNumber(num){
    if(num>0 && num<50){
        for(let i=1; i< num; i++){
            if(i%3==0){
                count++;
            }
        }
    }
    if(num>50 && num<100){
        for(let i=1; i<num; i++){
            if(i%5==0){
                count++;
            }
        }
    }
    if(num>100){
        for (let i=1; i<num; i++) {
            if(i%8==0){
                count++;
            }
        }
    }
    return count;
}
alert(sortOfNumber(Number(prompt("eded daxil edin")))); 