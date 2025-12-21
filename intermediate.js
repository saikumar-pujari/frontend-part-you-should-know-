// 🎯 DOM MANIPULATION - THE ULTIMATE CHEAT SHEET (no cap fr fr)
// DOM = Document Object Model (basically the HTML but make it JavaScript's problem)

// ============================================
// 🔍 HUNTING FOR ELEMENTS (like finding your AirPods)
// ============================================

// 1️⃣ document.getElementById() - The OG, the classic, the reliable bestie
const mainTitle = document.getElementById('title');
// ^ Gets ONE element by ID (IDs are unique like your Netflix password... should be 💀)
// Returns: Single element or null (if it ghosted you)

// 2️⃣ document.getElementsByClassName() - The confusing homie
const buttons = document.getElementsByClassName('btn');
// ⚠️ PLOT TWIST: It's "ClassName" not "Class" (devs were quirky back then)
// Returns: HTMLCollection (NOT an array - it's giving fake friend energy)
// You gotta convert it like this:

const buttonArray = Array.from(buttons);
buttonArray.forEach((btn) => btn.style.color = 'red');
// Now we're cooking with gas 🔥

// Alternative drip way to convert:
const buttonArray2 = [...buttons]; // Spread operator go brrr
buttonArray2.forEach((btn) => btn.textContent = 'Yeet');

// 3️⃣ document.getElementsByTagName() - Gets all tags (div, p, span, etc.)
const allDivs = document.getElementsByTagName('div');
// Also returns HTMLCollection (same fake array energy 😤)

// ============================================
// 📝 READING & WRITING ELEMENT PROPERTIES
// ============================================

const card = document.getElementById('user-card');

// Getting the ID (kinda mid, you already knew it lol)
console.log(card.id); // 'user-card'

// Getting ALL classes as a string
console.log(card.className); // 'container flex-box shadow'

// Getting & Setting attributes (the proper way)
card.getAttribute('data-user'); // Gets custom attribute
card.setAttribute('data-user', '42069'); // Sets it (nice)
card.setAttribute('class', 'new-class'); // ⚠️ YEETS ALL OLD CLASSES (destructive af)

// Better way to add classes without nuking the old ones:
card.classList.add('premium'); // Adds a class
card.classList.remove('broke'); // Removes a class  
card.classList.toggle('dark-mode'); // Switches it on/off like a light switch

// ============================================
// 📖 READING CONTENT (three flavors of chaos)
// ============================================

const example = document.getElementById('example');

// 1. textContent - Shows EVERYTHING (even hidden stuff)
console.log(example.textContent); 
// Gets: "Hello World   Some hidden text"
// ^ Includes spaces, hidden elements, everything raw

// 2. innerHTML - The HTML included (could be sus)
console.log(example.innerHTML);
// Gets: "<strong>Hello</strong> <span>World</span>"
// ^ Full HTML tags and all, perfect for when you need that

// 3. innerText - Only the VISIBLE text (what the user actually sees)
console.log(example.innerText);
// Gets: "Hello World"
// ^ Respects CSS (if something's display:none, it won't show)

// Setting content (pick your fighter):
example.textContent = 'New text'; // Safe, plain text only
example.innerHTML = '<strong>Bold text</strong>'; // Adds HTML (watch out for XSS attacks tho 👀)
example.innerText = 'Visible text'; // Also safe, renders like textContent

// ============================================
// 🎯 QUERY SELECTORS - The Superior Method™ (fr no cap)
// ============================================

// querySelector() - Gets the FIRST match (uses CSS selectors - it's giving main character energy)
const firstButton = document.querySelector('.btn'); // By class
const header = document.querySelector('#header'); // By ID  
const input = document.querySelector('input[type="text"]'); // By attribute
const nestedDiv = document.querySelector('.container .card > div'); // Complex selectors go crazy

// querySelectorAll() - Gets ALL matches (returns NodeList)
const allButtons = document.querySelectorAll('.btn');
// ✨ GLOW UP: NodeList IS array-like and has .forEach() built in
allButtons.forEach((btn, index) => {
  btn.textContent = `Button ${index + 1}`;
  btn.style.background = '#' + Math.floor(Math.random()*16777215).toString(16); // Random color because why not
});

// Can also convert NodeList to array if you want the full array methods:
const btnArray = [...allButtons];
const texts = btnArray.map(btn => btn.textContent); // Now you can use .map(), .filter(), etc.

// ============================================
// 🎪 REAL WORLD EXAMPLES (let's get this bread)
// ============================================

// Example 1: Making a "sus" detector
const susWords = document.querySelectorAll('.message');
susWords.forEach(msg => {
  if (msg.textContent.toLowerCase().includes('sus')) {
    msg.style.color = 'red';
    msg.style.fontWeight = 'bold';
    msg.innerHTML += ' 🤨'; // Add the rock eyebrow
  }
});

// Example 2: Vibe check on all links
const links = document.querySelectorAll('a');
links.forEach(link => {
  link.setAttribute('target', '_blank'); // Open in new tab
  link.classList.add('external-link');
  link.innerHTML += ' 🔗'; // Add link emoji because aesthetic
});

// Example 3: Dark mode toggle (the classic)
const toggleBtn = document.querySelector('#theme-toggle');
const body = document.querySelector('body');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleBtn.textContent = body.classList.contains('dark-mode') 
    ? '☀️ Light Mode' 
    : '🌙 Dark Mode';
});

// ============================================
// 💡 PRO TIPS (the secret sauce)
// ============================================

// ❌ DON'T: Use getElementById when you can querySelector
// document.getElementById('my-id') // Boomer energy
// ✅ DO: 
// document.querySelector('#my-id') // Clean, consistent, powerful

// ❌ DON'T: Use getElementsByClassName and deal with HTMLCollection
// const items = document.getElementsByClassName('item'); // Pain
// ✅ DO:
// const items = document.querySelectorAll('.item'); // Based

// ❌ DON'T: Set innerHTML with user input (XSS vulnerability - big yikes)
// element.innerHTML = userInput; // Hackerman can inject scripts
// ✅ DO:
// element.textContent = userInput; // Safe, treats everything as text

// ============================================
// 🎓 QUICK REFERENCE (screenshot this fr)
// ============================================
/*
Method                          | Returns        | Array-like? | Use Case
------------------------------- | -------------- | ----------- | ---------
getElementById()                | Element        | N/A         | Legacy code
getElementsByClassName()        | HTMLCollection | Kinda       | Don't use this
getElementsByTagName()          | HTMLCollection | Kinda       | Don't use this  
querySelector()                 | Element        | N/A         | Get ONE element
querySelectorAll()              | NodeList       | Yes         | Get MULTIPLE elements (GOAT)

Property       | Shows What?                | Safe?
-------------- | -------------------------- | -----
textContent    | All text (even hidden)     | ✅ Yes
innerHTML      | HTML tags included         | ⚠️ Be careful
innerText      | Only visible text          | ✅ Yes
*/

// Now go forth and manipulate that DOM like a boss 😎🔥💯