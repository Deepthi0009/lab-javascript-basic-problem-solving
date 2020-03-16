// Important Note - No Built-in functions to be used
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 



// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.


var ProGrad = "Shravya";
 console.log("The Driver's name is "+ProGrad);
 var ProGrad1="Deepthi";
 console.log("The Navigator's name is "+ProGrad1);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var x1=ProGrad.length;
var x2=ProGrad1.length;
 if(x1>x2) 
   {
     console.log("The Driver has the longest name, it has "+x1+ " characters");
   }
  else if(x2>x1)
 {
     console.log("The Navigator has the longest name , it has " +x2+ " characters");
 }
 else{
     console.log("Both have equally long names,have " +x1+ " characters");
 } 

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels

// var vowels="aeiou";
// var i;
var count=0;
for(i=0;i<x2;i++)
{
 if(ProGrad1[i]=="a"|| ProGrad1[i]=="e" || ProGrad1[i]=="i" || ProGrad1[i]=="o" || ProGrad1[i]=="u"||
      ProGrad1[i]=="A" || ProGrad1[i]=="E" || ProGrad1[i]=="I" || ProGrad1[i]=="O" || ProGrad1[i]=="U")
    { 
     // console.log(i);
      count++;
    
      
    }

    else{
    console.log("no vowels");
     }
}


// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters


 
console.log(ProGrad1)
console.log(count);
var x= "FaCiAnS";
var count1=0;
var count2=0;
for(i=0;i<=x.length-1;i++)
{
    if(x[i].toUpperCase()==x[i])
    {
    count1++;
   console.log("upper case is "+x[i]);
    }
    else
    {
    count2++;
    console.log("lower case is "+x[i]);
    }
}

//progressin 3.1
// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"


var s= "FacePrep";
var i=0;
var a=[];
for(i=0;i<=s.length-1;i++)
{
 a[i]=s[i].toUpperCase()+"";
}
console.log(a)

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"


function reverseString(str)
{
  return str.split("").reverse().join();

}
reverseString(s);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?


