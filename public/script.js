const handOption = document.querySelectorAll(".hand-option");
let comImages = document.querySelectorAll(".com img");
let result = document.querySelector(".result ")

// hide the VS text
function change(){
  document.querySelector(".vs").style.display = "none"
}

// console.log(result);
// let result = document.querySelector("score")

handOption.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    handOption.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });
    
    // get source of the image
    let imageSrc = e.target.src;

    // generate random numbers
    let randomNumber = Math.floor(Math.random() * 3);

    // create an array of CPU image options

    // assign a letter value to the CPU option (R for rock, P for paper, S for scissor)
    let cpuValue = ["R", "P", "S"][randomNumber];
    comImages.forEach((comImage, index2) => {
      if (index2 == randomNumber) {
        comImage.classList.add("active");
      } else {
        comImage.classList.remove("active");
      }
    });

    // assign a letter value to the clicked option (based on index)
    let userValue = ["R", "P", "S"][index];
    // console.log(userValue, cpuValue);

    // create object with all possible outcomes
    let outcomes = {
      RR: "DRAW",
      RP: "COM",
      RS: "PLAYER 1",
      PP: "DRAW",
      PR: "PLAYER 1",
      PS: "COM",
      SS: "DRAW",
      SR: "COM",
      SP: "PLAYER 1",
    };

    // lookup the outcome value based on user and CPU opstions
    let outComeValue = outcomes[userValue + cpuValue];
    console.log(outComeValue);

    // display the resul t
    result.textContent = userValue === cpuValue ? "DRAW" : `${outComeValue} WIN`

    

  });
});
