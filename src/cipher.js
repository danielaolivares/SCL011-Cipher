window.cipher = {
  encode: (message,number) => {
    /* Acá va tu código */
    let textCipher= "";
    for(let i=0;i <message.length;i++){
      let cipher= ((message.charCodeAt(i)-65+number)%26+65);
      let stringCipher=String.fromCharCode(cipher);
     textCipher+=stringCipher;
     }
     return textCipher;
  },
  decode: (message,number) => {
    /* Acá va tu código */
    let textCipher= "";
    for(let i=0;i<message.length;i++){

    let cipherTwo= ((message.charCodeAt(i)+65-number)%26+65);
    let ansCipher=String.fromCharCode(cipherTwo);
    textCipher+=ansCipher
  } return textCipher;
}
};
