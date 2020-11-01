const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  encrypt(message, key) {
    if (!(message && key)) throw new Error1;

    const trimedMessage = message.replace(/\s/g, '');
    let keyMessage = '';
    let j = 0;
    let result = '';
    const startA = 'A'.charCodeAt();

    for (i = 0; i < trimedMessage.length; i++) {
      if (j >= key.length) j = 0;
      keyMessage += key[j];
      j++;
    }

    for (i = 0; i < trimedMessage.length; i++) {
      let mi = trimedMessage[i].toUpperCase().charCodeAt(0);
      let ki = keyMessage[i].toUpperCase().charCodeAt(0);
      if (mi < startA || mi > 'Z'.charCodeAt()) {
        result += String.fromCharCode(mi);
        continue;
      }
      const dmi = mi - startA;
      if (ki + dmi > 'Z'.charCodeAt(0)) {
        result += String.fromCharCode(ki + dmi - 26);
      } else result += String.fromCharCode(ki + dmi);
    }

    j = 0;
    for (i = 0; i < message.length; i++) {
      if (message[i] === ' ') {
        result = result.slice(0, i) + ' ' + result.slice(i);
      }
    }

    if (!this.type) return result.split('').reverse().join('');

    return result;
  }
  decrypt(encryptedMessage, key) {
   if (!(encryptedMessage && key)) throw new Error2;

    const trimedMessage = encryptedMessage.replace(/\s/g, '');
    let keyMessage = '';
    let j = 0;
    let result = '';
    const startA = 'A'.charCodeAt();

    for (i = 0; i < trimedMessage.length; i++) {
      if (j >= key.length) j = 0;
      keyMessage += key[j];
      j++;
    }

    for (i = 0; i < trimedMessage.length; i++) {
      let mi = trimedMessage[i].toUpperCase().charCodeAt(0);
      let ki = keyMessage[i].toUpperCase().charCodeAt(0);

      if (mi < startA || mi > 'Z'.charCodeAt()) {
        result += String.fromCharCode(mi);
        continue;
      }

      const dki = ki - startA;
      if (mi - dki < startA) {
        result += String.fromCharCode(mi - dki + 26);
      } else result += String.fromCharCode(mi - dki);
    }

    j = 0;
    for (i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i] === ' ') {
        result = result.slice(0, i) + ' ' + result.slice(i);
      }
    }
    if (!this.type) return result.split('').reverse().join('');

    return result;
  }
}

module.exports = VigenereCipheringMachine;
