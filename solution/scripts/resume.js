window.addEventListener("resumeDisplayed", function () {
  const resumeData = JSON.parse(localStorage.getItem("resumeData"));

  const imageSrc = "images/photo.jpg";
  const imageAlt = "Фото";

  let date;
  if (resumeData.mainInfo["birth"]) {
    date = new Date(resumeData.mainInfo["birth"]).toLocaleDateString("ru-RU");
  } else {
    date = "";
  }

  const personalInfoItems = [
    { title: "ФИО", content: resumeData.mainInfo["fio"] },
    { title: "Дата рождения", content: date },
    { title: "Город", content: resumeData.mainInfo["city"] },
    { title: "Номер телефона", content: resumeData.mainInfo["phone"] },
    { title: "Email", content: resumeData.mainInfo["email"] },
  ];

  const interests = resumeData.interest;
  const languages = resumeData.language;
  const descriptionText = resumeData["personal-description"];
  const jobs = resumeData.job;
  const educations = resumeData.education;
  const courses = resumeData.course;

  const resumeDiv = document.querySelector(".resume");
  const formDiv = document.querySelector(".form");

  resumeDiv.innerHTML = createResumePageComponent(
    imageSrc,
    imageAlt,
    descriptionText,
    personalInfoItems,
    interests,
    languages,
    jobs,
    educations,
    courses,
  );

  const createbtn = document.querySelector(".create");

  createbtn.disabled = true;
  formDiv.classList.add("display-none");

  resumeDiv.classList.remove("display-none");

  //   console.log(localStorage.getItem("resumeData"));

  const btnReturn = document.querySelector(".btn-return");

  btnReturn.addEventListener("click", function () {
    localStorage.removeItem("resumeData");

    resumeDiv.innerHTML = "";
    resumeDiv.classList.add("display-none");

    createbtn.disabled = false;
    formDiv.classList.remove("display-none");
  });

  const saveButton = document.querySelector(".btn-save");
  console.log(saveButton);
  saveButton.addEventListener("click", function () {
    const resumeData = JSON.parse(localStorage.getItem("resumeData"));
    let resumeList = JSON.parse(localStorage.getItem("resumeList")) || [];

    resumeList = [resumeData, ...resumeList];
    localStorage.setItem("resumeList", JSON.stringify(resumeList));
    localStorage.removeItem("resumeData");
  });
});



function createPersonalInfoComponent(personalInfoItems) {
  return `
        <div class="personal-info" test-id="resume-main-section">
            <h2>Личные данные</h2>
            <hr class="side-hr">
            <div class="personal-container">
                ${personalInfoItems
                  .map((item) => {
                    if (item.content.trim() !== "") {
                      return `
                            <div class="personal-info-item">
                                <h3>${item.title}</h3>
                                <p>${item.content}</p>
                            </div>
                        `;
                    } else {
                      return "";
                    }
                  })
                  .join("")}
            </div>
        </div>
    `;
}

function createInterestsComponent(interests) {
  if (interests.every((interest) => interest === "")) {
    return "";
  }

  return `
        <div class="personal-info" test-id="resume-main-section">
            <h2>Интересы</h2>
            <hr class="side-hr">
            ${interests
              .map(
                (interest) => `
                <div class="personal-info-item">
                    <h3>${interest}</h3>
                </div>
            `,
              )
              .join("")}
        </div>
    `;
}

function createLanguagesComponent(languages) {
  if (languages.every((lang) => lang.name === "" || lang.level === "")) {
    return "";
  }

  return `
        <div class="personal-info lang-container" test-id="resume-main-section">
            <h2>Языки</h2>
            <hr class="side-hr">
            ${languages
              .map(
                (lang) => `
                <div class="personal-info-item lang">
                    <h3>${lang.name}</h3>
                    <p>${lang.level}</p>
                </div>
            `,
              )
              .join("")}
        </div>
    `;
}

function createMainInfoComponent(mainInfo, titleText) {
  if (mainInfo.every((info) => info.title === "")) {
    return "";
  }

  return `
        <div class="main-info" test-id="resume-main-section">
            <h2>${titleText}</h2>
            <hr class="main-info-hr">
            <div class="main-info-list ${titleText.includes("Курсы") ? "no-description" : ""}">
                ${mainInfo
                  .map(
                    (item) => `
                    <div class="main-info-item">
                        <div class="main-info-row">
                            <div class="main-info-column">
                                <h3>${item.title}</h3>
                                <h4>${item.place ? item.place : ""}</h4>
                            </div>
                            ${
                              !item.startDate
                                ? ""
                                : `<div class="date">
                                <p>${item.startDate} — ${item.endDate ? item.endDate : "наст. время"}</p>
                              </div>`
                            }
                            
                        </div>
                        ${item.description ? `<div class="main-info-description"><p class="description-p">${item.description}</p></div>` : ""}
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `;
}

function createTitleComponent(fio) {
  return `
        <div class="title">
            <h1>${fio}</h1>
        </div>
    `;
}

function createDescriptionComponent(descriptionText) {
  if (descriptionText === "") {
    return "";
  }

  return `
        <div class="description">
            <hr class="main-hr">
            <p class="long">${descriptionText}</p>
        </div>
    `;
}

function createMainContainer(descriptionText, job, education, courses, fio) {
  return `
        <div class="main-container" test-id="resume-main-article">
          <div class="description-container" test-id="resume-main-section">
            ${createTitleComponent(fio)}
            ${createDescriptionComponent(descriptionText)}
          </div>
            <div class="main-info-container">
                ${createMainInfoComponent(job, "Опыт работы")}
                ${createMainInfoComponent(education, "Образование и квалификация")}
                ${createMainInfoComponent(courses, "Курсы")}
            </div>
        </div>
    `;
}

function createSidePanel(
  imageSrc,
  imageAlt,
  personalInfoItems,
  interests,
  languages,
) {
  return `
        <div class="side-panel" test-id="resume-main-article">
            <div class="image-container">
                <img src="${imageSrc}" alt="${imageAlt}" class="image">
            </div>
            <div class="personal">
                ${createPersonalInfoComponent(personalInfoItems)}
                ${createInterestsComponent(interests)}
                ${createLanguagesComponent(languages)}
            </div>
        </div>
    `;
}

function createResumePageComponent(
  imageSrc,
  imageAlt,
  descriptionText,
  personalInfoItems,
  interests,
  languages,
  job,
  education,
  courses,
) {
  const fio = personalInfoItems.find((item) => item.title === "ФИО").content;

  return `
        <div class="container" test-id="resume-main-content">
            ${createSidePanel(imageSrc, imageAlt, personalInfoItems, interests, languages)}
            ${createMainContainer(descriptionText, job, education, courses, fio)}
        </div>
        <div class="buttons">
          <button class="btn-return" test-id="back-button">Вернуться</button>
          <a href="/all" class="btn-save" test-id="save-button">Сохранить</a>
        </div>
    `;
}