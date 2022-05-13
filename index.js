//Detecting Button Press

let numOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOfButtons; i++ ){


  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    let buttonInnerHTMl = this.innerHTML;

    makeSound(buttonInnerHTMl);

    buttonAnimation(buttonInnerHTMl);

    });
  }


//Detecting Keyboard Press

  document.addEventListener("keydown", function (event) {

        makeSound(event.key);

        buttonAnimation(event.key);

  });


    function makeSound (key){

    switch (key) {
      case "w":
        let tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play(this.innerHTML);
        break;

      case "a":
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play(this.innerHTML);
      break;

      case "s":
        let tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play(this.innerHTML);
        break;

      case "d":
        let tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play(this.innerHTML);
        break;

      case "j":
        let snare = new Audio('sounds/snare.mp3');
        snare.play(this.innerHTML);
        break;

      case "k":
        let crash = new Audio('sounds/crash.mp3');
        crash.play(this.innerHTML);
        break;

      case "l":
        let kick = new Audio('sounds/kick-bass.mp3');
        kick.play(this.innerHTML);
        break;


      default: console.log(buttonInnerHTMl)
    }
    }
    // this.style.color = "white" ;
    //


    //What to do when click detected!

    // Animation button

    function buttonAnimation (currentKey){

      let activeButton = document.querySelector ("." + currentKey);

      activeButton.classList.add("pressed");

      setTimeout(function (){
        activeButton.classList.remove("pressed");
      }, 100);
    }
