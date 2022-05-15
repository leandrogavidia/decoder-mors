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

const DecodeMessage = (message) => {
    let separateMessage = message.trim().split("   ");
    let translatedMessage = separateMessage.map((elemento) =>
        elemento
            .split(" ")
            .map((letra) => MorseAlphabet[letra])
            .join("")
    );
    let result = translatedMessage.join(" ");
    return result;
};
  
console.log(DecodeMessage(". ... -.-. .-. .. -... .   .- .-.. --. ---"));
console.log(DecodeMessage("- .   .- -- ---"));
console.log(DecodeMessage(".. -. -.-. . -. -.. .. ---"));
console.log(DecodeMessage("... --- ..."));
console.log(DecodeMessage(".... --- .-.. .-"));

export { MorseAlphabet, DecodeMessage };