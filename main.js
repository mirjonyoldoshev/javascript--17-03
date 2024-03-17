//--------------------------------------uyga vazifalar----------------------------------------------------------
/**let son = parseInt(prompt("Butun sonni kiriting:"));

if (son > 0) {
  son += 1;
}

console.log("Natija:", son);
*/
//--------------------------------------2---------------------------------------------------------------------
/**let son = parseInt(prompt("Butun sonni kiriting:"));

if (son > 0) {
  son += 1;
} else if (son < 0) {
  son -= 2;
} else {
  son = 10;
}

console.log("Natija:", son);
*/
//--------------------------------------3---------------------------------------------------------------------
/**let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));
let son3 = parseInt(prompt("Uchinchi sonni kiriting:"));

let musbatSoni = 0;
let manfiySoni = 0;

if (son1 > 0) {
  musbatSoni++;
} else if (son1 < 0) {
  manfiySoni++;
}

if (son2 > 0) {
  musbatSoni++;
} else if (son2 < 0) {
  manfiySoni++;
}

if (son3 > 0) {
  musbatSoni++;
} else if (son3 < 0) {
  manfiySoni++;
}

console.log("Musbat sonlar:", musbatSoni);
console.log("Manfiy sonlar:", manfiySoni);
*/
//--------------------------------------4---------------------------------------------------------------------
/**let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));

let kattaSon;

if (son1 > son2) {
  kattaSon = son1;
} else {
  kattaSon = son2;
}

console.log("Katta son:", kattaSon);
*/
//--------------------------------------5---------------------------------------------------------------------
/**let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));

let kichikSon;

if (son1 < son2) {
  kichikSon = son1;
  console.log("kichkina son:", kichikSon);
} else {
  kichikSon = son2;
}

console.log("Kichik son:", kichikSon);
*/
//--------------------------------------6---------------------------------------------------------------------
/**let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));

let kattaSon;
let kichikSon;

if (son1 > son2) {
  kattaSon = son1;
  kichikSon = son2;
} else {
  kattaSon = son2;
  kichikSon = son1;
}

console.log("Avval katta son:", kattaSon);
console.log("Keyin kichik son:", kichikSon);
*/
//--------------------------------------7---------------------------------------------------------------------
/**let A = parseFloat(prompt("A ni kiriting:"));
let B = parseFloat(prompt("B ni kiriting:"));

if (A > B) {
  let temp = A;
  A = B;
  B = temp;
}

console.log("A =", A);
console.log("B =", B);
*/
//--------------------------------------8---------------------------------------------------------------------
/**let A = parseInt(prompt("A ni kiriting:"));
let B = parseInt(prompt("B ni kiriting:"));

if (A !== B) {
  A += B;
  B = A;
} else {
  A = 0;
  B = 0;
}

console.log("A =", A);
console.log("B =", B);
*/
//--------------------------------------9---------------------------------------------------------------------
/**let A = parseInt(prompt("A ni kiriting:"));
let B = parseInt(prompt("B ni kiriting:"));

if (A !== B) {
  if (A > B) {
    B = A;
  } else {
    A = B;
  }
} else {
  A = 0;
  B = 0;
}

console.log("A =", A);
console.log("B =", B);
*/
//--------------------------------------10---------------------------------------------------------------------
/**let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));
let son3 = parseInt(prompt("Uchinchi sonni kiriting:"));

let kichikSon = son1;

if (son2 < kichikSon) {
  kichikSon = son2;
}

if (son3 < kichikSon) {
  kichikSon = son3;
}

console.log("Kichik son:", kichikSon);
*/
//--------------------------------------11---------------------------------------------------------------------
/**let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));
let son3 = parseInt(prompt("Uchinchi sonni kiriting:"));

let ortaSon;

if ((son1 < son2 && son1 > son3) || (son1 > son2 && son1 < son3)) {
  ortaSon = son1;
} else if ((son2 < son1 && son2 > son3) || (son2 > son1 && son2 < son3)) {
  ortaSon = son2;
} else {
  ortaSon = son3;
}

console.log("O'rta son:", ortaSon);
*/
//--------------------------------------12---------------------------------------------------------------------
/**let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));
let son3 = parseInt(prompt("Uchinchi sonni kiriting:"));

let yigindi1 = son1 + son2;
let yigindi2 = son2 + son3;
let yigindi3 = son1 + son3;

if (yigindi1 >= yigindi2 && yigindi1 >= yigindi3) {
  console.log("Eng katta yig'indi:", yigindi1);
} else if (yigindi2 >= yigindi1 && yigindi2 >= yigindi3) {
  console.log("Eng katta yig'indi:", yigindi2);
} else {
  console.log("Eng katta yig'indi:", yigindi3);
}
*/
//--------------------------------------13---------------------------------------------------------------------
/**let A = parseFloat(prompt("A ni kiriting:"));
let B = parseFloat(prompt("B ni kiriting:"));
let C = parseFloat(prompt("C ni kiriting:"));

if (A <= B && B <= C) {
  // Sonlar o'sish tartibida berilgan
  console.log("A:", A);
  console.log("B:", B);
  console.log("C:", C);
} else {
  // Sonlar o'sish tartibida emas, ikkilantirish
  let temp;

  // A va B ni almashtirish
  if (A > B) {
    temp = A;
    A = B;
    B = temp;
  }

  // B va C ni almashtirish
  if (B > C) {
    temp = B;
    B = C;
    C = temp;
  }

  // A va B ni qayta tekshirish
  if (A > B) {
    temp = A;
    A = B;
    B = temp;
  }

  console.log("A:", A);
  console.log("B:", B);
  console.log("C:", C);
}
*/
//--------------------------------------14---------------------------------------------------------------------
/**let A = parseFloat(prompt("A ni kiriting:"));
let B = parseFloat(prompt("B ni kiriting:"));
let C = parseFloat(prompt("C ni kiriting:"));

if (A <= B && B <= C) {
  // Sonlar o'sish tartibida berilgan
  console.log("A:", A);
  console.log("B:", B);
  console.log("C:", C);
} else if (A >= B && B >= C) {
  // Sonlar kamayish tartibida berilgan
  console.log("A:", A);
  console.log("B:", B);
  console.log("C:", C);
} else {
  // Sonlar o'sish yoki kamayish tartibida emas, ikkilantirish
  let temp;

  // A va B ni almashtirish
  if (A > B) {
    temp = A;
    A = B;
    B = temp;
  }

  // B va C ni almashtirish
  if (B > C) {
    temp = B;
    B = C;
    C = temp;
  }

  // A va B ni qayta tekshirish
  if (A > B) {
    temp = A;
    A = B;
    B = temp;
  }

  console.log("A:", A);
  console.log("B:", B);
  console.log("C:", C);
}
*/
//--------------------------------------15---------------------------------------------------------------------
/**let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));
let son3 = parseInt(prompt("Uchinchi sonni kiriting:"));
let son4 = parseInt(prompt("To'rtinchi sonni kiriting:"));

let tartibRaqami;

if (son1 === son2 && son2 === son3) {
  tartibRaqami = 4;
} else if (son1 === son2 && son2 === son4) {
  tartibRaqami = 3;
} else if (son1 === son3 && son3 === son4) {
  tartibRaqami = 2;
} else if (son2 === son3 && son3 === son4) {
  tartibRaqami = 1;
} else {
  tartibRaqami = -1;
}

console.log("Tartib raqami:", tartibRaqami);
*/
//--------------------------------------16---------------------------------------------------------------------
/**function calculateFunction(x) {
  if (x <= 0) {
    return -x;
  } else if (x > 0 && x < 2) {
    return Math.pow(x, 2);
  } else {
    return 4;
  }
}

let x = parseFloat(prompt("x ni kiriting:"));
let result = calculateFunction(x);
console.log("Natija:", result);
*/
//--------------------------------------17---------------------------------------------------------------------
/**function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true; // Kabisa yili
  } else {
    return false; // Kabisa yili emas
  }
}

function countDaysInYear(year) {
  if (isLeapYear(year)) {
    return 366;
  } else {
    return 365;
  }
}

let year = parseInt(prompt("Yilni kiriting:"));
let dayCount = countDaysInYear(year);
console.log("Yilda", dayCount, "kun bor.");
*/
//--------------------------------------18-----------------------------------------------------------------------
/**function formatNumber(number) {
  if (number < 10) {
    return number + " - Bir xonali son";
  } else if (number < 100) {
    if (number % 2 === 0) {
      return number + " - Ikki xonali juft son";
    } else {
      return number + " - Ikki xonali toq son";
    }
  } else {
    if (number % 2 === 0) {
      return number + " - Uch xonali juft son";
    } else {
      return number + " - Uch xonali toq son";
    }
  }
}

for (var i = 1; i <= 999; i++) {
  console.log(formatNumber(i));
}
*/
//--------------------------------------case-1-----------------------------------------------------------------------
/**function getRating(score) {
  switch (score) {
    case 1:
      return "Yomon";
    case 2:
      return "Qoniqarsiz";
    case 3:
      return "Qoniqarli";
    case 4:
      return "Yahshi";
    case 5:
      return "A'lo";
    default:
      return "Xato";
  }
}

var k = parseInt(prompt("K butun sonini kiriting:"));
var rating = getRating(k);
console.log(rating);
*/
//--------------------------------------case-2-----------------------------------------------------------------------
/**function getSeason(month) {
  if ((month >= 1 && month <= 2) || month === 12) {
    return "Qish";
  } else if (month >= 3 && month <= 5) {
    return "Bahor";
  } else if (month >= 6 && month <= 8) {
    return "Yoz";
  } else if (month >= 9 && month <= 11) {
    return "Kuz";
  } else {
    return "Noto'g'ri oy raqami kiritildi.";
  }
}

var month = parseInt(prompt("Oy raqamini kiriting (1-12):"));
var season = getSeason(month);
console.log(season);
*/
//--------------------------------------case-3-----------------------------------------------------------------------
/**function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

var month = parseInt(prompt("Oy raqamini kiriting (1-12):"));
var year = new Date().getFullYear();

var daysInMonth = getDaysInMonth(month, year);
console.log("Bu oyda " + daysInMonth + " kun bor.");
*/
//--------------------------------------case-4-----------------------------------------------------------------------
/**function convertToMeters(unit, length) {
  switch (unit) {
    case 1: // desimetr
      return length / 10;
    case 2: // kilometr
      return length * 1000;
    case 3: // metr
      return length;
    case 4: // millimeter
      return length / 1000;
    case 5: // santimetr
      return length / 100;
    default:
      return "Noto'g'ri birlik kodi kiritildi.";
  }
}

var unit = parseInt(
  prompt(
    "Uzunlik birliklarini tartib raqami bilan kiriting:\n1 - desimetr\n2 - kilometr\n3 - metr\n4 - millimeter\n5 - santimetr"
  )
);
var length = parseFloat(prompt("Kesmaning uzunligini kiriting:"));

var result = convertToMeters(unit, length);
console.log("Kesmaning uzunligi " + result + " metr.");
*/
//--------------------------------------case-5-----------------------------------------------------------------------
/**function convertToKilograms(unit, weight) {
  switch (unit) {
    case 1: // kilogramm
      return weight;
    case 2: // milligramm
      return weight / 1000000;
    case 3: // gramm
      return weight / 1000;
    case 4: // tonna
      return weight * 1000;
    case 5: // sentner
      return weight * 100;
    default:
      return "Noto'g'ri birlik kodi kiritildi.";
  }
}

var unit = parseInt(
  prompt(
    "Og'irlik birliklarini tartib raqami bilan kiriting:\n1 - kilogramm\n2 - milligramm\n3 - gramm\n4 - tonna\n5 - sentner"
  )
);
var weight = parseFloat(prompt("Og'irlikni kiriting:"));

var result = convertToKilograms(unit, weight);
console.log("Og'irlik " + result + " kilogramda.");
*/
//--------------------------------------case-6-----------------------------------------------------------------------
/**function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDayCount(month, year) {
  const daysInMonth = [
    31, // Yanvar
    28, // Fevral
    31, // Mart
    30, // Aprel
    31, // May
    30, // Iyun
    31, // Iyul
    31, // Avgust
    30, // Sentabr
    31, // Oktabr
    30, // Noyabr
    31, // Dekabr
  ];

  if (month === 1) {
    month = 12;
    year--;
  } else {
    month--;
  }

  if (month === 2 && isLeapYear(year)) {
    return 29; // Kabisa yilda fevralda 29 kun bor.
  }

  return daysInMonth[month - 1]; // Oy tartib raqamidan 1 ayirmamiz, chunki massiv tartib raqamlari 0 dan boshlanadi.
}

var day = parseInt(prompt("Kunni kiriting (1 - 31):"));
var month = parseInt(prompt("Oy tartib raqamini kiriting (1 - 12):"));
var year = parseInt(prompt("Yilni kiriting:"));

var dayCount = getDayCount(month, year);
console.log("Berilgan sana " + dayCount + " kun avval joylashgan.");
*/
//--------------------------------------case-7-----------------------------------------------------------------------
/**function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getNextDay(month, day, year) {
  const daysInMonth = [
    31, // Yanvar
    28, // Fevral
    31, // Mart
    30, // Aprel
    31, // May
    30, // Iyun
    31, // Iyul
    31, // Avgust
    30, // Sentabr
    31, // Oktabr
    30, // Noyabr
    31, // Dekabr
  ];

  if (month === 2 && isLeapYear(year)) {
    daysInMonth[1] = 29; // Kabisa yilda fevral 29 kunlik bo'ladi.
  }

  if (day < daysInMonth[month - 1]) {
    return day + 1; // Keyingi kun
  } else if (month < 12) {
    return 1; // Keyingi oyning birinchi kuniga o'tish
  } else {
    return 1; // Yangi yilning birinchi kuniga o'tish
  }
}

var day = parseInt(prompt("Kunni kiriting (1 - 31):"));
var month = parseInt(prompt("Oy tartib raqamini kiriting (1 - 12):"));
var year = parseInt(prompt("Yilni kiriting:"));

var nextDay = getNextDay(month, day, year);
console.log("Berilgan sana " + nextDay + " kun keyin joylashadi.");
*/
//--------------------------------------case-8-----------------------------------------------------------------------
/**function updateDirection(currentDirection, command) {
  const directions = ["s", "j", "q", "g"];
  let index;

  if (command === 1) {
    index = (directions.indexOf(currentDirection) + 1) % 4;
  } else if (command === 2) {
    index = (directions.indexOf(currentDirection) + 3) % 4;
  } else {
    index = directions.indexOf(currentDirection);
  }

  return directions[index];
}

function main() {
  const currentDirection = prompt("Robot yo'nalishini kiriting (s/j/q/g):");
  const command = parseInt(prompt("Kamandani kiriting (0/1/2):"));

  const newDirection = updateDirection(currentDirection, command);
  console.log("Yangi holat: " + newDirection);
}

main();
*/
//--------------------------------------case-9-----------------------------------------------------------------------
/**function getCardName(value, suit) {
  const cardNames = {
    11: "valet",
    12: "dama",
    13: "qirol",
    14: "tuz",
  };

  const suitNames = {
    1: "g'isht",
    2: "olma",
    3: "chillak",
    4: "qarg'a",
  };

  const cardName =
    value.toString() in cardNames ? cardNames[value] : value.toString();
  const suitName = suitNames[suit];

  return cardName + " " + suitName;
}

function main() {
  const value = parseInt(prompt("Karta qiymatini kiriting (6-14):"));
  const suit = parseInt(prompt("Karta turini kiriting (1-4):"));

  const cardName = getCardName(value, suit);
  console.log("Karta nomi:", cardName);
}

main();
*/
//--------------------------------------case-10-----------------------------------------------------------------------
/**function getProblemName(number) {
  const problemNames = {
    10: "o`n",
    20: "yigirma",
    30: "o`ttiz",
    40: "qirq",
  };

  const tensDigit = Math.floor(number / 10) * 10;
  const onesDigit = number % 10;

  const problemName = problemNames[tensDigit];
  const onesName = onesDigit === 0 ? "" : " " + onesDigit;

  return problemName + onesName + " masala";
}

function main() {
  const number = parseInt(prompt("Butun sonni kiriting (10-40):"));

  const problemName = getProblemName(number);
  console.log("Masala nomi:", problemName);
}

main();
*/
//--------------------------------------case-11-----------------------------------------------------------------------
/** getNumberInWords(number) {
  const digitNames = {
    0: "",
    1: "bir",
    2: "ikki",
    3: "uch",
    4: "to'rt",
    5: "besh",
    6: "olti",
    7: "yetti",
    8: "sakkiz",
    9: "to'qqiz",
  };

  const tensNames = {
    0: "",
    1: "o'n",
    2: "yigirma",
    3: "o'ttiz",
    4: "qirq",
    5: "ellik",
    6: "oltmish",
    7: "yetmish",
    8: "sakson",
    9: "to'qson",
  };

  const hundredsDigit = Math.floor(number / 100);
  const tensDigit = Math.floor((number % 100) / 10);
  const onesDigit = number % 10;

  const hundredsName = digitNames[hundredsDigit] + " yuz";
  const tensName = tensNames[tensDigit];
  const onesName = digitNames[onesDigit];

  let numberInWords = hundredsName;
  if (tensDigit === 1) {
    numberInWords += " " + digitNames[tensDigit * 10 + onesDigit];
  } else {
    numberInWords += tensName !== "" ? " " + tensName : "";
    numberInWords += onesName !== "" ? " " + onesName : "";
  }

  return numberInWords;
}

function main() {
  const number = parseInt(prompt("Butun sonni kiriting (100-999):"));

  const numberInWords = getNumberInWords(number);
  console.log("Son so'zda:", numberInWords);
}

main();
*/
//--------------------------------------case-12-----------------------------------------------------------------------
/**function getYearAnimal(year) {
  const colors = ["yashil", "qizil", "sariq", "oq", "qora"];
  const animals = [
    "sichqon",
    "sigir",
    "yo'lbars",
    "quyon",
    "ajdar",
    "ilon",
    "ot",
    "qo'y",
    "maymun",
    "tovuq",
    "it",
    "to'ngizlar",
  ];

  const colorIndex = (year - 1984) % colors.length;
  const animalIndex = (year - 1984) % animals.length;

  const color = colors[colorIndex];
  const animal = animals[animalIndex];

  return color + " " + animal + " yili";
}

function main() {
  const year = parseInt(prompt("Yilni kiriting:"));

  const yearAnimal = getYearAnimal(year);
  console.log("Yilning muchali:", yearAnimal);
}

main();
*/
