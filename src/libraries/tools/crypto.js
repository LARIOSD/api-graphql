const cryptoJS = require('crypto-js');

module.exports = {
  encryptString: (secret, decryptedString) => {
    const ciphertext = cryptoJS.AES.encrypt(decryptedString, secret).toString();
    return ciphertext;
  },

  decryptString: (secret, encryptedString) => {
    const decryptedData = cryptoJS.AES.decrypt(encryptedString, secret).toString(cryptoJS.enc.Utf8);
    return decryptedData;
  },
};
