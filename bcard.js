//Node module that exports a constructor for creating basic flashcards, e.g.:
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// The constructor should accept two arguments: `front` and `back`.
function BasicCard(front, back) {
    // The constructed object should have a `front` property that contains the text on the front of the card.
    this.front = front;
    //console.log(this.front);
    // The constructed object should have a `back` property that contains the text on the back of the card.
    this.back = back;
    //console.log(this.back);
};

// "Who was the first president of the United States?"
console.log(firstPresident.front);
// "George Washington"
console.log(firstPresident.back);
//module.exports = BasicCard;
`module.exports = BasicCard;`