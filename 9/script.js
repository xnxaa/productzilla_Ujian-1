const Prima = (angka) => {
  let pembagi = 0;
  for(let i=1; i <= angka; i++){
    if(angka%i == 0){
      pembagi++
    }
  }
  if(pembagi == 2){
    console.log("Bilangan", Prima," adalah bilangan prima.")
  }else{
    console.log("Bilangan", Prima," bukan bilangan prima.")
  }
}

Prima(2);
Prima(65);
Prima(10);

