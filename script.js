var square = document.getElementById('square');
var words = document.getElementbyID('words');

function changeColour(colour) {
    square.style.background = colour;
}

function clicked() {
    //var msg = "Build a<br>" + createBuzzwordPhrase();
    //words.innerHTML = msg;
    words.innerHTML = "Build a<br>" + createBuzzwordPhrase();  
}

function greeting() {
    words.innerHTML = "Welcom to flatland <br> I am Square!";
}


function createBuzzwordPhrase() {
    /* See https://en.wikipedia.org/wiki/List_of_buzzwords */
    let buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
    let action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
    let outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

    let idx_buz = Math.floor(Math.random() * buzz.length);
    let idx_act = Math.floor(Math.random() * action.length);
    let idx_out = Math.floor(Math.random() * outcome.length);

    return  buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}
                    
square.addEventListener('click', (event) =>  clicked());

/* create hover effect*/
square.addEventListener('mouseover', (event) => changeColour('grey'));
square.addEventListener('mouseout', (event) => changeColour('red'));

document.onload = greeting();

