function createPersonalInfoComponent(personalInfoItems) {
    return `
        <div class="personal-info">
            <h2>Личные данные</h2>
            <hr class="side-hr">
            <div class="personal-container">
                ${personalInfoItems.map(item => `
                    <div class="personal-info-item">
                        <h3>${item.title}</h3>
                        <p>${item.content}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function createInterestsComponent(interests) {
    return `
        <div class="personal-info">
            <h2>Интересы</h2>
            <hr class="side-hr">
            ${interests.map(interest => `
                <div class="personal-info-item">
                    <h3>${interest}</h3>
                </div>
            `).join('')}
        </div>
    `;
}

function createLanguagesComponent(languages) {
    return `
        <div class="personal-info lang-container">
            <h2>Языки</h2>
            <hr class="side-hr">
            ${languages.map(lang => `
                <div class="personal-info-item lang">
                    <h3>${lang.language}</h3>
                    <p>${lang.level}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function createMainInfoComponent(mainInfo, titleText) {
    return `
        <div class="main-info">
            <h2>${titleText}</h2>
            <hr class="main-info-hr">
            <div class="main-info-list ${titleText.includes('Курсы') ? 'no-description' : ''}">
                ${mainInfo.map(item => `
                    <div class="main-info-item">
                        <div class="main-info-row">
                            <div class="main-info-column">
                                <h3>${item.title}</h3>
                                <h4>${item.where}</h4>
                            </div>
                            <div class="date">
                                <p>${item.date}</p>
                            </div>
                        </div>
                        ${item.description ? `<div class="main-info-description"><p>${item.description}</p></div>` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function createTitleComponent(titleText) {
    return `
        <div class="title">
            <h1>${titleText}</h1>
            <hr class="main-hr">
        </div>
    `;
}

function createDescriptionComponent(descriptionText) {
    return `
        <div class="description">
            <p class="long">${descriptionText}</p>
        </div>
    `;
}

function createMainContainer(titleText, descriptionText, job, education, courses) {
    return `
        <div class="main-container">
            ${createTitleComponent(titleText)}
            ${createDescriptionComponent(descriptionText)}
            <div class="main-info-container">
                ${createMainInfoComponent(job, 'Опыт работы')}
                ${createMainInfoComponent(education, 'Образование и квалификация')}
                ${createMainInfoComponent(courses, 'Курсы')}
            </div>
        </div>
    `;
}

function createSidePanel(imageSrc, imageAlt, personalInfoItems, interests, languages) {
    return `
        <div class="side-panel">
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

function createResumePageComponent(imageSrc, imageAlt, titleText, descriptionText, personalInfoItems, interests, languages, job, education, courses) {
    return `
        <div class="container">
            ${createSidePanel(imageSrc, imageAlt, personalInfoItems, interests, languages)}
            ${createMainContainer(titleText, descriptionText, job, education, courses)}
        </div>
    `;
}

const personalInfoItems = [
    { title: 'ФИО', content: 'Данилов Дмитрий Евгеньевич' },
    { title: 'Дата рождения', content: '05.05.1986' },
    { title: 'Город', content: 'Ижевск' },
    { title: 'Номер телефона', content: '+7 (234) 228-18-15' },
    { title: 'Email', content: 'beautifulfly@yandex.ru' }
];

const interests = ['Хороший лидер', 'Занимаюсь спортом', 'Строительные практики', 'Выпускал журналы'];

const languages = [
    { language: 'Английский', level: 'C1' },
    { language: 'Испанский', level: 'B2' },
];

const job = [
    {
        title: 'C++ разработчик',
        where: 'ООО Рога и Копыта, Москва',
        date: 'сентябрь 2020 г. — наст. время',
        description: 'Писал компилятор под js, который позволял ускорить билд приложений.'
    },
    {
        title: 'Angular-разработчик',
        where: 'Тинькофф Центр Разработки, Ижевск',
        date: 'февраль 2020 г. — август 2020 г.',
        description: 'Придумывал аналитические решения и разрабатывал веб-сайты для улучшения опыта пользователей.'
    }
];

const education = [
    {
        title: 'Магистратура',
        where: 'ЦУ, Москва',
        date: 'сентябрь 2020 г. — наст. время',
        description: 'Дизайн и разработка ПО'
    },
    {
        title: 'Бакалавриат',
        where: 'Уральский Федеральный Университет, Екатеринбург',
        date: 'февраль 2020 г. — август 2020 г.',
        description: 'Направление: МОАИС.'
    }
];
    
const courses = [
    {
        title: 'Школа промышленной разработки',
        where: 'Известная компания',
        date: 'январь 2021 г. — май 2021 г.',
    },
    {
        title: 'Основы JavaScript, HTML, CSS',
        where: 'ЦУ',
        date: 'февраль 2020 г. — август 2020 г.',
    },
    {
        title: 'Разработка на C++',
        where: 'Образование для Всех',
        date: 'январь 2019 г. — январь 2020 г.',
    },
];

const imageSrc = 'images/photo.jpg';
const imageAlt = 'Фото';
const titleText = 'Данилов Дмитрий Евгеньевич';
const descriptionText = 'В целом достаточно сильный разработчик, я бы даже сказал умный, вообще умен не по годам. Подниму ваш проект, удалю все легаси, и все коммиты будут маленькими по 15 строк кода.';


window.addEventListener('resumeDisplayed', function() {
    document.body.innerHTML = createResumePageComponent(imageSrc, imageAlt, titleText, descriptionText, personalInfoItems, interests, languages, job, education, courses);
    console.log(localStorage.getItem('resumeData'));
});


