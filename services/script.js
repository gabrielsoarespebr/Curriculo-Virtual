const userInfo = {
    fullName: "Gabriel Soares Alves Bernardo da Silva",
    occupation: {
        name: "Desenvolvedor front-end",
        description: "É o profissional responsável pela interface de um site ou de uma aplicação web, garantindo aos usuários uma boa experiência através da usabilidade, acessibilidade e design."
    },
    url: {
        photo: "./assets/GabrielSoaresNoBackground.png",
        github: "https://github.com/gabrielsoarespebr",
        linkedin: "https://www.linkedin.com/in/gabrielsoarespebr/",
        images: ["https://i.kym-cdn.com/photos/images/newsfeed/000/538/716/7f5.gif"]
    }
};

const fullNameSplitted = userInfo.fullName.split(" ");
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
occupation.textContent = userInfo.occupation.name;
occupation.append(underscore);


// TOOLS ROW
const toolsRow = document.createElement("div");
toolsRow.id = "toolsRow";
toolsRow.innerHTML = `<a href="${userInfo.url.github}" target="_blank"><i class="fa-brands fa-square-github"></i></a>
<a href="${userInfo.url.linkedin}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
<i id="curriculumButton" class="fa-solid fa-file-arrow-down"></i>`

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

homePhoto.src = userInfo.url.photo;
homePhoto.alt = "User photo";
homePhoto.id = "userPhoto";

// SECTION HOME
const sectionHome = document.createElement("section");

sectionHome.id = "sectionHome";

sectionHome.append(presentationBox);
sectionHome.append(homePhoto);

document.body.append(sectionHome);

// OCCUPATION DESCRIPTION SECTION

const sectionOccupation = document.createElement("section");

sectionOccupation.id = "sectionOccupation";

const descriptionOccupation = `<div class="textContainer">
<h3 class="title">O que faz um ${userInfo.occupation.name}?</h3>
<p>${userInfo.occupation.description}</p>
</div>`;

const occupationImage = `<img id="occupationImage" src="${userInfo.url.images[0]}" alt="Occupation image">`


sectionOccupation.innerHTML = occupationImage + descriptionOccupation;

document.body.append(sectionOccupation);