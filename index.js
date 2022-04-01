
// Creates a random value between 0 and 5 
function randomNumberGenerator(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return rand; 
}

// Shuffles the order of array 
function shuffle(arr) {
    let currentIndex = arr.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = randomNumberGenerator(arr);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}


function sadInstaQuotes() {
    const sadQuotes = ["A multitude of people, yet loneliness creep", "I’m not okay, but it’s okay", "Pretending to be happy, hoping that the saying “fake it till you make it” actualizes",
    "Clouds let rain go when they get too heavy. The same is true for humans", "Don’t cry over someone who wouldn’t cry over you", "Dear Past, stop tapping me on the shoulders, I don’t wanna look back",
    "Sometimes you laugh because you’ve got no more room for crying.", "It’s sad when someone you know becomes someone you knew", 
    "Disappointed but not surprised",  "Wish I could turn back time"]; 

    let index = randomNumberGenerator(sadQuotes); 
    shuffle(sadQuotes); 

    let output = sadQuotes[index];  
    document.getElementById("quote").innerHTML= output; 
}

function happyInstaQuotes() {
    const happyQuotes = ["Vodka may not be the answer but it’s worth a shot", "Me, myself and I", "The way to get started is to quit talking and begin doing.", "Success is a collection of problems solved",
    "Say yes to new adventures", "Be the type of person you want to meet", "Selfie in paradise", "A smile is a curve that sets everything straight", "The biggest adventure you can take is to live the life of your dreams",
    "Last name ever, first name greatest", "One of the most effective ways to cheer yourself up is to cheer someone else up", "Life is too short to be anything but happy" ];

    let index = randomNumberGenerator(happyQuotes); 
    shuffle(happyQuotes); 

    let output = happyQuotes[index];  
    document.getElementById("quote").innerHTML= output; 
}

function funnyInstaQuotes() {
    const funnyQuotes = ["My favorite exercise is a cross between a lunge and a crunch ... I call it lunch", "I need a six-month holiday, twice a year", "There are 16-year-olds competing at the Olympics and some of us (me) still push on pull doors",
    "Friday ... Our second-favorite F word", "Friends buy you lunch. Best friends eat your lunch", "First rule of Sundays: If you can’t reach it from your couch, you don’t need it", "You think nothing is impossible? Try getting me out of bed before 12 PM",
    "If you want to be sure that you never forget your wife’s birthday, just try forgetting it once", "I talk a lot, so I've learned to just tune myself out...", "I am running away from my responsibilities and it feels good", "I'm not superstitious, but I am a little stitious",
    "For my new year's resolution, I gave up drinking... during the week" ]; 

    let index = randomNumberGenerator(funnyQuotes); 
    shuffle(funnyQuotes); 

    let output = funnyQuotes[index];  
    document.getElementById("quote").innerHTML= output; 

}

function romanticInstaQuotes () {
    const romanticQuotes = ["Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me", "Home is wherever I’m with you", "You stole my heart, but I’ll let you keep it", "Life isn’t perfect, but we are", "Together is my favorite place to be",
    "Best thing that’s ever happened to me", "Thank you, Tinder", "Even when I want to kill you, I love you", "I like you even when I'm hungry", "I love you more than pizza, and that's saying a lot", "You're my end and my beginning. Even when I lose, I'm winning", "You've stolen a pizza of my heart",
    "Here's our submission for the best couple award", "You can't blame gravity for falling in love", "If I had a flower every time I thought of you, I could walk in my garden forever", "Thanks for being so good at killing spiders", "In my totally unbiased opinion, we’re the cutest couple ever", 
    "It all started with Netflix and Chill", "Hey, we clean up pretty well!"]; 

    let index = randomNumberGenerator(romanticQuotes); 
    shuffle(romanticQuotes); 
    
    let output = romanticQuotes[index];  
    document.getElementById("quote").innerHTML= output; 
}

function outputQuote() {
    let a = document.getElementById("text_a").value;
    
    if (a == "happy") {
        happyInstaQuotes(); 
    }else if(a === "sad") {
        sadInstaQuotes(); 
    }else if (a === "love") {
        romanticInstaQuotes(); 
    }else if (a === "funny") {
        funnyInstaQuotes(); 
    }
}

