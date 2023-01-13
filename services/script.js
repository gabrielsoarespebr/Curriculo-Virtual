const userFullName = "Gabriel Soares Alves Bernardo da Silva";
const userOccupation = "Desenvolvimento front-end";
const userURL = {
    photo: "./assets/GabrielSoaresNoBackground.png",
    github: "https://github.com/gabrielsoarespebr",
    linkedin: "https://www.linkedin.com/in/gabrielsoarespebr/"
};

const fullNameSplitted = userFullName.split(" ");
const nameAndSurName = fullNameSplitted[0] + " " + fullNameSplitted[1];

// UNDERSCORE ANIMATION
const underscore = document.createElement("span");
underscore.id = "underscore";
underscore.textContent = "_";

setInterval(function () {
    underscore.style.display = (underscore.style.display === "none") ? "inline" : "none";
}, 500);

// OCCUPATION
const occupation = document.createElement("h2");
occupation.id = "occupation";
occupation.textContent = userOccupation;
occupation.append(underscore);


// TOOLS ROW
const toolsRow = document.createElement("div");
toolsRow.id = "toolsRow";
toolsRow.innerHTML = `<a href="${userURL.github}" target="_blank"><i class="fa-brands fa-square-github"></i></a>
<a href="${userURL.linkedin}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>`

// TEXT PRESENTATION
const namePresentation = document.createElement("h1");

namePresentation.id = "namePresentation";
namePresentation.textContent = nameAndSurName;

// PRESENTATION BOX
const presentationBox = document.createElement("div");
presentationBox.id = "presentationBox";
presentationBox.append(namePresentation);
presentationBox.append(occupation);
presentationBox.append(toolsRow);

// HOME PHOTO
const homePhoto = document.createElement("img");

homePhoto.src = userURL.photo;
homePhoto.alt = "User photo";
homePhoto.id = "userPhoto";

// SECTION HOME
const sectionHome = document.createElement("section");

sectionHome.id = "sectionHome";

sectionHome.append(presentationBox);
sectionHome.append(homePhoto);

document.body.append(sectionHome);