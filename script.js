let h1 = document.getElementById("h1")
function calculate(operator){
  let inp1 = document.getElementById("num1").value;
  let inp2 = document.getElementById("num2").value;
  let convert =Number(inp1);
  let convert1 =Number(inp2);
   if( operator === "+"){
    var result = convert+convert1;
    h1.innerText =result
   }
   else if( operator === "-"){
    var result = convert-convert1;
    h1.innerText =result
   }
   else if( operator === "/"){
    var result = convert/convert1;
    h1.innerText =result
   }
   else if( operator === "*"){
    var result = convert*convert1;
    h1.innerText =result
   }
   else{
    alert("Enter Your Number Please")
   }
  inp1.value=";"
  inp2.value=";"


}
