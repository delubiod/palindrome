Phrase object (with palindrome detector)
This is a sample NPM module created in Learn Enough JavaScript to Be Dangerous by Michael Hartl.

The module can be used as follows:

$ npm install --global mhartl-palindrome </br>
$ vim test.js </br>
let Phrase = require("mhartl-palindrome");</br>
let napoleonsLament = new Phrase("Able was I, ere I saw Elba."); </br>
console.log(napoleonsLament.palindrome());</br>
$ node test.js</br>
true
