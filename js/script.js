// first day

// start
function start() {
  // map
  document.getElementById("kitchen").style.backgroundColor = "#adb5bd";
  document.getElementById("lobby").style.backgroundColor = "#fcc419";
  document.getElementById("meeting").style.backgroundColor = "#adb5bd";
  document.getElementById("kitchen").innerHTML = "Kitchen";
  document.getElementById("lobby").innerHTML = "Lobby<br>(you are here)";
  document.getElementById("meeting").innerHTML = "Meeting Room";

  // meter
  document.getElementById("meterBar").style.width = "50%";
  document.getElementById("meterBar").style.backgroundColor = "#1d4ed8";

  // story
  document.getElementById("sceneTitle").innerHTML = "8:59 AM";
  document.getElementById("story").innerHTML = "It's your first day as an intern. You made it with one minute to spare. Your manager texts you: Grab me a coffee and meet me in the meeting room. Also, the meeting started 5 minutes ago.";
  document.getElementById("choiceA").innerHTML = "Get the coffee first";
  document.getElementById("choiceB").innerHTML = "Skip it and go to the meeting";

  // your day
  document.getElementsByClassName("chapter")[0].innerHTML = "1. Showed up (barely on time).";
  document.getElementsByClassName("chapter")[1].innerHTML = "2. ...";
  document.getElementsByClassName("chapter")[2].innerHTML = "3. ...";

  // clicks
  document.getElementById("choiceA").onclick = function() {
    kitchen();
  };
  document.getElementById("choiceB").onclick = function() {
    meeting();
  };
  document.getElementById("kitchen").onclick = function() {
    kitchen();
  };
  document.getElementById("meeting").onclick = function() {
    meeting();
  };
}

// kitchen
function kitchen() {
  document.getElementById("lobby").style.backgroundColor = "#adb5bd";
  document.getElementById("kitchen").style.backgroundColor = "#fcc419";
  document.getElementById("lobby").innerHTML = "Lobby";
  document.getElementById("kitchen").innerHTML = "Kitchen<br>(you are here)";

  document.getElementById("meterBar").style.width = "40%";

  document.getElementById("sceneTitle").innerHTML = "The Kitchen";
  document.getElementById("story").innerHTML = "The coffee machine has a sign on it: BROKEN SINCE 2019. The only coffee in the whole kitchen is a fresh cup in a mug that says CEO. DO NOT TOUCH. There's also a box of donuts.";
  document.getElementById("choiceA").innerHTML = "Take the CEO's coffee";
  document.getElementById("choiceB").innerHTML = "Bring a donut instead";

  document.getElementsByClassName("chapter")[1].innerHTML = "2. Found out the coffee machine is broken.";

  document.getElementById("choiceA").onclick = function() {
    ceoCoffee();
  };
  document.getElementById("choiceB").onclick = function() {
    donut();
  };
  lockMap();
}

// meeting room
function meeting() {
  document.getElementById("lobby").style.backgroundColor = "#adb5bd";
  document.getElementById("meeting").style.backgroundColor = "#fcc419";
  document.getElementById("lobby").innerHTML = "Lobby";
  document.getElementById("meeting").innerHTML = "Meeting Room<br>(you are here)";

  document.getElementById("meterBar").style.width = "45%";

  document.getElementById("sceneTitle").innerHTML = "The Meeting Room";
  document.getElementById("story").innerHTML = "Everyone is staring at a blank screen. The laptop won't connect to the projector. Your manager sees you and says: Oh good, you're the new IT person, right? You are not the new IT person.";
  document.getElementById("choiceA").innerHTML = "Pretend you are";
  document.getElementById("choiceB").innerHTML = "Say you're the intern";

  document.getElementsByClassName("chapter")[1].innerHTML = "2. Got mistaken for the IT person.";

  document.getElementById("choiceA").onclick = function() {
    pretend();
  };
  document.getElementById("choiceB").onclick = function() {
    honest();
  };
  lockMap();
}

// map stops working
function lockMap() {
  document.getElementById("kitchen").onclick = function() {
    alert("It's your first day. No wandering around.");
  };
  document.getElementById("meeting").onclick = function() {
    alert("It's your first day. No wandering around.");
  };
}

// ending 1
function ceoCoffee() {
  document.getElementById("meterBar").style.width = "100%";
  document.getElementById("meterBar").style.backgroundColor = "green";
  document.getElementById("sceneTitle").innerHTML = "Ending: Lunch with the CEO";
  document.getElementById("story").innerHTML = "The CEO walks in right as you hand the mug to your manager. Everyone goes silent. Then the CEO laughs and says: That's bold. I like it. You're invited to lunch with the CEO on your first day.";
  document.getElementsByClassName("chapter")[2].innerHTML = "3. Stole the CEO's coffee. It worked out?";
  theEnd();
}

// ending 2
function donut() {
  document.getElementById("meterBar").style.width = "60%";
  document.getElementById("meterBar").style.backgroundColor = "#1d4ed8";
  document.getElementById("sceneTitle").innerHTML = "Ending: The Donut Intern";
  document.getElementById("story").innerHTML = "Your manager wanted coffee, not a donut, but eats it anyway. Somehow the whole office hears about it. From now on everyone calls you the donut intern, and you're expected to bring donuts every Friday.";
  document.getElementsByClassName("chapter")[2].innerHTML = "3. Became the donut intern forever.";
  theEnd();
}

// ending 3
function pretend() {
  document.getElementById("meterBar").style.width = "5%";
  document.getElementById("meterBar").style.backgroundColor = "red";
  document.getElementById("sceneTitle").innerHTML = "Ending: Wi-Fi Down";
  document.getElementById("story").innerHTML = "You confidently unplug a random cable. The projector doesn't turn on, but the Wi-Fi for the entire floor turns off. Forty people come out of their offices. Your manager slowly turns to look at you.";
  document.getElementsByClassName("chapter")[2].innerHTML = "3. Turned off the Wi-Fi for the whole floor.";
  theEnd();
}

// ending 4
function honest() {
  document.getElementById("meterBar").style.width = "80%";
  document.getElementById("meterBar").style.backgroundColor = "green";
  document.getElementById("sceneTitle").innerHTML = "Ending: Presenter";
  document.getElementById("story").innerHTML = "Your manager laughs and asks you to read the slides out loud from their laptop while IT fixes the screen. You end up presenting the whole meeting. People think you've worked here for years.";
  document.getElementsByClassName("chapter")[2].innerHTML = "3. Accidentally ran the whole meeting.";
  theEnd();
}

// end
function theEnd() {
  document.getElementById("choiceA").innerHTML = "Play again";
  document.getElementById("choiceB").innerHTML = "Go home";
  document.getElementById("choiceA").onclick = function() {
    start();
  };
  document.getElementById("choiceB").onclick = function() {
    alert("Day one done. See you tomorrow!");
  };
}

start();
