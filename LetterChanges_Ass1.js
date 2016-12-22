/*
Assignment1: Change the letter

*/
function LetterChanges(oldStr){ 
    alphas = "abcdefghijklmnopqrstuvwxyz"
    vowels = "aeiou"
    newStr = ''
    console.log("old string is:"+oldStr)
    oldStr = oldStr.toLowerCase()
    for (i=0; i<oldStr.length; i++)
    {   
        var alphaindex = alphas.indexOf(oldStr[i])
        if(alphaindex == 25){
             alphaindex = -1
        }
        var newChar = alphas[alphaindex+1]
        //console.log("replaced char: "+newChar)
        for (j=0;j<vowels.length;j++){
            //console.log("newChar: "+newChar+" vowels[j]: "+vowels[j])
            if(newChar == vowels[j]){
                newChar = newChar.toUpperCase()
            }
        }
        newStr += newChar


    }
    console.log("new string becomes:"+newStr)
    return newStr
}

$(document).ready(function(){
    document.write("solving my first assignment")
    var mystr = "hazel"; // It should become : "IbAfm"
    var newStr = LetterChanges(mystr)
    document.write("</br>original string is"+mystr+" now the string becomes: "+ newStr)
});