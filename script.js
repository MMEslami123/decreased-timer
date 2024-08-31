const circle = document.querySelector("circle");
const input = document.querySelector("input");
const button = document.querySelector("button");
const counter = document.querySelector("p");

button.addEventListener("click", () => {
  if (input.value == "") {
    alert("please set a timer");
  } else {
    button.classList.toggle("active");
    let timeCount = input.value;
    counter.style.display = "block";
    counter.innerHTML = timeCount;
    setInterval(() => {
      counter.innerHTML -= 1;
    }, 1000);
    circle.style.animation = `timer ${timeCount}s linear backwards`;
    input.style.display = "none";
    button.innerHTML = "Stop";
    button.addEventListener("click", stopTimer);
    function stopTimer() {
      circle.style.animationPlayState = "paused";
      location.reload();
    }
    setTimeout(reset, timeCount * 1000);
    function reset() {
      location.reload();
      setTimeout(reset, timeCount * 1000);
    }
  }
});
