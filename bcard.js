//Node module that exports a constructor for creating basic flashcards, e.g.:

// The constructor should accept two arguments: `front` and `back`.
function BasicCard(front, back) {
    // The constructed object should have a `front` property that contains the text on the front of the card.
    this.front = front;
    // The constructed object should have a `back` property that contains the text on the back of the card.
    this.back = back;
};
//     `module.exports = BasicCard;`
module.exports = BasicCard;