const MorseAlphabet = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "--.--": "Ñ",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
  
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
  
    ".-.-.-": ".",
    "--..--": ",",
    "..-.-": "¿",
    "..--..": "?",
    "--...-": "¡",
    "-.-.--": "!",
    "---...": ":",
    "-.-.-.": ";",
    ".-..-.": "'",
    ".----.": "´",
    "-...-": "=",
    "-..-.": "/",
    "-.--.": "(",
    "-.--.-": ")",
    ".-...": "&",
    ".-.-.": "+",
    "-....-": "-",
    "..--.-": "_",
    "...-..-": "$",
    ".--.-.": "@",
};

const MorseAlphabetKeys = Object.keys(MorseAlphabet);
const MorseAlphabetValues = Object.values(MorseAlphabet);

const MorseAlphabetLetters = MorseAlphabetValues.join("").replace(/[^a-z]/gi, "").split("");
const MorseAlphabetNumbers = MorseAlphabetValues.join("").replace(/[^0-9]/gi, "").split("");
const MorseAlphabetSymbols = MorseAlphabetValues.join("").replace(/[a-z0-9]/gi, "").split("");

const DecodeMessage = (message) => {
    let separateMessage = message.trim().split("   ");
    let translatedMessage = separateMessage.map((elemento) => elemento.split(" ").map((letra) => MorseAlphabet[letra]).join(""));
    let result = translatedMessage.join(" ");

    return result;
};


const findMorseValue = (value) => {
    const valueIndex = MorseAlphabetValues.indexOf(value);

    return MorseAlphabetKeys[valueIndex];
};


const encryptMessage = (message) => {
    const separateMessage = message.trim().split(" ");
    const encryptLetters = separateMessage.map(group => group.split("").map(letter => findMorseValue(letter)).join(" "));
    const result = encryptLetters.join("   ");

    return result;
};

export { 
    MorseAlphabet,
    MorseAlphabetValues,
    MorseAlphabetLetters,
    MorseAlphabetNumbers,
    MorseAlphabetSymbols,
    DecodeMessage,
    findMorseValue,
    encryptMessage };