function nav() {
    if (document.getElementById("mySidebar").style.width != "15%") {
        document.getElementById("openBtn").innerText = " << ";
      document.getElementById("mySidebar").style.width = "15%";
      document.getElementById("main").style.marginLeft = "17%";
    } else {
        document.getElementById("openBtn").innerText = " >> ";
      document.getElementById("mySidebar").style.width = "0vh";
      document.getElementById("main").style.marginLeft= "0vh";
    }
}

function openProj() {
    if (document.getElementById("sideProj").innerText.includes(">")) {
        document.getElementById("sideProj").innerText = " v projects";
        document.getElementById("sideProjs").style.display = "inline";
    } else {
        document.getElementById("sideProj").innerText = " > projects";
        document.getElementById("sideProjs").style.display = "none";
    }
}

function openHobbies() {
    if (document.getElementById("sideHobby").innerText.includes(">")) {
        document.getElementById("sideHobby").innerText = " v hobbies";
        document.getElementById("sideHobbies").style.display = "inline";
    } else {
        document.getElementById("sideHobby").innerText = " > hobbies";
        document.getElementById("sideHobbies").style.display = "none";
    }
}