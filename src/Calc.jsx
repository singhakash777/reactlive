
function add (a,b){
let sum = a+b;
return sum;
}

function subs(a,b){
let sub = a-b;
return sub;
}

function multiply(a,b){
    let multiply = a*b;
    return multiply;
}  

function Calc(){
    return(
        <>
        <ol>
           <li>Addition of  Number is {add(2,5)}</li> 
           <li>Subsctration of number is  {subs(5,2)}</li> 
           <li>Multiply of number is  {multiply(5,5)}</li> 
        </ol>
        
        </>
    );

}

export default Calc;


