var total = prompt("Please enter Total element in array\n");
var array=[];
console.log("Enter the elements");
for(let i=0;i<total;i++){
    let num=prompt("\n");
    array.push(num);
};
for(let i=0;i<total;i++){
    for(let j=i+1;j<total;j++){
        if(array[i]<array[j]){
            let temp = array[i];
            array[i]=array[j];
            array[j]=temp;
        }
    }
}
for(let i=0;i<total;i++){
    console.log(array[i]);
}
