//Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
var brokenCloze = new ClozeCard("This doesn't work", "oops");
var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// The constructor should accept two arguments: `text` and `cloze`.
function ClozeCard(fullText, cloze) {
    //  The constructed object should have a `partial` property that contains _only_ the partial text.
    this.partial = fullText.split(cloze);
    //  The constructed object should have a `cloze` property that contains _only_ the cloze-deleted portion of the text.
    this.cloze = cloze;
    //  The constructed object should have a `fullText` property that contains _only_ the full text.
    this.fullText = fullText;

    //if (this.fullText !== (this.cloze + " " + this.partial)) {
    //    console.log("This doesn't work", "oops");
    //}
};

//  Use prototypes to attach these methods, wherever possible.
function ClozeCardPrototype() {
    if (this.fullText !== (this.cloze + " " + this.partial)) {
        console.log("This doesn't work", "oops");
    } else {
        this.clozeRemoved = function() {
            return `${this.text[0]} ... ${this.text[1]}`; //Template literal enclosed by the back-tick ` allows embedded expressions wrapped with ${}
        };
    };
}
// Constructor that creates a prototype of ClozeCard to return the question missing cloze
ClozeCard.prototype = new ClozeCardPrototype();

module.exports = ClozeCard;

// "George Washington"
console.log(firstPresidentCloze.cloze);
// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);
// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
console.log(brokenCloze.fullText);