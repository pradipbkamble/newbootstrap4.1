const cl= console.log;



 let Stre ="i love javascript";


//const revstr=givens =>givens.split(" ").reverse(" ").join(" ");
//cl(revstr(Str))

//let result='';
//for (let i = 0; i<Stre.length; i++){

  //  result= Stre[i]+result;
//}
//cl(result)

//for(let kay in object )
//for(let i in Stre){//cl(i)
  //  cl(Stre[i])
//}
const revstr
=(Stre)=>{
let result ='';
for(let i of Stre){
    cl(i)   //here i is a itreator
    result= i + result;  
}
    return result;
}
