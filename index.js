module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
  let String = new RegExp(/^\s+$|^$/gi);
  String.slice(-1);
}

// Defines a Phrase object. CONTENT PROPERTY
function Phrase(content) {
  this.content = content;


  // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
      // return this.content.toLowerCase();
      return this.content.toLowerCase();
    }

    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
      return this.processedContent() === this.processedContent().reverse();
    }
  }
