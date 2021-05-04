var firstFirst;
var firstSecond;
var firstThird;

function controlFirstKey(){
    controlKey();
    firstFirst = Number(document.getElementById("firstKey").value);
    firstSecond = Number(document.getElementById("secondKey").value);
    firstThird = Number(document.getElementById("thirdKey").value);
    
    document.getElementById("firstKey").disabled = true;
    document.getElementById("secondKey").disabled = true;
    document.getElementById("thirdKey").disabled = true;
    document.getElementById("confirm").disabled = true;
}

function controlKey(){
    var first = Number(document.getElementById("firstKey").value);
    var second = Number(document.getElementById("secondKey").value);
    var third = Number(document.getElementById("thirdKey").value);
    
    if(first > 26){
        first = 0;
        second++;
    }
    if(second > 26){
        second = 0;
        third++;
    }
    if(third > 26){
        third = 0;
        first++;
    }
    
    document.getElementById("firstKey").value = first;
    document.getElementById("secondKey").value = second;
    document.getElementById("thirdKey").value = third;
    document.getElementById("first").value = first;
    document.getElementById("second").value = second;
    document.getElementById("third").value = third;
}

function calcWheel(){
    var first = Number(document.getElementById("firstKey").value);
    var second = Number(document.getElementById("secondKey").value);
    var third = Number(document.getElementById("thirdKey").value);
    
    var add = (first*2 + second*3 + third*4)/3;
    console.log(add);
    first++;
    
    document.getElementById("firstKey").value = first;
    document.getElementById("secondKey").value = second;
    document.getElementById("thirdKey").value = third;
  
    document.getElementById("first").value = first;
    document.getElementById("second").value = second;
    document.getElementById("third").value = third;
    controlKey();
    console.log(Math.round(add)+1);
    return Math.round(add)+1;
}

var alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function shift(){
    
    document.getElementById("result").value = "";
    var value = document.getElementById("string").value;
    
    value = value.toLowerCase();
    
    for(var i = 0; i < value.length; i++){
        var char = value.charAt(i);
        
        if(alfabet.includes(char)){
            alfabetShift(char);
        }else if(digit.includes(char)){
            digitShift(char);
        }else{
            document.getElementById("result").value = document.getElementById("result").value + char;
        }
    }
    
    document.getElementById("firstKey").value = firstFirst;
    document.getElementById("secondKey").value = firstSecond;
    document.getElementById("thirdKey").value = firstThird;
    
    /*var lastChar = value.substr(value.length - 1);
    lastChar = lastChar.toLowerCase();
    
    if(alfabet.includes(lastChar)){
        alfabetShift(lastChar);
    }else if(digit.includes(lastChar)){
        digitShift(lastChar);
    }else{
        document.getElementById("result").value = document.getElementById("result").value + lastChar;
    }*/
}

function alfabetShift(char){
    var pos = alfabet.indexOf(char);
    var newPos = pos + calcWheel();
    console.log(newPos);
    while(true){
        if(newPos > alfabet.length){
            newPos -= alfabet.length;
        }else{
            break;
        }
    }
    console.log(newPos);
    document.getElementById("result").value = document.getElementById("result").value + alfabet[newPos-1];
}

function digitShift(char){
    var pos = digit.indexOf(char);
    var newPos = pos + calcWheel();
    while(newPos > digit.length){
            newPos -= digit.length;
    }
    document.getElementById("result").value = document.getElementById("result").value + digit[newPos-1];
}

