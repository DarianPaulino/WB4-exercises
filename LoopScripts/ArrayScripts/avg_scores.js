

let myScores = [92, 98, 84, 76, 89, 99, 100];
 let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

 function getAverage(array){
    let Add=0
    let array2=array
    for(let count=0;count<myScores.length;count++){
        Add= Add + myScores[count]
    }
    let Average = Add/array2.length;
    return Average
 }
 console.log(getAverage(yourScores));
 console.log(getAverage(myScores));