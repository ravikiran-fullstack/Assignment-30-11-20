function startCountDown(){
  showMessage();
}
//Configure
let timeoutID;
let count = 10;

function showMessage() {
    timeoutID = setTimeout(() =>{
      document.getElementById('count').innerHTML = `Count Down Started: ${count}`;
      count--;
      if(count !== 0){
        timer(showMessage); // callback function called, which is passed as argument
      }else {
        document.getElementById('count').innerHTML = '';
        document.getElementById('info').innerHTML = 'Thank you for your patience, welcome to the page';
        clearTimer();
      }
    }
    , 1000, timer); // Callback function passed as argument to the setTimeout function
}

function timer(callback){
  console.log(callback);
  setTimeout(()=> {
      callback();
  },0, callback);
}

function clearTimer() {
    clearTimeout(timeoutID);
}