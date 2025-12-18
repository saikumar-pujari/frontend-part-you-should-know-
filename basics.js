/// Yo buddy, if you're feeling dumb rn looking at this code - same bro, same 
// We're all just pretending we know what we're doing, fake it till you make it fr
// The stuff with // are comments - basically me talking to myself (and you)
// Use your brain while reading (I know it's hard, mine's on airplane mode too)
// If you want everything handed to you on a silver platter, wrong place buddy!
// This series hits different when you actually TRY - no cap, just vibes and suffering 
// Still here? Aight bet, respect. Let's get into it 
// And if you succesfully completed this, then touch some grass!!

// ============================================
// 🎯 VARIABLES - The Squad Introduction
// ============================================


// const - that friend who never changes their opinion (stubborn but loyal)
const bruhMoment = 10;
// let - your mood every 5 minutes (flexible queen)
let vibeCheck = 'based';
// var - your parents' flip phone (still works but why tho?)
var oldSchool = 'boomer energy';

console.log(bruhMoment, oldSchool + vibeCheck);

// undefined be like "I'm here but also not?? idk man I'm going through something 💀"
let existentialCrisis;
console.log(existentialCrisis); // literally me at 3am

// ============================================
// 🤔 NULL VS UNDEFINED - The Identity Crisis
// ============================================
// POV: You're trying to explain your feelings to someone
// null = "I chose violence and emptiness"
// undefined = "Bro I literally forgor 💀"
console.log(typeof oldSchool);    // string - giving text energy
console.log(typeof null);         // object - JS was drunk coding this fr fr
console.log(typeof undefined);    // undefined - at least ONE thing makes sense

// ============================================
// 🔄 TYPE CONVERSION - Glow Up Szn
// ============================================

let stringGlowUp = String(bruhMoment);
console.log(typeof stringGlowUp); // number said "I'm a bad b*tch now" 💅

// ============================================
// ⚖️ COMPARISON OPERATORS - The Drama™
// ============================================
// When you're checking if your crush likes you back:
console.log(null > 0);   // false - null is so confusing buddy

console.log(null == 0);  // false - they're not even dating
console.log(null >= 0);  // true - JS EXPLAIN YOURSELF RIGHT NOW 😭

// == vs === (the "are we dating or nah" debate)
console.log(0 === 0);      // true - match made in heaven
console.log("0" == 0);     // true - == has zero standards (literally)
console.log("0" === 0);    // false - === said "I want COMMITMENT"

// ============================================
// 🔮 SYMBOLS - The Mysterious Ones
// ============================================

const myVibe = Symbol('123');
const yourVibe = Symbol('123');
console.log(myVibe === yourVibe); // false - we're not the same bro 💀

// ============================================
// 📝 STRINGS - Text Messages From JS
// ============================================

const username = "xX_DragonSlayer420_Xx  ";

// String is an array in disguise (plot twist szn 🤯)
console.log(username[0]); // 'x' - first character said hi

// String methods - the self-care routine
console.log(username.toUpperCase()); // SCREAMING INTO THE VOID
console.log(username.charAt(2));     // stalking individual characters
console.log(username.indexOf('D'));  // where my D at? (the letter bro, relax)
console.log(username.trim());        // removing that crusty whitespace
console.log(username.replaceAll('X', '💀')); // emotional damage

// Template literals - texting with personality
console.log(`Username is ${username} and it's lowkey cringe ngl`); // say it with your chest

// ============================================
// 🎲 MATH.RANDOM - The Chaos Generator
// ============================================

console.log(Math.floor(Math.random() * 10 + 1)); // life be like: random bullsh*t GO

// ============================================
// 📅 DATES - Time is Fake But Here We Are
// ============================================

const todayDate = new Date();
console.log(todayDate.toString());       // here's your existential crisis in text form
console.log(todayDate.toDateString());   // date but make it chill
console.log(todayDate.toLocaleString()); // date in your timezone's accent

let randomDate = new Date(2023, 0, 23); // Jan 23, 2023 (months start at 0 because JS hates us)
console.log(randomDate.toString());

let timeStamp = Date.now();
console.log(Math.floor(timeStamp / 1000)); // seconds since 1970 (prehistoric era)

// ============================================
// 📦 ARRAYS - The Group Chat
// ============================================
// Your friend group but make it data structure
const squad = [1, 2, 3, 4, 5, 6, 7, 9, 10];
console.log(typeof squad); // object - arrays are objects wearing a disguise, dont @ me

// Array methods - managing your friend group
squad.push(11);    // new member joined the chat
squad.pop();       // someone left (good riddance)
squad.unshift(0);  // that one friend who always shows up first
squad.shift();     // kicked them out immediately (toxic vibes)

console.log(squad.includes(9));  // true - 9 is still here unfortunately
console.log(squad.indexOf(9));   // finding where 9 is lurking

// Array to string - everyone holding hands like a kindergarten field trip
const groupPhoto = squad.join();
console.log(groupPhoto); // "1,2,3,4,5,6,7,9,10" - awkward but united

// ============================================
// ✂️ SLICE VS SPLICE - The Copy/Paste Betrayal
// ============================================

const originalSquad = [1, 2, 3, 4, 5, 6];
console.log(originalSquad.slice(1, 3));  // [2,3] - screenshot energy (original stays safe)
console.log(originalSquad.splice(1, 3)); // [2,3,4] - DELETES originals (backstabber vibes)

// ============================================
// 🔗 COMBINING ARRAYS - The Crossover Episode
// ============================================

const teamA = [1, 2, 3];
const teamB = ['a', 'b', 'c'];

// Old way - concat (giving millennial energy)
const boomerMerge = teamA.concat(teamB);

// New way - spread operator (immaculate vibes ✨)
const pogMerge = [...teamA, ...teamB]; // they're just vibing together fr
console.log(pogMerge);

// Create array from string - character arc unlocked
console.log(Array.from('yeet')); // ['y','e','e','t'] - living its best life

// Create array from variables - assembling the Avengers
let score1 = 100, score2 = 200, score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300] - the dream team

// ============================================
// 🎭 OBJECTS - The Main Characters
// ============================================
// Objects are like people - complicated, messy, and full of secrets
const secretKey = Symbol('password123');
const gamerProfile = {
    username: 'NotABot2004',
    [secretKey]: 'hunter2', // use [] for symbols or JS will ghost you
    level: 69,
    location: 'mom\'s basement',
    online: true,
    lastRage: ['monday', 'tuesday', 'everyday tbh']
};

// Accessing properties - pick your fighter
console.log(gamerProfile.username);      // dot notation (casual friday)
console.log(gamerProfile["level"]);      // bracket notation (formal wear)

// Object.freeze(gamerProfile); // locked in forever, no take-backsies 🔒

// ============================================
// 🏗️ NESTED OBJECTS - Inception But Make It Cringe
// ============================================

const socialMedia = {
    email: 'definitely.not.sus@gmail.com',
    profile: {
        bio: {
            name: 'Tyler',
            aesthetic: 'dark academia',
            pronouns: 'chaos/gremlin'
        }
    }
};

// Going THREE LAYERS DEEP (we need to go deeper)
console.log(socialMedia.profile.bio.name); // 'Tyler' - finally found them

// ============================================
// 🤝 MERGING OBJECTS - The Collab Nobody Asked For
// ============================================

const breakfast = {1: 'pancakes', 2: 'waffles'};
const lunch = {3: 'pizza'};

// Spread operator supremacy (Taylor's version) 👑
const fullMenu = {...breakfast, ...lunch};
console.log(fullMenu); // the mukbang special

// ============================================
// 💎 DESTRUCTURING - Unpacking The Loot
// ============================================

const onlineCourse = {
    title: 'How to Adult (Speedrun)',
    cost: '3 months of therapy',
    instructor: 'Some Random YouTuber'
};

// Destructure and rename (min-maxing efficiency 🔥)
const {instructor: sensei} = onlineCourse;
console.log(sensei); // 'Some Random YouTuber' - our guru fr fr like me!

// ============================================
// 🎪 FUNCTIONS - The Performers
// ============================================
// Functions are like your spotify playlists - you can replay them whenever
// Basic function - the OG, the classic, the legend
function yellMyName() {
    console.log('Skipper'); // main character moment
}
yellMyName(); // *dramatic entrance*

// Function with parameters - customize your chaos
function addStuff(thing1, thing2) {
    return thing1 + thing2; // return is king, console.log is just flexing
}
let mathResult = addStuff(420, 69);
console.log(mathResult); // 489 (nice)

// ============================================
// 🎯 REST PARAMETERS - Gotta Catch 'Em All
// ============================================

// ...prices is basically a vacuum that sucks up ALL the arguments
function calculateDamage(...hitPoints) {
    return hitPoints; // collected like Pokémon cards
}
console.log(calculateDamage(200, 400, 500)); // [200, 400, 500] - oof size: large

// ============================================
// 🔭 SCOPE - The "Can You See Me Now?" Game
// ============================================
// Think of scope like your bedroom door - some things stay private, some don't
function outerFunction() {
    const secret = 'I have anxiety';
    
    function innerFunction() {
        const deeperSecret = 'me too buddy';
        console.log(secret); // child accessing parent's trauma (relatable)
    }
    // console.log(deeperSecret); // ERROR - boundaries exist for a reason
    innerFunction();
}
outerFunction();

// ============================================
// ⚡ THIS KEYWORD - The Identity Crisis Pt. 2: Electric Boogaloo
// ============================================

const discordMod = {
    username: 'xXModeratorXx',
    powerLevel: 9001,
    flex: function() {
        // 'this' points to discordMod (self-aware king 👑)
        console.log(`${this.username} entered the chat. Power: ${this.powerLevel}`);
    }
};
discordMod.flex(); // *tips fedora like a nitro king!!*

// ============================================
// 🏹 ARROW FUNCTIONS - The Glow Up We Deserved
// ============================================
// Arrow functions are like texting vs calling - shorter, faster, better
// Old way - function keyword (giving 2010 energy)
const oldWay = function(x) {
    return x + 3;
};

// New way - arrow function (sleek, modern, chef's kiss)
const newWay = (x) => x + 3;
console.log(newWay(3)); // 6 - quick maths

// Arrow with code block (when you need that extra space)
const calculate = (num1, num2) => {
    const sum = num1 + num2;
    return sum; // doing it for the plot
};

// Arrow implicit return - one-liner legend
const quickMaths = (a, b) => a + b; // return? never heard of her
console.log(quickMaths(9, 10)); // 19

// ========================================
// 🚀 IIFE (Immediately Invoked Function Expression)
// ========================================
// IIFE = "I Immediately Forget Everything"
// Why wait to call a function when you can just... not wait? 
// JS developers really said "patience is overrated"

(function DB() {
  console.log('db connected');
})(); // <- that semicolon is MANDATORY or JS will cry

// Oh you thought regular functions were cool? 
// Wait till you see arrow functions doing the same thing ✨
(() => {
  console.log('db connected 2');
})(); // Still pointless, still runs immediately 💅

// IIFE with parameters because apparently we can't have nice simple things
((name) => {
  console.log('db connected 3', `${name}`);
})('sai'); // Congratulations, you just made a function you'll never reuse


// ========================================
// 🧠 JS EXECUTION CONTEXT
// ========================================
// AKA "How JS pretends to know what it's doing"
// 1. Global Execution Context - the main character energy
// 2. Function Execution Context - supporting cast
// 3. Eval Execution Context - the villain we don't mention (seriously, don't use eval)
// Fun fact: JS creates a whole new universe every time you call a function
// Talk about dramatic 🎭


// ========================================
// 🎮 CONTROL FLOW (aka making decisions like an adult)
// ========================================

// If-else: because life is full of choices
// Also because JS needs us to hold its hand through everything
if (2 == 2) {
  console.log(2 === 22); // Spoiler: it's false, math still works
} else {
  console.log('skipper'); // This will never run but we wrote it anyway
}

// Switch case: for when you want to feel like a C programmer
// "But we could just use if-else--" SHHH let people have things
switch (true) {
  case 1:
    console.log(1); // This never runs btw, 1 !== true
    break; // Break or fall through to sadness
  default:
    break; // The "idk what else to do" option
}


// ========================================
// 💎 NULLISH COALESCING OPERATOR (??)
// ========================================
// The "I'm not like other operators" operator
// Only cares about null/undefined, not your 0s and empty strings
// || would replace 0, but ?? is CLASSY and only replaces actual nothingness

let val1;
val1 = null ?? 10; // null said "I'm out" so we got 10
console.log(val1); // Prints 10 because null is a quitter


// ========================================
// ✨ TERNARY OPERATOR (if statements for people in a hurry)
// ========================================
// Why write 3 lines when you can write 1 unreadable line? 🤌

let a = 10;
a >= 10 
  ? console.log('True')  // This runs
  : console.log('False'); // This doesn't
// Job interviewers LOVE to ask about this
// As if anyone actually uses it for complex logic 💀


// ========================================
// 🔁 LOOPS (aka "How to annoy your CPU")
// ========================================

// For loop: The classic "do this until I say stop"
// Been around since dinosaurs roamed the Earth (aka ES1)
for (let i = 0; i < 10; i++) {
  console.log(i); // Prints 0-9 because we're off by one ALWAYS
  // Why does it stop at 9? Because CS majors hate us
}

// While loop: "Keep going until something changes"
// Dangerous if you forget to actually CHANGE something
let index = 10;
while (index > 2) {
  console.log(10); // Just... always 10. Living its best life
  index = index - 1; // THIS LINE PREVENTS INFINITE LOOP. DON'T FORGET IT.
  // Or your browser will freeze and you'll question your life choices
}

// Do-while loop: "YOLO - do it first, ask questions later"
// The rebel of loops - runs at least once no matter what
let score = 11;
do {
  console.log('11'); // Runs ONCE even though 11 > 10
} while (score <= 10); // Condition is false but do-while doesn't care
// This is the "better to ask forgiveness than permission" loop


// ========================================
// 🎯 LOOP CONTROL (escape hatches)
// ========================================
// break    - "I'm done, bye" (exits the loop completely)
// continue - "Skip this one, next!" (jumps to next iteration)
// return   - "I'm out of this entire function" (not just the loop, THE WHOLE THING)

// Pro tip: Infinite loops are not a feature, they're a cry for help
// If your fan starts sounding like a jet engine, you probably forgot to increment something 🚁

// ============================================
// 🎬 THE END - You're Built Different Now 🎉
// ============================================

console.log('GG EZ! You survived JS basics, absolute legend 💪😤')
console.log('Now go touch some grass and hydrate buddy💧🌱')
console.log('If you made this far i would pray for your life li-buddy😐');
