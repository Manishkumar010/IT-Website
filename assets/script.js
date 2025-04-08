
let header = document.querySelector(".mobileheader")
let opennav = document.querySelector(".openNav")
let closenav = document.querySelector(".closeNav")

opennav.addEventListener("click",function(){
    header.classList.add("activeNav")
})
closenav.addEventListener("click",function(){
    header.classList.remove("activeNav")
})


function startCounter() {
    let count = 0;
    const maxCount = 15;
    const counterElement = document.getElementById("counter");
    const interval = setInterval(() => {
        if (count < maxCount) {
            count++;
            counterElement.textContent = count;
        } else {
            clearInterval(interval);
        }
    },100);
}

function startCounter2() {
    let count = 0;
    const maxCount = 500;
    const counterElement = document.getElementById("counter2");
    const interval = setInterval(() => {
        if (count < maxCount) {
            count++;
            counterElement.textContent = count;
        } else {
            clearInterval(interval);
        }
    }, 10);
}

function startCounter3() {
    let count = 0;
    const maxCount = 128;
    const counterElement = document.getElementById("counter3");
    const interval = setInterval(() => {
        if (count < maxCount) {
            count++;
            counterElement.textContent = count;
        } else {
            clearInterval(interval);
        }
    }, 20);
}

function startCounter4() {
    let count = 0;
    const maxCount = 20;
    const counterElement = document.getElementById("counter4");
    const interval = setInterval(() => {
        if (count < maxCount) {
            count++;
            counterElement.textContent = count;
        } else {
            clearInterval(interval);
        }
    }, 100);
}

let hasExecuted = false;
function executeOnceAtPosition() {
  const targetPosition = 700;

  window.addEventListener("scroll", () => {
    if (!hasExecuted && window.scrollY >= targetPosition) {
      hasExecuted = true;
      startCounter();
      startCounter2();
      startCounter3();
      startCounter4();
    }
  });
}

executeOnceAtPosition();
