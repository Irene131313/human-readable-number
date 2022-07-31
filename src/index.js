const digitsA = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const digitsB = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
module.exports = function toReadable (number) {
  if (number < 20) return digitsA[number];
  if (number >= 20 && number < 100) return number % 10 !== 0 ? digitsB[(Math.floor(number / 10)) - 2] + " " + digitsA[(number % 10)] : digitsB[(Math.floor(number / 10)) - 2];
  if (number >= 100 && number < 1000) return number % 100 === 0 ? "" + digitsA[Math.floor(number/ 100)] + ' hundred' :((number % 100) / 10 >=1 && (number % 100) / 10 < 2) ? digitsA[Math.floor(number/ 100)] + ' hundred ' + digitsA[number % 100] :  ((number % 100) / 10 < 1) ? digitsA[Math.floor(number/ 100)] + ' hundred ' + digitsA[number % 100] : ("" + digitsA[Math.floor(number/ 100)] + ' hundred ' + digitsB[Math.floor((number % 100) / 10) - 2]) + (number % 10 === 0? "" :" " + digitsA[(number % 10)]);
};
