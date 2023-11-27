let emailPattern=new RegExp("(?=@)(?=.+.com)");
let emailString ="princekumar.12gmail.com";
if(!(emailPattern.test(emailString))){ 
    console.log("Email Id is invalid! It should contain@ and.");
}
else{
  console.log("Email Id is Valid");
}


let myPattern = /@gmail.com/;
let myString="mark.christ@gmail.com";
console.log(myString.search(myPattern));
console.log(myString.replace(myPattern,'@facebook.com'));
/* 
OUTPUT: 
11 
mark.christ@facebook.com 
*/
