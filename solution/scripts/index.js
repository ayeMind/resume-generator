function createPersonalInfoComponent(personalInfoItems) {
    const personalInfoComponent = document.createElement('div');
    personalInfoComponent.className = 'personal-info';

    const personalInfoTitle = document.createElement('h2');
    personalInfoTitle.textContent = 'Личные данные';
    personalInfoComponent.appendChild(personalInfoTitle);

    const personalInfoHr = document.createElement('hr');
    personalInfoHr.className = 'side-hr';
    personalInfoComponent.appendChild(personalInfoHr);

    const container = document.createElement('div');
    container.className = 'personal-container';

    personalInfoItems.forEach(item => {
        const infoItem = document.createElement('div');
        infoItem.className = 'personal-info-item';

        const title = document.createElement('h3');
        title.textContent = item.title;

        const content = document.createElement('p');
        content.textContent = item.content;

        infoItem.appendChild(title);
        infoItem.appendChild(content);

        container.appendChild(infoItem);
    });

    personalInfoComponent.appendChild(container);
    return personalInfoComponent;
}

function createInterestsComponent(interests) {
    const interestsComponent = document.createElement('div');
    interestsComponent.className = 'personal-info';

    const interestsTitle = document.createElement('h2');
    interestsTitle.textContent = 'Интересы';
    interestsComponent.appendChild(interestsTitle);

    const interestsHr = document.createElement('hr');
    interestsHr.className = 'side-hr';
    interestsComponent.appendChild(interestsHr);

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


function createLanguagesComponent(languages) {
    const languagesComponent = document.createElement('div');
    languagesComponent.className = 'personal-info lang-container';

    const languagesTitle = document.createElement('h2');
    languagesTitle.textContent = 'Языки';
    languagesComponent.appendChild(languagesTitle);

    const languagesHr = document.createElement('hr');
    languagesHr.className = 'side-hr';
    languagesComponent.appendChild(languagesHr);

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

function createMainInfoComponent(mainInfo, titleText) {
    const mainInfoComponent = document.createElement('div');
    mainInfoComponent.className = 'main-info';

    const mainInfoTitle = document.createElement('h2');
    mainInfoTitle.textContent = titleText;
    mainInfoComponent.appendChild(mainInfoTitle);

    const mainInfoHr = document.createElement('hr');
    mainInfoHr.className = 'main-info-hr';
    mainInfoComponent.appendChild(mainInfoHr);

    const mainList = document.createElement('div');
    if (!titleText.includes('Курсы')) {
        mainList.className = 'main-info-list';
    } else {
        mainList.className = 'main-info-list no-description';
    }

    mainInfo.forEach(item => {

        const itemDiv = document.createElement('div');
        itemDiv.className = 'main-info-item';

        const mainInfoRow = document.createElement('div');
        mainInfoRow.className = 'main-info-row';

        const mainInfoColumn = document.createElement('div');
        mainInfoColumn.className = 'main-info-column';

        const title = document.createElement('h3');
        title.textContent = item.title;

        const where = document.createElement('h4');
        where.textContent = item.where;

        mainInfoColumn.appendChild(title);
        mainInfoColumn.appendChild(where);

        const date = document.createElement('div');
        date.className = 'date';
        date.innerHTML = `<p>${item.date}</p>`;

        mainInfoRow.appendChild(mainInfoColumn);
        mainInfoRow.appendChild(date);

        itemDiv.appendChild(mainInfoRow);
        if (item.description) {
            const description = document.createElement('div');
            description.className = 'main-info-description';
            description.innerHTML = `<p>${item.description}</p>`;
            itemDiv.appendChild(description);
        }
       
        mainList.appendChild(itemDiv);
    });

    mainInfoComponent.appendChild(mainList);

    return mainInfoComponent;
}

function createTitleComponent(titleText) {
    const titleComponent = document.createElement('div');
    titleComponent.className = 'title';

    const title = document.createElement('h1');
    title.textContent = titleText;

    titleComponent.appendChild(title);

    const titleHr = document.createElement('hr');
    titleHr.className = 'main-hr';
    titleComponent.appendChild(titleHr);

    return titleComponent;
}

function createDescriptionComponent(descriptionText) {
    const descriptionComponent = document.createElement('div');
    descriptionComponent.className = 'description';

    const descriptionTextElement = document.createElement('p');
    descriptionTextElement.className = 'long';

    descriptionTextElement.textContent = descriptionText;

    descriptionComponent.appendChild(descriptionTextElement);

    return descriptionComponent;
}

function createMainContainer(titleText, descriptionText, job, education, courses) {
    const mainContainer = document.createElement('div');
    mainContainer.className = 'main-container';

    mainContainer.appendChild(createTitleComponent(titleText));
    mainContainer.appendChild(createDescriptionComponent(descriptionText));

   const mainInfoContainer = document.createElement('div');
    mainInfoContainer.className = 'main-info-container';

    mainInfoContainer.appendChild(createMainInfoComponent(job, 'Опыт работы'));
    mainInfoContainer.appendChild(createMainInfoComponent(education, 'Образование и квалификация'));
    mainInfoContainer.appendChild(createMainInfoComponent(courses, 'Курсы'));

    mainContainer.appendChild(mainInfoContainer);

    return mainContainer;
}

function createSidePanel(imageSrc, imageAlt, personalInfoItems, interests, languages) {
    const sidePanel = document.createElement('div');
    sidePanel.className = 'side-panel';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    const image = document.createElement('img');
    image.src = imageSrc;
    image.alt = imageAlt;
    image.className = 'image';

    imageContainer.appendChild(image);
    sidePanel.appendChild(imageContainer);

    const personalContainer = document.createElement('div');
    personalContainer.className = 'personal';

    personalContainer.appendChild(createPersonalInfoComponent(personalInfoItems));
    personalContainer.appendChild(createInterestsComponent(interests));
    personalContainer.appendChild(createLanguagesComponent(languages));

    sidePanel.appendChild(personalContainer);

    return sidePanel;
}

function createResumePageComponent(imageSrc, imageAlt, titleText, descriptionText, personalInfoItems, interests, languages, job, education, courses) {
    const resumePage = document.createElement('div');
    resumePage.className = 'container';

    const sidePanel = createSidePanel(imageSrc, imageAlt, personalInfoItems, interests, languages);
    const mainContainer = createMainContainer(titleText, descriptionText, job, education, courses);

    resumePage.appendChild(sidePanel);
    resumePage.appendChild(mainContainer);

    return resumePage;
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

document.body.appendChild(createResumePageComponent(imageSrc, imageAlt, titleText, descriptionText, personalInfoItems, interests, languages, job, education, courses));
