const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
let c=0;
let prime="";
for(let i=0;i<numbers.length;i++){
    c=0;
    for(let j=1;j<=numbers[i];j++){
        if(numbers[i]%j==0){
            c++;
        }
    }
    if(c==2){
      prime=prime+numbers[i]+" ";
    }
}  
console.log(prime);
