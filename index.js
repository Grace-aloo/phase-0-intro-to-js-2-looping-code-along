// Code your solutions in this file
 function writeCards(names, eventName){
    let newArr = [];
    for(let i = 0;i < names.length; i++){
      newArr.push (`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        }
    return newArr;
 }
 writeCards(['Guadalupe','Ollie','Aki'],"surprise");
 function countDown(){
    let countDown =10
    while( countDown >= 0 ){
        console.log(countDown--)
    }
 }