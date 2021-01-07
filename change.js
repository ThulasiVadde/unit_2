var name="Early Monday     morning   MUSIC"
function main(name){
    return   changetocamel(name)+"\n"+changetosnakecase(name)+"\n"+changetoHypencase(name)

}
console.log(main(name))

//....CamelCase......
function changetocamel(name){
    var words=findwords(name)
    var countthewords= changetowords(words)
    var firstcap=changetofirstcap(countthewords)
    var jointhewords=joinwords(firstcap,"")
    return jointhewords
}
//.....SnakeCase.......
function changetosnakecase(name){
    var words=findwords(name)
    var countthewords= changetowords(words)
    var jointhewords=joinwords(countthewords,"_")
    return jointhewords
}
//.......HypenCase........
function changetoHypencase(name){
    var words=findwords(name)
    var countthewords= changetowords(words)
    var jointhewords=joinwords(countthewords,"-")
    return jointhewords
}
//.......findwords........
function findwords(name){
   var count=""
   var arr=[]
   for(var i=0;i<=name.length;i++)
    {
       
      if((name[i]!==" ")&& (i!==name.length))
      {
       count += name[i]
      } 
      else {
        if(count!=="")
        {
         arr.push(count)
        }
         count=""
        }
    }       
   return arr
}


//.....chanewords......

function changetowords(words){
    var arr=[]
    for(var i=0;i<words.length;i++){
        var currentStr=words[i]
        currentStr=myToLowerCase(currentStr)
        arr.push(currentStr)
    }
    return arr
}

function myToLowerCase(input){
    var arr=""
    var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowercase="abcdefghijklmnopqrstuvwxyz"
    for(var i=0;i<input.length;i++){
    var currentLetter=input[i]
        if(myIndexOf(uppercase,currentLetter)!==-1)
        {
            var idx =myIndexOf(uppercase,currentLetter)
            arr += lowercase[idx]
        }
        else {
            arr += currentLetter
        }
    } return arr
}

function myIndexOf(str,requiredChar)
{
    var idx=-1;
    for(var i=0;i<str.length;i++)
    {
        if(str[i]===requiredChar){
            idx=i;
            break;
        }
    }
    return idx
}

 
//....changetofirstcapitalletter.......
 function changetofirstcap(words){
     var arr=[]
     for(var i=0;i<words.length;i++)
     {
         var currentWord=words[i]
         if(i===0){
             arr.push(currentWord)
          } else{
             currentWord=myCapitalize(currentWord)
             arr.push(currentWord)
          }
     }
     return arr
}

function myCapitalize(words)
{
    var arr=""
    for(var i=0;i<words.length;i++)
     {
       var currentLetter=words[i]
       if(i == 0){
          currentLetter = myToUpperCase(currentLetter)
          arr += currentLetter
         } else{
            arr += currentLetter
         }
     } return arr
}
function myToUpperCase(words){
    var arr=""
    var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowercase="abcdefghijklmnopqrstuvwxyz"
    for(var i=0;i<words.length;i++){
    var currentLetter=words[i]
        if(myIndexOf(lowercase,currentLetter)!==-1)
        {
            var idx =myIndexOf(lowercase,currentLetter)
            arr += uppercase[idx]
        }
        else {
            arr += currentLetter
        }
    } return arr
}
//.....joinwords.....
 function joinwords(words,joiningchar)
 {
     var count=""
    for(var i=0;i<words.length;i++)
    {
        var currentStr = words[i]
        if(i=== words.length-1){
            count+=currentStr
        } else{
            count += currentStr+joiningchar
        }
        
    } return count
 }

 