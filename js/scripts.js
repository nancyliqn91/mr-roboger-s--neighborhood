// Utility Logic
function notNumber(element){
  if (!Number(element)) {
    return true;
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
  numberArray.forEach(function(element) {
    if ('3'.includes(element.toString())) {
      element = "Won't you be my neighbor?";
      neighborArray.push(element);
    }
    else if ('2'.includes(element.toString())) {
      element = "Boop!";
      neighborArray.push(element);
    }
    else if ('1'.includes(element.toString())) {
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
    return null;
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
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});