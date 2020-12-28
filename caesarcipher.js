function caesarCipher(string, number) {
  let regex = RegExp(/^[A-Za-z]+$/);
  let array = [];

  for (let i = 0; i < string.length; i++) {
    if (regex.test(string[i]) == true && string[i] == string[i].toUpperCase()) {
      let newNum1_26 = string.charCodeAt([i]) - 64;
      let remainder1_26 = (newNum1_26 + number) % 26;
      remainder1_26 === 0 ? remainder1_26 = 26 : remainder1_26 = remainder1_26
      let newNum = remainder1_26 + 64;
      let newString = String.fromCharCode(newNum);
      array.push(newString);
    } else if (
      regex.test(string[i]) == true &&
      string[i] == string[i].toLowerCase()
    ) {
      let newNum1_26 = string.charCodeAt([i]) - 96;
      console.log(newNum1_26)
      let remainder1_26 = (newNum1_26 + number) % 26;
      remainder1_26 === 0 ? remainder1_26 = 26 : remainder1_26 = remainder1_26
      let newNum = remainder1_26 + 96;
      console.log(remainder1_26)
      console.log(newNum)
      let newString = String.fromCharCode(newNum);
      array.push(newString);
    } else {
      array.push(string[i]);
    }
  }
  return array.join('');
}




export default caesarCipher;
