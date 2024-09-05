let sayings = [
  "MITT has another staffing change without informing us",
  "MITT cafeteria gets more expensive",
  "Staggered lunches go to absolute shit and there is chaos",
  "Brady starts something",
  "PTC says to step into the generosity zone",
  "PTC fails to have basic items",
  "Someone dropped out without telling us",
  "We struggle with the lofts again for 5 minutes",
  "PTC gets “hacked”",
  "Elaine leaves us",
  "My Gamble isn’t managing PTEC",
  "We go on an adventure",
  "Dylan gets physics but none of us do",
  "“I’m just the messenger”",
  "Urge to crime",
  "Blatant misinformation from Frank",
  "Jessica returns",
  "We are bribed with food but receive non",
  "The class claps unnecessarily",
  "We get emailed regarding crucial MITT info less than 24 hours before relevant",
  "Grade 11 PTEC has 20 students or less",
  "Class outlines for software students are copied from W3 schools",
  "First day menti",
  "We aren’t told where to go and wander aimlessly",
  "First day plans are derailed and vee writes an essay",
  "PTC chocolate pie prices increase or shrink-flation",
  "We are given duplo, marshmallows, noodle, and told to build like a kindergarten class",
  "Bad icebreaker game",
  "Desks arranged poorly",
  "PTC schedules unresolved",
  "Information email contains lies",
  "Teacher missing first day"
];

let randomizedGridNums = [];
const GRIDCELLS = 25;

function createRandomBingoList() {
  randomizedGridNums = [];
  let i = 0;
  let rndIndex = 0;
  let usedCells = [];
  let alreadyUsed = false;

  while (i < GRIDCELLS) {
    alreadyUsed = false;
    rndIndex = Math.floor(Math.random() * 32);

    for(let j = 0; j < usedCells.length; j++) {
      if (rndIndex == usedCells[j]) {
        alreadyUsed = true;
      }
    }

    if (alreadyUsed == false) {
      usedCells.push(rndIndex);
      randomizedGridNums.push(sayings[rndIndex])
      i++;
    }
  }
}

let bingoGridList = document.querySelectorAll("table td");

function assignPhrasesToGrid() {
  for (let i = 0; i < GRIDCELLS; i++) {
    bingoGridList[i].textContent = randomizedGridNums[i];
  }
}

createRandomBingoList();

assignPhrasesToGrid();


document.addEventListener("click", event => {
  if (event.target.className == "cell" && !event.target.classList.contains("clicked")) {
    event.target.classList.add("clicked");
  }
  else {
    event.target.classList.remove("clicked");
  }
});

document.addEventListener("click", event => {
  if (event.target.classList.contains("generate")) {
    createRandomBingoList();
    assignPhrasesToGrid();
  }
});