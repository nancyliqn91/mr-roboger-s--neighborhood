// Utility Logic

function notNumber(element){
  if(element === 0){
    return false;
  }
  else {
    return (!Number(element));
  }  
}

// Business Logic

function beepBoop(number) {
  let numberArray = [];
  for (let i = 0; i <= number; i += 1) {
    numberArray.push(i);
  }
  return numberArray.reverse();
}

function getNeighbor(number){
  const numberArray = beepBoop(number);
  let neighborArray = [];
  const name = document.getElementById("inputName").value;
  numberArray.forEach(function(element) {
    if ((element.toString()).includes('3')) {
      element = "Won't you be my neighbor " + name + "?";
      neighborArray.push(element);
    }
    else if ((element.toString()).includes('2')) {
      element = "Boop!";
      neighborArray.push(element);
    }
    else if ((element.toString()).includes('1')) {
      element = "Beep!";
      neighborArray.push(element);
    }
    else {
      neighborArray.push(element);
    }
  });
  return neighborArray;
}

// UI Logic

function boldPassage(number) {
  if (notNumber(number)) {
    return false;
  }
  const p = document.createElement("p");
  const textArray = getNeighbor(number);
  textArray.forEach(function(element, index) {
    if (notNumber(element)) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function handleFormSubmission() {
  event.preventDefault();
  const number = parseInt(document.getElementById("text-number").value);
  let boldedPassage = boldPassage(number);

  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = 'Please type a number';
  }
}

window.addEventListener("load", function() {
  const resetBtn = document.getElementById("reset");
  document.querySelector("form#count-neighbor").addEventListener("submit", handleFormSubmission);
  // for reset value to null
  resetBtn.addEventListener("click", function() {
    document.getElementById("text-number").value = null;
    document.querySelector("div#bolded-passage").innerText = null;
  });
});