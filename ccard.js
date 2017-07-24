//Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
// The constructor should accept two arguments: `text` and `cloze`.
function ClozeCard(text, cloze) {
    //  The constructed object should have a `cloze` property that contains _only_ the cloze-deleted portion of the text.
    this.text = text.split(cloze);
    this.cloze = cloze;

};
//  The constructed object should have a `partial` property that contains _only_ the partial text.

//  The constructed object should have a `fullText` property that contains _only_ the full text.

// The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.

//  Use prototypes to attach these methods, wherever possible.

function ClozeCardPrototype() {

    this.clozeRemoved = function() {
        return `${this.text[0]} ... ${this.text[1]}`; //Template literal enclosed by the back-tick ` allows embedded expressions wrapped with ${}
    };
};
// Constructor that creates a prototype of ClozeCard to return the question missing cloze
ClozeCard.prototype = new ClozeCardPrototype();
//     `module.exports = ClozeCard;`
module.exports = ClozeCard;