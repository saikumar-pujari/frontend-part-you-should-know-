// DOM MANIPULATION - THE COMPLETE GUIDE
// DOM = Document Object Model (the bridge between HTML and JavaScript)

// ============================================
// PART 1: ELEMENT SELECTION METHODS
// ============================================

// Method 1: getElementById() - Gets a single element by its ID
// Returns: Element or null if not found
const mainTitle = document.getElementById('main-title');
console.log('Title element:', mainTitle);

// Method 2: getElementsByClassName() - Gets multiple elements by class name
// Returns: HTMLCollection (NOT a real array, needs conversion)
// Note: It's "ClassName" not "Class" - legacy naming from the early web days
const buttons = document.getElementsByClassName('btn');
console.log('HTMLCollection:', buttons);

// Converting HTMLCollection to Array (two ways):
const buttonArray = Array.from(buttons); // Method 1: Array.from()
const buttonArray2 = [...buttons]; // Method 2: Spread operator

// Now we can use array methods like forEach
buttonArray.forEach((btn, index) => {
    console.log(`Button ${index}:`, btn.textContent);
});

// Method 3: getElementsByTagName() - Gets all elements with a specific tag
const allDivs = document.getElementsByTagName('div');
console.log('All divs:', allDivs.length);

// Method 4: querySelector() - Gets FIRST matching element using CSS selectors
// This is the modern, preferred method for most use cases
const firstButton = document.querySelector('.btn'); // by class
const titleById = document.querySelector('#main-title'); // by ID
const firstInput = document.querySelector('input[type="text"]'); // by attribute

// Method 5: querySelectorAll() - Gets ALL matching elements
// Returns: NodeList (better than HTMLCollection, has forEach built-in)
const allButtons = document.querySelectorAll('.btn');
allButtons.forEach((btn, index) => {
    btn.setAttribute('data-index', index);
});

// ============================================
// PART 2: READING & MANIPULATING PROPERTIES
// ============================================

// Getting and Setting IDs
const demoBtn = document.getElementById('demo-btn');
console.log('Button ID:', demoBtn.id);

// Getting ALL classes as a string
console.log('Button classes:', demoBtn.className);

// Working with attributes
demoBtn.getAttribute('class'); // Gets attribute value
demoBtn.setAttribute('data-custom', 'value123'); // Sets custom attribute
// Warning: setAttribute('class') replaces ALL classes

// Better way: classList API (doesn't destroy existing classes)
demoBtn.classList.add('active'); // Add a class
demoBtn.classList.remove('active'); // Remove a class
demoBtn.classList.toggle('selected'); // Toggle on/off
demoBtn.classList.contains('btn'); // Check if class exists - returns true/false

// ============================================
// PART 3: READING & SETTING CONTENT
// ============================================

const contentDemo = document.getElementById('content-demo');

// Three ways to read/write content:

// 1. textContent - Raw text, includes hidden elements and whitespace
console.log('textContent:', contentDemo.textContent);

// 2. innerHTML - Full HTML markup included
console.log('innerHTML:', contentDemo.innerHTML);

// 3. innerText - Only VISIBLE text (respects CSS display properties)
console.log('innerText:', contentDemo.innerText);

// Setting content:
// contentDemo.textContent = 'New text'; // Safe, plain text only
// contentDemo.innerHTML = '<strong>Bold</strong>'; // Renders HTML (XSS risk with user input)
// contentDemo.innerText = 'Visible text'; // Same as textContent in most cases

// ============================================
// PART 4: CREATING & ADDING ELEMENTS
// ============================================

// Method 1: Using innerHTML (easier but less optimized)
function addItemInnerHTML(text) {
    const li = document.createElement('li');
    li.innerHTML = text; // Simple but re-parses HTML each time
    document.querySelector('.parent').appendChild(li);
}

// Method 2: Using createTextNode (more efficient, better performance)
function addItemTextNode(text) {
    const li = document.createElement('li');
    const textNode = document.createTextNode(text); // Creates text node directly
    li.appendChild(textNode); // Attaches text node to li
    document.querySelector('.parent').appendChild(li);
}

// ============================================
// PART 5: UPDATING & REPLACING ELEMENTS
// ============================================

// Update content directly
function updateListItem(index, newText) {
    const item = document.querySelector(`.parent li:nth-child(${index})`);
    if (item) {
        item.textContent = newText;
    }
}

// Replace entire element
function replaceListItem(index, newText) {
    const oldItem = document.querySelector(`.parent li:nth-child(${index})`);
    if (oldItem) {
        const newItem = document.createElement('li');
        newItem.textContent = newText;
        oldItem.replaceWith(newItem); // Modern replace method
    }
}

// ============================================
// PART 6: REMOVING ELEMENTS
// ============================================

function removeLastItem() {
    const lastItem = document.querySelector('.parent li:last-child');
    if (lastItem) {
        lastItem.remove(); // Modern method - cleaner than removeChild
    }
}

// ============================================
// PART 7: EVENT HANDLING
// ============================================

// Method 1: Direct property assignment (old school)
// document.getElementById('ph2').onclick = () => alert('Clicked!');

// Method 2: addEventListener (modern, preferred - allows multiple listeners)
document.getElementById('demo-btn').addEventListener('click', () => {
    const output = document.getElementById('selection-output');
    output.textContent = 'Button was clicked! querySelector works perfectly.';
});

// Event Delegation - handling events on parent for multiple children
// This is more efficient than adding listeners to each child
document.getElementById('images').addEventListener('click', (e) => {
    console.log('Event target:', e.target);
    console.log('Event currentTarget:', e.currentTarget);
    
    // Check if clicked element is an image
    if (e.target.tagName === 'IMG') {
        const parentLi = e.target.parentNode;
        parentLi.style.opacity = '0.5';
        setTimeout(() => {
            parentLi.remove();
        }, 300);
    }
}, false); // false = bubbling phase (default)

// preventDefault - stops default browser behavior
document.getElementById('google').addEventListener('click', (e) => {
    e.preventDefault(); // Stops navigation
    e.stopPropagation(); // Stops event bubbling to parent elements
    console.log('Link clicked but navigation prevented');
    alert('Navigation blocked - preventDefault in action!');
});

// ============================================
// PART 8: CONTENT MANIPULATION DEMO
// ============================================

document.getElementById('show-text').addEventListener('click', () => {
    const content = document.getElementById('content-demo');
    const output = document.getElementById('content-output');
    output.textContent = `textContent: "${content.textContent}"`;
});

document.getElementById('show-html').addEventListener('click', () => {
    const content = document.getElementById('content-demo');
    const output = document.getElementById('content-output');
    output.textContent = `innerHTML: "${content.innerHTML}"`;
});

document.getElementById('show-inner').addEventListener('click', () => {
    const content = document.getElementById('content-demo');
    const output = document.getElementById('content-output');
    output.textContent = `innerText: "${content.innerText}"`;
});

// ============================================
// PART 9: DYNAMIC LIST MANAGEMENT
// ============================================

document.getElementById('add-item').addEventListener('click', () => {
    const input = document.getElementById('list-input');
    const text = input.value.trim();
    
    if (text) {
        addItemTextNode(text);
        input.value = ''; // Clear input
        input.focus(); // Return focus to input
    }
});

document.getElementById('remove-last').addEventListener('click', removeLastItem);

// Allow Enter key to add items
document.getElementById('list-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('add-item').click();
    }
});

// ============================================
// PART 10: DARK MODE TOGGLE
// ============================================

const themeToggle = document.getElementById('theme-toggle');
const body = document.querySelector('body');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
});

// ============================================
// PART 11: TIMERS & INTERVALS
// ============================================

// setTimeout - runs once after delay
let timeoutId;

document.getElementById('start-timer').addEventListener('click', () => {
    const message = document.getElementById('timer-message');
    message.textContent = 'Timer started... wait 3 seconds';
    
    timeoutId = setTimeout(() => {
        message.textContent = 'Timer completed! This ran after 3 seconds.';
        message.style.color = '#28a745';
    }, 3000);
});

// clearTimeout - cancels scheduled timeout
document.getElementById('stop-timer').addEventListener('click', () => {
    clearTimeout(timeoutId);
    const message = document.getElementById('timer-message');
    message.textContent = 'Timer cancelled!';
    message.style.color = '#dc3545';
});

// setInterval - runs repeatedly at specified interval
let intervalId;
let counter = 0;

document.getElementById('start-interval').addEventListener('click', () => {
    counter = 0;
    const output = document.getElementById('interval-output');
    
    intervalId = setInterval(() => {
        counter++;
        output.textContent = `Interval running... count: ${counter}`;
    }, 1000);
});

// clearInterval - stops repeating interval
document.getElementById('stop-interval').addEventListener('click', () => {
    clearInterval(intervalId);
    const output = document.getElementById('interval-output');
    output.textContent = `Interval stopped at count: ${counter}`;
});

// ============================================
// PART 12: RANDOM COLOR GENERATOR
// ============================================

// Generates random hex color
function generateRandomColor() {
    const hexChars = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

let colorIntervalId = null;

document.getElementById('start-color').addEventListener('click', () => {
    // Prevent multiple intervals
    if (colorIntervalId) return;
    
    colorIntervalId = setInterval(() => {
        const color = generateRandomColor();
        document.body.style.backgroundColor = color;
        document.getElementById('color-display').textContent = color;
        document.getElementById('color-display').style.backgroundColor = color;
    }, 1000);
});

document.getElementById('stop-color').addEventListener('click', () => {
    clearInterval(colorIntervalId);
    colorIntervalId = null;
    
    // Reset to original gradient
    document.body.style.backgroundColor = '';
});

// ============================================
// PART 13: API CALLS - XMLHttpRequest (Legacy Method)
// ============================================

// Old way using XMLHttpRequest
function fetchUserXHR(username) {
    const requestUrl = `https://api.github.com/users/${username}`;
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', requestUrl);
    
    xhr.onreadystatechange = () => {
        // readyState 4 means request is complete
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                displayUserProfile(data);
            } else {
                alert('User not found!');
            }
        }
    };
    
    xhr.send();
}

// ============================================
// PART 14: API CALLS - FETCH (Modern Method)
// ============================================

// Modern way using fetch API
async function fetchUserModern(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
            throw new Error('User not found');
        }
        
        const data = await response.json();
        displayUserProfile(data);
        
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to fetch user data');
    }
}

// Display fetched user data
function displayUserProfile(data) {
    const profileCard = document.getElementById('profile-card');
    
    document.getElementById('avatar').src = data.avatar_url;
    document.getElementById('username').textContent = data.login;
    document.getElementById('followers').textContent = data.followers;
    document.getElementById('repos').textContent = data.public_repos;
    document.getElementById('profile-link').href = data.html_url;
    
    profileCard.style.display = 'flex';
}

document.getElementById('fetch-user').addEventListener('click', () => {
    const username = document.getElementById('github-username').value.trim();
    if (username) {
        fetchUserModern(username); // Using modern fetch method
    }
});

// ============================================
// PART 15: PROMISES
// ============================================

// Creating a promise
function createPromise(shouldResolve) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve('Promise resolved successfully!');
            } else {
                reject('Promise rejected - something went wrong');
            }
        }, 1500);
    });
}

// Handling promise with then/catch
document.getElementById('promise-success').addEventListener('click', () => {
    const output = document.getElementById('promise-output');
    output.textContent = 'Promise pending...';
    
    createPromise(true)
        .then((message) => {
            output.textContent = message;
            output.style.color = 'green';
        })
        .catch((error) => {
            output.textContent = error;
            output.style.color = 'red';
        })
        .finally(() => {
            console.log('Promise completed (finally block always runs)');
        });
});

document.getElementById('promise-fail').addEventListener('click', () => {
    const output = document.getElementById('promise-output');
    output.textContent = 'Promise pending...';
    
    createPromise(false)
        .then((message) => {
            output.textContent = message;
            output.style.color = 'green';
        })
        .catch((error) => {
            output.textContent = error;
            output.style.color = 'red';
        });
});

// ============================================
// PART 16: CLASSES & PROTOTYPES
// ============================================

// ES6 Class syntax (modern way)
class User {
    constructor(username, email, phone) {
        this.username = username;
        this.email = email;
        this.phone = phone;
    }
    
    // Method defined inside class
    getPassword() {
        return `${this.phone}-is-your-number`;
    }
    
    getUsername() {
        return this.username.toUpperCase();
    }
}

// Adding method via prototype (alternative way)
User.prototype.getEmail = function() {
    return `${this.email.toLowerCase()} is the email`;
};

// Using the class
document.getElementById('create-user').addEventListener('click', () => {
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const phone = document.getElementById('user-phone').value;
    
    if (name && email && phone) {
        const user = new User(name, email, phone);
        const output = document.getElementById('user-output');
        
        output.innerHTML = `
            <strong>User Created:</strong><br>
            Username: ${user.getUsername()}<br>
            Email: ${user.getEmail()}<br>
            Password: ${user.getPassword()}
        `;
    }
});

// ============================================
// PART 17: THIS KEYWORD & BIND
// ============================================

// Example class showing 'this' binding
class Rectangle {
    constructor() {
        this.width = 100;
        this.height = 50;
        this.server = 'https://localhost:3000';
    }
    
    // Arrow functions automatically bind 'this'
    calculateArea = () => {
        return this.width * this.height;
    }
    
    // Regular method - needs manual binding in event listeners
    handleClick() {
        console.log(`Area: ${this.width * this.height}`);
        console.log('Server:', this.server);
        console.log('this context:', this);
    }
}

// Using bind to maintain context
const rect = new Rectangle();
// If you add event listener: button.addEventListener('click', rect.handleClick.bind(rect));

// ============================================
// PART 18: INHERITANCE
// ============================================

// Parent class
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    makeSound() {
        return `${this.name} makes a sound`;
    }
}

// Child class extending parent
class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Dog'); // Calls parent constructor
        this.breed = breed;
    }
    
    // Override parent method
    makeSound() {
        return `${this.name} barks!`;
    }
    
    // New method specific to Dog
    fetch() {
        return `${this.name} fetches the ball`;
    }
}

// Usage:
const myDog = new Dog('Max', 'Golden Retriever');
console.log(myDog.makeSound()); // "Max barks!"
console.log(myDog.fetch()); // "Max fetches the ball"

// ============================================
// PART 19: CALL, APPLY, BIND
// ============================================

// call() - invokes function with specific 'this' context
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

console.log(greet.call(person1, 'Hello', '!')); // "Hello, Alice!"
console.log(greet.call(person2, 'Hi', '.')); // "Hi, Bob."

// apply() - same as call but takes array of arguments
console.log(greet.apply(person1, ['Hey', '?'])); // "Hey, Alice?"

// bind() - creates new function with bound context
const greetAlice = greet.bind(person1);
console.log(greetAlice('Welcome', '!')); // "Welcome, Alice!"

// ============================================
// KEY TAKEAWAYS & BEST PRACTICES
// ============================================

/*
1. PREFER querySelector/querySelectorAll over older methods
   - More flexible (uses CSS selectors)
   - Consistent return types
   - Works with complex selectors

2. USE textContent for user input, innerHTML only for trusted content
   - Prevents XSS attacks
   - Better performance

3. EVENT DELEGATION is more efficient for multiple similar elements
   - Less memory usage
   - Handles dynamically added elements

4. ALWAYS use const/let, never var
   - Block scope prevents bugs
   - const for values that won't change

5. PREFER modern async/await over callbacks
   - More readable
   - Easier error handling

6. USE classList instead of className
   - Doesn't overwrite existing classes
   - More intuitive API

7. CLEAR intervals and timeouts when done
   - Prevents memory leaks
   - Stops unnecessary processing
*/

console.log('Tutorial loaded successfully - check the HTML page for interactive demos!');