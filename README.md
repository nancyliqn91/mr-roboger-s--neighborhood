# Mr. Roboger's Neighborhood

#### By _Qian Li_ 😊

#### This is my third project which demonstrate uses of arrays and looping, event handler properties and event listeners, and CSS. 

## Technologies Used

* HTML
* CSS
* JavaScript
* VS code

## Description

It will serve as a web application that takes a number from the user and returns a list of values from 0 to the user's inputted number with the substitutions made within the returned list.For example, for numbers that contain a 1, all digits are replaced with "Beep!".

## Setup/Installation Requirements

* Clone the project from Github to the local desktop.
* Open the project folder(mr-roboger-s--neighborhood).
* Open the index.html on the Chrome broswer.

## Tests
```
Describe: notNumber()

  Test: "It should return false if 0 has been passed in."
  Code:
  notNumber(0);
  Expected Output: false

  Test: "It should return true if not a number,for example 'a' has been passed in."
  Code:
  notNumber('a');
  Expected Output: true

Describe: beepBoop()

  test: "It should return an array of numbers from 0 to the user's inputted number."
  Code:
  beepBoop(5);
  Expected Output: [0, 1, 2, 3, 4, 5]

Describe: getNeighbor()

  Test: "It should return substitutions below if a name and a number contains 3 has been passed in."
  Code:
  getNeighbor(3,'name');
  Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor name?"]

  Test: "It should return substitutions below if a name and a number contains 2 has been passed in."
  Code:
  getNeighbor(2,'name');
  Expected Output: [0, 'Beep!', 'Boop!']

  Test: "It should return substitutions below if a name and a number contains 1 has been passed in."
  Code:
  getNeighbor(1,'name');
  Expected Output: [0, 'Beep!']

  Test: "It should return 0 if 0 has been passed in."
  Code:
  getNeighbor(0, 'name');
  Expected Output: [0]

```

## Known Bugs

No bugs 

## License
[MIT](license.txt)
Copyright (c) 2023 Qian Li