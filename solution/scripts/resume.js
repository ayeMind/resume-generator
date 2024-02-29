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
                            ${!item.startDate ? "" : 
                              `<div class="date">
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

function createTitleComponent(titleText, fio) {
  if (titleText === "") {
    titleText = fio;
  }

  return `
        <div class="title">
            <h1>${titleText}</h1>
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

function createMainContainer(
  titleText,
  descriptionText,
  job,
  education,
  courses,
  fio,
) {
  return `
        <div class="main-container" test-id="resume-main-article">
          <div class="description-container" test-id="resume-main-section">
            ${createTitleComponent(titleText, fio)}
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
  titleText,
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
            ${createMainContainer(titleText, descriptionText, job, education, courses, fio)}
        </div>
        <button class="btn-return" test-id="back-button">Вернуться</button>
    `;
}

// const personalInfoItems = [
//     { title: 'ФИО', content: 'Данилов Дмитрий Евгеньевич' },
//     { title: 'Дата рождения', content: '05.05.1986' },
//     { title: 'Город', content: 'Ижевск' },
//     { title: 'Номер телефона', content: '+7 (234) 228-18-15' },
//     { title: 'Email', content: 'beautifulfly@yandex.ru' }
// ];

// const interests = ['Хороший лидер', 'Занимаюсь спортом', 'Строительные практики', 'Выпускал журналы'];

// const languages = [
//     { language: 'Английский', level: 'C1' },
//     { language: 'Испанский', level: 'B2' },
// ];

// const job = [
//     {
//         title: 'C++ разработчик',
//         where: 'ООО Рога и Копыта, Москва',
//         date: 'сентябрь 2020 г. — наст. время',
//         description: 'Писал компилятор под js, который позволял ускорить билд приложений.'
//     },
//     {
//         title: 'Angular-разработчик',
//         where: 'Тинькофф Центр Разработки, Ижевск',
//         date: 'февраль 2020 г. — август 2020 г.',
//         description: 'Придумывал аналитические решения и разрабатывал веб-сайты для улучшения опыта пользователей.'
//     }
// ];

// const education = [
//     {
//         title: 'Магистратура',
//         where: 'ЦУ, Москва',
//         date: 'сентябрь 2020 г. — наст. время',
//         description: 'Дизайн и разработка ПО'
//     },
//     {
//         title: 'Бакалавриат',
//         where: 'Уральский Федеральный Университет, Екатеринбург',
//         date: 'февраль 2020 г. — август 2020 г.',
//         description: 'Направление: МОАИС.'
//     }
// ];

// const courses = [
//     {
//         title: 'Школа промышленной разработки',
//         where: 'Известная компания',
//         date: 'январь 2021 г. — май 2021 г.',
//     },
//     {
//         title: 'Основы JavaScript, HTML, CSS',
//         where: 'ЦУ',
//         date: 'февраль 2020 г. — август 2020 г.',
//     },
//     {
//         title: 'Разработка на C++',
//         where: 'Образование для Всех',
//         date: 'январь 2019 г. — январь 2020 г.',
//     },
// ];

// const titleText = 'Данилов Дмитрий Евгеньевич';
// const descriptionText = 'В целом достаточно сильный разработчик, я бы даже сказал умный, вообще умен не по годам. Подниму ваш проект, удалю все легаси, и все коммиты будут маленькими по 15 строк кода.';

window.addEventListener("resumeDisplayed", function () {
  const resumeData = JSON.parse(localStorage.getItem("resumeData"));

  const imageSrc = "images/photo.jpg";
  const imageAlt = "Фото";

  const titleText = resumeData.mainInfo["resume-title-field"];
  const descriptionText = resumeData.mainInfo["personal-description"];

  let date;
  if (resumeData.mainInfo["birth"]) {
    date = new Date(resumeData.mainInfo["birth"]).toLocaleDateString("ru-RU");
  } else {
    date = "";
  }

  const personalInfoItems = [
    { title: "ФИО", content: resumeData.mainInfo["fio"] },
    { title: "Дата рождения", content: date},
    { title: "Город", content: resumeData.mainInfo["city"] },
    { title: "Номер телефона", content: resumeData.mainInfo["phone"] },
    { title: "Email", content: resumeData.mainInfo["email"] },
  ];

  const interests = resumeData.interests;
  const languages = resumeData.languages;
  const jobs = resumeData.jobs;
  const educations = resumeData.educations;
  const courses = resumeData.courses;

  const resumeDiv = document.querySelector(".resume")
  const formDiv = document.querySelector(".form")

  resumeDiv.innerHTML = createResumePageComponent(
    imageSrc,
    imageAlt,
    titleText,
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
  formDiv.classList.add("display-none")

  resumeDiv.classList.remove("display-none")

//   console.log(localStorage.getItem("resumeData"));

  const btnReturn = document.querySelector(".btn-return");
  
  btnReturn.addEventListener("click", function () {

    localStorage.removeItem("resumeData");

    resumeDiv.innerHTML = '';
    resumeDiv.classList.add("display-none")
    
    createbtn.disabled = false;
    formDiv.classList.remove("display-none")



  });
});
