(function () {
  const wheel = document.querySelector(".wheel");
  const startButton = document.querySelector(".button");
  let deg = 0;

  startButton.addEventListener("click", () => {
    startButton.style.pointerEvents = "none";
    startButton.style.opacity = 0.5; 

    deg = Math.floor(5000 + Math.random() * 5000);

    wheel.style.transition = "all 10s ease-out";


    wheel.style.transform = `rotate(${deg}deg)`;
    
  });

  wheel.addEventListener("transitionend", () => {
    
    startButton.style.pointerEvents = "auto";


    startButton.style.opacity = 1;


    wheel.style.transition = "none";

    const actualDeg = deg % 360;

    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();
