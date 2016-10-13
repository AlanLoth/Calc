var opc = 0;
function anotar(x){
    var varia = x;
    if(opc !== 0)
    {
        document.getElementById("text2").innerHTML+=varia;
    }
    else
    {
        document.getElementById("text1").innerHTML+=varia;
    }
}
function opera(x){
    var varia = x;
    document.getElementById("opc").innerHTML=varia;
    switch(varia)
    {
        case"+":
            opc = 1;
        break;
        case"-":
            opc = 2;
        break;
        case"*":
            opc = 3;
        break;
        case"/":
            opc = 4;
    }
}
function calculo(){
    var num1 = document.getElementById("text1").textContent;
    var num2 = document.getElementById("text2").textContent;
    var res;
    switch(opc)
    {
        case 1:
            var num1 = parseInt(num1);
            var num2 = parseInt(num2);
            res = num1+num2;
        break;
        case 2:
            res = num1-num2;
        break;
        case 3:
            res = num1*num2;
        break;
        case 4:
            res = num1/num2;
    }
    document.getElementById("resulta").innerHTML=res;
}
function cancel(){
    document.getElementById("text2").innerHTML=null;
    document.getElementById("text1").innerHTML=null;
    document.getElementById("resulta").innerHTML=null;
    document.getElementById("opc").innerHTML=null;
    opc=0;
}
