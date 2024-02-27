function createPersonalInfoComponent() {
    const personalInfoComponent = document.createElement('div');
    personalInfoComponent.className = 'personal-info';

    const personalInfoTitle = document.createElement('h2');
    personalInfoTitle.textContent = 'Личные данные';
    personalInfoComponent.appendChild(personalInfoTitle);

    const personalInfoHr = document.createElement('hr');
    personalInfoHr.className = 'side-hr';
    personalInfoComponent.appendChild(personalInfoHr);

    const personalInfoItems = [
        { title: 'ФИО', content: 'Данилов Дмитрий Евгеньевич' },
        { title: 'Дата рождения', content: '05.05.1986' },
        { title: 'Город', content: 'Ижевск' },
        { title: 'Номер телефона', content: '+7 (234) 228-18-15' },
        { title: 'Email', content: 'beautifulfly@yandex.ru' }
    ];

    personalInfoItems.forEach(item => {
        const infoItem = document.createElement('div');
        infoItem.className = 'personal-info-item';

        const title = document.createElement('h3');
        title.textContent = item.title;

        const content = document.createElement('p');
        content.textContent = item.content;

        infoItem.appendChild(title);
        infoItem.appendChild(content);

        personalInfoComponent.appendChild(infoItem);
    });

    return personalInfoComponent;
}

function createInterestsComponent() {
    const interestsComponent = document.createElement('div');
    interestsComponent.className = 'personal-info';

    const interestsTitle = document.createElement('h2');
    interestsTitle.textContent = 'Интересы';
    interestsComponent.appendChild(interestsTitle);

    const interestsHr = document.createElement('hr');
    interestsHr.className = 'side-hr';
    interestsComponent.appendChild(interestsHr);

    const interests = ['Хороший лидер', 'Занимаюсь спортом', 'Строительные практики', 'Выпускал журналы'];

    interests.forEach(interest => {
        const interestItem = document.createElement('div');
        interestItem.className = 'personal-info-item';

        const title = document.createElement('h3');
        title.textContent = interest;

        interestItem.appendChild(title);
        interestsComponent.appendChild(interestItem);
    });

    return interestsComponent;
}


// В шаблоне здесь сдвигается все вниз, вот и я этот сдвиг сделал, ничего не знаю
function createLanguagesComponent() {
    const languagesComponent = document.createElement('div');
    languagesComponent.className = 'personal-info lang-container';

    const languagesTitle = document.createElement('h2');
    languagesTitle.textContent = 'Языки';
    languagesComponent.appendChild(languagesTitle);

    const languagesHr = document.createElement('hr');
    languagesHr.className = 'side-hr';
    languagesComponent.appendChild(languagesHr);

    const languages = [
        { language: 'Английский', level: 'C1' },
        { language: 'Испанский', level: 'B2' }
    ];

    languages.forEach(lang => {
        const langItem = document.createElement('div');
        langItem.className = 'personal-info-item lang';

        const title = document.createElement('h3');
        title.textContent = lang.language;

        const level = document.createElement('p');
        level.textContent = lang.level;

        langItem.appendChild(title);
        langItem.appendChild(level);

        languagesComponent.appendChild(langItem);
    });

    return languagesComponent;
}

function createMainInfoComponent() {
    const mainInfoComponent = document.createElement('div');
    mainInfoComponent.className = 'main-info';

    const mainInfoTitle = document.createElement('h2');
    mainInfoTitle.textContent = 'Опыт работы';
    mainInfoComponent.appendChild(mainInfoTitle);

    const mainInfoHr = document.createElement('hr');
    mainInfoHr.className = 'main-info-hr';
    mainInfoComponent.appendChild(mainInfoHr);

    const jobExperiences = [
        {
            title: 'C++ разработчик',
            company: 'ООО Рога и Копыта, Москва',
            date: 'сентябрь 2020 г. — наст. время',
            description: 'Писал компилятор под js, который позволял ускорить билд приложений.'
        },
        {
            title: 'Angular-разработчик',
            company: 'Тинькофф Центр Разработки, Ижевск',
            date: 'февраль 2020 г. — август 2020 г.',
            description: 'Придумывал аналитические решения и разрабатывал веб-сайты для улучшения опыта пользователей.'
        }
    ];

    jobExperiences.forEach(experience => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'main-info-item';

        const title = document.createElement('h3');
        title.textContent = experience.title;

        const company = document.createElement('p');
        company.textContent = experience.company;

        const date = document.createElement('div');
        date.className = 'date';
        date.innerHTML = `<p>${experience.date}</p>`;

        const description = document.createElement('div');
        description.className = 'main-info-description';
        description.innerHTML = `<p>${experience.description}</p>`;

        experienceItem.appendChild(title);
        experienceItem.appendChild(company);
        experienceItem.appendChild(date);
        experienceItem.appendChild(description);

        mainInfoComponent.appendChild(experienceItem);
    });

    return mainInfoComponent;
}

function createTitleComponent() {
    const titleComponent = document.createElement('div');
    titleComponent.className = 'title';

    const title = document.createElement('h1');
    title.textContent = 'Данилов Дмитрий Евгеньевич';

    titleComponent.appendChild(title);

    const titleHr = document.createElement('hr');
    titleHr.className = 'main-hr';
    titleComponent.appendChild(titleHr);

    return titleComponent;
}

function createDescriptionComponent() {
    const descriptionComponent = document.createElement('div');
    descriptionComponent.className = 'description';

    const descriptionText = document.createElement('p');
    descriptionText.textContent = 'В целом достаточно сильный разработчик, я бы даже сказал умный, вообще умен не по годам. Подниму ваш проект, удалю все легаси, и все коммиты будут маленькими по 15 строк кода.';

    descriptionComponent.appendChild(descriptionText);

    return descriptionComponent;
}

function createMainContainer() {
    const mainContainer = document.createElement('div');
    mainContainer.className = 'main-container';

    mainContainer.appendChild(createTitleComponent());
    mainContainer.appendChild(createDescriptionComponent());
    mainContainer.appendChild(createMainInfoComponent());

    return mainContainer;
}

function createSidePanel() {
    const sidePanel = document.createElement('div');
    sidePanel.className = 'side-panel';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    const image = document.createElement('img');
    image.src = 'images/photo.jpg';
    image.alt = 'Фото';
    image.className = 'image';

    imageContainer.appendChild(image);
    sidePanel.appendChild(imageContainer);

    const personalContainer = document.createElement('div');
    personalContainer.className = 'personal';

    personalContainer.appendChild(createPersonalInfoComponent());
    personalContainer.appendChild(createInterestsComponent());
    personalContainer.appendChild(createLanguagesComponent());

    sidePanel.appendChild(personalContainer);

    return sidePanel;
}

function createResumePageComponent() {
    const resumePage = document.createElement('div');
    resumePage.className = 'container';

    const sidePanel = createSidePanel();
    const mainContainer = createMainContainer();

    resumePage.appendChild(sidePanel);
    resumePage.appendChild(mainContainer);

    return resumePage;
}

document.body.appendChild(createResumePageComponent());
