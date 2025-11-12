let number1 = 10;
console.log(
  "რიცხვი:" + number1 + ", აყვანილი იქნა კვადრატში (" + (number1 ^ 2) + ")"
);

if ((number1 ^ 2) > 100) {
  console.log((number1 ^ 2) + " არის 100-ზე მეტი");
} else if ((number1 ^ 2) < 100) {
  console.log((number1 ^ 2) + " არის 100-ზე ნაკლები");
} else {
  console.log((number1 ^ 2) + " უდრის 100-ს");
}

let number2 = 55;

if (number2 < 100 && number2 > 50) {
  console.log(number2 + " არის ნაკლები 100-ზე და ასევე მეტია 50-ზე");
} else {
  console.log(number2 + " არ შეესაბამება კრიტერიუმებს");
}

let number3 = 4;

if (Math.sign(number3) == 1) {
  console.log(number3 + " არის 0-ზე მეტი");
} else if (Math.sign(number3) == -1) {
  console.log(number3 + " არის 0-ზე ნაკლები");
} else {
  console.log("რიცხვი ნულია");
}

let numberX = 30;
let numberY = 15;

let p = numberX * 2 + numberY * 2;

console.log("სიმაღლე - " + numberY);
console.log("სიგანე - " + numberX);
console.log("პერიმეტრი - " + p);

if (p > 50) {
  console.log(p + " მეტია 50-ზე");
} else if (p < 50) {
  console.log(p + " ნაკლებია 50-ზე");
} else {
  console.log(p + " უდრის 50-ს");
}
