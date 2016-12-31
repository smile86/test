function forFunc(){
  for(i=1; i<=10; i++){
    if(i%2 === 0 && i%3 === 0){
      console.log(i + "는 2와 3의 배수");
    }else if(i%2 === 0){
      console.log(i + "는 2의 배수");
    }else if(i%3 === 0){
      console.log(i + "는 3의 배수");
    }else{
      console.log(i + "는 2나 3의 배수가 아님");
    }
  }
}

forFunc();
