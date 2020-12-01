
//Configure
let timeoutID;
let count = 10;

// Function uses recursion 
function showMessage1() {
  timeoutID = setTimeout(
    () => {
      document.getElementById("count1").innerHTML = `Count Down Started: ${count} [Using recursion]`;
      count--;
      if (count !== -1) {
        timer(showMessage1); // timer callback function called, which is passed as argument
      } else {
        document.getElementById("count1").innerHTML = "";
        document.getElementById("info1").innerHTML =  "Thank you for your patience, welcome to the page";
        clearTimer();
      }
    },1000,timer); // timer(callback) function passed as argument to the setTimeout function
}

function timer(callback) {
  console.log(callback);
  setTimeout(() => {
      callback();
    },0,callback);
}

function clearTimer() {
  clearTimeout(timeoutID);
}


//Function uses callbacks 
function showMessage2(){
  setTimeout(()=> {
    document.getElementById("count2").innerHTML = `Count Down Started: 10 [Using callbacks]`;
    setTimeout(() => {
      document.getElementById("count2").innerHTML = `Count Down Started: 9 [Using callbacks]`;
      setTimeout(()=> {
        document.getElementById("count2").innerHTML = `Count Down Started: 8  [Using callbacks]`;
        setTimeout(() => {
          document.getElementById("count2").innerHTML = `Count Down Started: 7 [Using callbacks]`;
          setTimeout(()=> {
            document.getElementById("count2").innerHTML = `Count Down Started: 6 [Using callbacks]`;
            setTimeout(() => {
              document.getElementById("count2").innerHTML = `Count Down Started: 5 [Using callbacks]`;
              setTimeout(()=> {
                document.getElementById("count2").innerHTML = `Count Down Started: 4 [Using callbacks]`;
                setTimeout(() => {
                  document.getElementById("count2").innerHTML = `Count Down Started: 3 [Using callbacks]`;
                  setTimeout(()=> {
                    document.getElementById("count2").innerHTML = `Count Down Started: 2 [Using callbacks]`;
                    setTimeout(() => {
                      document.getElementById("count2").innerHTML = `Count Down Started: 1 [Using callbacks]`;
                      setTimeout(()=> {
                        document.getElementById("count2").innerHTML = "";
                        document.getElementById("info2").innerHTML ="Thank you for your patience, welcome to the page";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

