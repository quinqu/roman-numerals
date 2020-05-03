

export const toRoman = function(num) {
  let roman = "";
  const decimal= [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNums = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

  

  for (let i = 0; i < decimal.length; i++) {
    while (decimal[i] <= num) {
      roman += romanNums[i];
      num -= decimal[i];
    }
  }

  return roman;
};

