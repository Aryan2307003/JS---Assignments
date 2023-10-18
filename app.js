// // Assignment 1 | COMP1073 Client-Side JavaScript

// /* Variables
// -------------------------------------------------- */

// Constants for main button query selectors
const studentIdButton = document.getElementById("studentId");
const noun1Button = document.getElementById("noun");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("thing");
const settingButton = document.getElementById("place");

// Constants for p tag to display query selectors
const myIdDisplay = document.getElementById("myId");
const choosenNoun1Display = document.getElementById("choosenNoun1");
const choosenVerbDisplay = document.getElementById("choosenVerb");
const choosenAdjectiveDisplay = document.getElementById("choosenAdjective");
const choosenNoun2Display = document.getElementById("choosenThing");
const choosenSettingDisplay = document.getElementById("choosenPlace");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyDisplay = document.getElementById("story");

// Variables for pre-defined arrays
var nouns = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var things = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
var stdId = 200542630;
var nounCount = 0;
var verbCount = 0;
var adjectiveCount = 0;
var thingCount = 0;
var placeCount = 0;

// Function to display student ID when the button is clicked
function IdButton_on_click() {
    const showId = stdId;
    myIdDisplay.textContent = showId;
}

// Function for noun button click
function noun_on_click() {
    // Get the current noun from the array based on the nounCount
    const currentNoun = nouns[nounCount];
    choosenNoun1Display.textContent = currentNoun;
    nounCount = (nounCount + 1) % nouns.length; // Increment the count and loop back to 0 when it reaches the end of the array.
}

// Function for verb button click
function verb_on_click() {
    // Get the current verb from the array based on the verbCount
    const currentVerb = verbs[verbCount];
    choosenVerbDisplay.textContent = currentVerb;
    verbCount = (verbCount + 1) % verbs.length;
}

// Function for adjective button click
function adjective_on_click() {
    // Get the current adjective from the array based on the adjectiveCount
    const currentAdjective = adjectives[adjectiveCount];
    choosenAdjectiveDisplay.textContent = currentAdjective;
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

// Function for thing button click
function thing_on_click() {
    // Get the current thing from the array based on the thingCount
    const currentThing = things[thingCount];
    choosenNoun2Display.textContent = currentThing;
    thingCount = (thingCount + 1) % things.length;
}

// Function for place button click
function place_on_click() {
    // Get the current place from the array based on the placeCount
    const currentPlace = places[placeCount];
    choosenSettingDisplay.textContent = currentPlace;
    placeCount = (placeCount + 1) % places.length;
}

// Function for playback button click
function playback_on_click() {
    // Create a story based on the selected elements
    const story = `Once upon a time, ${choosenNoun1Display.textContent} ${choosenVerbDisplay.textContent} ${choosenAdjectiveDisplay.textContent} ${choosenNoun2Display.textContent} ${choosenSettingDisplay.textContent}.`;
    storyDisplay.textContent = story;
}

// Function for random button click
function random_on_click() {
    // Generate random elements from the arrays
    const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomThing = things[Math.floor(Math.random() * things.length)];
    const randomPlace = places[Math.floor(Math.random() * places.length)];

    // Display the random elements
    choosenNoun1Display.textContent = randomNoun1;
    choosenVerbDisplay.textContent = randomVerb;
    choosenAdjectiveDisplay.textContent = randomAdjective;
    choosenNoun2Display.textContent = randomThing;
    choosenSettingDisplay.textContent = randomPlace;

    // Create and display a story with the random elements
    const story = `Once upon a time, ${randomNoun1} ${randomVerb} ${randomAdjective} ${randomThing} ${randomPlace}.`;
    storyDisplay.textContent = story;
}

// Function for speaking the selected text
function speakNow(string) {
    // Use the Web Speech API to speak the provided string
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

// Event Listeners for various button clicks
studentIdButton.addEventListener("click", IdButton_on_click);
noun1Button.addEventListener("click", noun_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", thing_on_click);
settingButton.addEventListener("click", place_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);

// Add event listeners to speaking buttons for speaking the selected elements
document.getElementById("speakStudentId").addEventListener("click", function() {
    speakNow(stdId.toString());
});
document.getElementById("speakNoun1").addEventListener("click", function() {
    speakNow(choosenNoun1Display.textContent);
});
document.getElementById("speakVerb").addEventListener("click", function() {
    speakNow(choosenVerbDisplay.textContent);
});
document.getElementById("speakAdjective").addEventListener("click", function() {
    speakNow(choosenAdjectiveDisplay.textContent);
});
document.getElementById("speakThing").addEventListener("click", function() {
    speakNow(choosenNoun2Display.textContent);
});
document.getElementById("speakPlace").addEventListener("click", function() {
    speakNow(choosenSettingDisplay.textContent);
});
document.getElementById("speakStory").addEventListener("click", function() {
    speakNow(storyDisplay.textContent);
});

